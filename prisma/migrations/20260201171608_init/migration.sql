/*
  Warnings:

  - A unique constraint covering the columns `[descripcion]` on the table `Rol` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Rol_descripcion_key" ON "Rol"("descripcion");
