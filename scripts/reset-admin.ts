import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    try {
        console.log('Checking existing admin users...');
        const count = await prisma.adminUser.count();
        console.log(`Found ${count} admin users.`);

        console.log('Deleting all admin users...');
        await prisma.adminUser.deleteMany({});
        console.log('✅ Success! All admin users have been removed.');
        console.log(' You can now go to the Admin Login page and enter your new Email and Password to create the Super Admin account.');
    } catch (error) {
        console.error('Error resetting admin:', error);
    } finally {
        await prisma.$disconnect();
    }
}

main();
