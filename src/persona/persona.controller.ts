// src/personas/personas.controller.ts
import { Controller, Get, Post, Body, Param, Patch, Delete, Put } from '@nestjs/common';

import { CreatePersonaDto } from './dto/create-persona.dto';
import { UpdatePersonaDto } from './dto/update-persona.dto';
import { PersonaService } from './persona.service';

@Controller('personas')
export class PersonaController {
  constructor(private readonly service: PersonaService) {}

  @Post()
  create(@Body() dto: CreatePersonaDto) {
    return this.service.create(dto);
  }

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Get(':dni')
  findOne(@Param('dni') dni: string) {
    return this.service.findOne(dni);
  }

  @Put(':dni')
  update(@Param('dni') dni: string, @Body() dto: UpdatePersonaDto) {
    return this.service.update(dni, dto);
  }

  @Delete(':dni')
  remove(@Param('dni') dni: string) {
    return this.service.remove(dni);
  }
}
