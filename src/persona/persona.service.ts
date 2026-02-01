// src/personas/personas.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';

@Injectable()
export class PersonaService {
  constructor(private prisma: PrismaService) {}

  async create(createDto: CreatePersonaDto) {
    const { roles, ...personaData } = createDto;

    // Verificar roles
    if (roles && roles.length > 0) {
      const rolesExistentes = await this.prisma.rol.findMany({
        where: { id: { in: roles } },
      });

      if (rolesExistentes.length !== roles.length) {
        throw new BadRequestException('Uno o más roles no existen');
      }
    }

    // Crear persona y asignar roles en una sola transacción
    console.log('Creando persona con datos:', personaData, 'y roles:', roles);
    return this.prisma.persona.create({
      data: {
        ...personaData,
        rolesAsignados: {
          create: roles?.map((rolId) => ({ rolId })) || [],
        },
      },
      include: { rolesAsignados: { include: { rol: true } } },
    });
  }

  findAll() {
    return this.prisma.persona.findMany({
      include: { rolesAsignados: { include: { rol: true } } },
    });
  }

  findOne(dni: string) {
    return this.prisma.persona.findUnique({
      where: { dni },
      include: { rolesAsignados: { include: { rol: true } } },
    });
  }

  async update(dni: string, updateDto: UpdatePersonaDto) {
    const { roles, ...personaData } = updateDto;

    // Verificar roles si se pasan
    if (roles) {
      const rolesExistentes = await this.prisma.rol.findMany({
        where: { id: { in: roles } },
      });

      if (rolesExistentes.length !== roles.length) {
        throw new BadRequestException('Uno o más roles no existen');
      }

      // Actualizar roles
      await this.prisma.rolAsignado.deleteMany({ where: { dniPersona: dni } });
    }

    return this.prisma.persona.update({
      where: { dni },
      data: {
        ...personaData,
        rolesAsignados: roles
          ? { create: roles.map((rolId) => ({ rolId })) }
          : undefined,
      },
      include: { rolesAsignados: { include: { rol: true } } },
    });
  }

  remove(dni: string) {
    return this.prisma.persona.delete({ where: { dni } });
  }
}
