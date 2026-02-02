
//const { PrismaClient } = require('@prisma/client');
const { PrismaClient } = require('../../generated/prisma2');
const { PrismaPg } = require('@prisma/adapter-pg');

const { seedPersonas } = require('./persona.seed.cjs');
const { seedRoles } = require('./roles.seed.cjs');
const { seedRolesAsignados } = require('./roles-asignados.seed.cjs');

const prisma = new PrismaClient({
  adapter: new PrismaPg({
    connectionString: process.env.DATABASE_URL || "postgresql://postgres:Chubaca2025@localhost:5432/usersRolesPrisma?schema=public"
  }),
});

async function main() {
  console.log('🌱 Starting database seed...');

  await seedPersonas(prisma);
  await seedRoles(prisma);
  await seedRolesAsignados(prisma);

  console.log('🌱 Database seed completed');
}

main()
  .catch((e) => {
    console.error('❌ Seed failed', e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

  