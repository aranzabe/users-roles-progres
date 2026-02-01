// src/personas/dto/create-persona.dto.ts
import { IsString, IsInt, IsOptional, IsArray } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  dni: string;

  @IsString()
  nombre: string;

  @IsString()
  clave: string;

  @IsString()
  tfno: string;

  @IsInt()
  @IsOptional()
  edad?: number;

  @IsArray()
  @IsOptional()
  roles?: number[]; // array de role IDs
}
