import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const authenticate = async (username: string, password: string) => {

    //TODO: Replace with actual authentication
    const userInDb = await prisma.user.findFirst({
        where: {
            username: username
        }
    });

    if (!userInDb) {
        return null;
    } else if (userInDb.password !== password) {
        return null;
    } else {
        const user = {
            id: userInDb.id,
            username: userInDb.username,
            email: userInDb.email
        }
    
        return user
    }
}

export const userService = {
    authenticate
};