-- CreateTable
CREATE TABLE "Persona" (
    "dni" VARCHAR(10) NOT NULL,
    "nombre" VARCHAR(20) NOT NULL,
    "clave" VARCHAR(20) NOT NULL,
    "tfno" VARCHAR(20) NOT NULL,
    "edad" INTEGER NOT NULL DEFAULT 18,

    CONSTRAINT "Persona_pkey" PRIMARY KEY ("dni")
);

-- CreateTable
CREATE TABLE "Rol" (
    "id" SERIAL NOT NULL,
    "descripcion" VARCHAR(20) NOT NULL,

    CONSTRAINT "Rol_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "RolAsignado" (
    "idra" SERIAL NOT NULL,
    "dniPersona" VARCHAR(10) NOT NULL,
    "rolId" INTEGER NOT NULL,

    CONSTRAINT "RolAsignado_pkey" PRIMARY KEY ("idra")
);

-- CreateIndex
CREATE UNIQUE INDEX "RolAsignado_dniPersona_rolId_key" ON "RolAsignado"("dniPersona", "rolId");

-- AddForeignKey
ALTER TABLE "RolAsignado" ADD CONSTRAINT "RolAsignado_dniPersona_fkey" FOREIGN KEY ("dniPersona") REFERENCES "Persona"("dni") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RolAsignado" ADD CONSTRAINT "RolAsignado_rolId_fkey" FOREIGN KEY ("rolId") REFERENCES "Rol"("id") ON DELETE CASCADE ON UPDATE CASCADE;
