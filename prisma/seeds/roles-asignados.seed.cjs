async function seedRolesAsignados(prisma) {
  console.log('🌱 Seeding roles asignados...');

  const asignaciones = [
    ['10A', 'Administrador'],
    ['10A', 'Usuario'],
    ['2B', 'Administrador'],
    ['3C', 'Administrador'],
    ['4D', 'Usuario'],
    ['5E', 'Administrador'],
    ['5E', 'Usuario'],
    ['6F', 'Usuario'],
    ['7G', 'Administrador'],
    ['8H', 'Usuario'],
    ['9I', 'Administrador'],
    ['9I', 'Usuario'],
    ['13H', 'Usuario'],
  ];

  for (const [dniPersona, descripcionRol] of asignaciones) {
    const rol = await prisma.rol.findUnique({
      where: { descripcion: descripcionRol },
    });

    if (!rol) {
      console.warn(`⚠️ Rol no encontrado: ${descripcionRol}`);
      continue;
    }

    await prisma.rolAsignado.upsert({
      where: {
        dniPersona_rolId: {
          dniPersona,
          rolId: rol.id,
        },
      },
      update: {},
      create: {
        dniPersona,
        rolId: rol.id,
      },
    });
  }

  console.log('✅ Roles asignados seeded');
}

module.exports = { seedRolesAsignados };
