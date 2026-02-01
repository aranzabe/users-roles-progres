async function seedPersonas(prisma) {
  console.log('🌱 Seeding personas...');

  await prisma.persona.createMany({
    data: [
      { dni: '12K', nombre: 'Jesús', clave: '013', tfno: '555 661 022', edad: 17 },
      { dni: '10A', nombre: 'Sergio', clave: '123', tfno: '555 123 635', edad: 23 },
      { dni: '4D', nombre: 'Víctor', clave: '123', tfno: '555 128 3394', edad: 43 },
      { dni: '13H', nombre: 'CarlosP', clave: '1234', tfno: '555 238 392', edad: 92 },
      { dni: '14F', nombre: 'Jaime', clave: '4321', tfno: '555 238 272', edad: 71 },
      { dni: '18U', nombre: 'JuanC', clave: '1111', tfno: '555 238 492', edad: 57 },
      { dni: '19I', nombre: 'CarlosR', clave: '12', tfno: '555 353 445', edad: 27 },
      { dni: '1A', nombre: 'Cristina', clave: '123', tfno: '555 123 489', edad: 31 },
      { dni: '1E', nombre: 'Alberto', clave: '1234', tfno: '555 345 243', edad: 39 },
      { dni: '200RE', nombre: 'Javier', clave: '1234', tfno: '555 425 423', edad: 15 },
      { dni: '20Z', nombre: 'Antonio', clave: '', tfno: '555 272 332', edad: 12 },
      { dni: '2B', nombre: 'José', clave: '123', tfno: '555 234 352', edad: 20 },
      { dni: '3C', nombre: 'José E', clave: '3', tfno: '555 234 343', edad: 30 },
      { dni: '5E', nombre: 'Diego', clave: '4', tfno: '555 545 345', edad: 42 },
      { dni: '6F', nombre: 'Noelia', clave: '4', tfno: '555 345 436', edad: 40 },
      { dni: '7G', nombre: 'Ramón', clave: '5', tfno: '555 324 337', edad: 51 },
      { dni: '8H', nombre: 'Marta', clave: '1', tfno: '555 487 438', edad: 37 },
      { dni: '90TE', nombre: 'Álvaro', clave: '1234', tfno: '555 859 342', edad: 52 },
      { dni: '999M', nombre: 'Marco', clave: '1234', tfno: '555 263 891', edad: 45 },
      { dni: '9I', nombre: 'Alfredo', clave: '', tfno: '555 328 329', edad: 19 },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Personas seeded');
}

module.exports = { seedPersonas };
