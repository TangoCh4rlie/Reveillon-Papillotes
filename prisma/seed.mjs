import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function seed() {
    try {
        // Ajouter un utilisateur
        const user = await prisma.user.create({
            data: {
                email: 'example@example.com',
                username: 'example',
                password: 'password',
            },
        });

        // Ajouter un post
        const post = await prisma.post.create({
            data: {
                title: 'Example Post',
                content: 'Lorem ipsum dolor sit amet',
                authorId: user.id,
            },
        });

        console.log('Seed data added successfully');
    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        await prisma.$disconnect();
    }
}

seed();
