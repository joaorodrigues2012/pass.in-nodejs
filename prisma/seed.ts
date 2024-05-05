import { prisma } from '../src/lib/prisma';

async function seed() {
  await prisma.event.create({
    data: {
      id: 'd51e9806-afb0-499f-9ab3-55c3d2aa7fea',
      title: 'Teste de banco',
      slug: 'teste-de-banco',
      details: 'testando...',
      maximumAttendees: 120
    }
  });
}

seed().then(() => {
  console.log('Database seeded!');
  prisma.$disconnect();
});