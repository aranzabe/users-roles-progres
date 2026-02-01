import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { PrismaModule } from './prisma/prisma.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PrismaModule,
    PersonaModule, // carga variables .env globalmente
  ],
  controllers: [],
  providers: [PrismaService],
})
export class AppModule {}
