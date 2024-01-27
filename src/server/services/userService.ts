import prisma from "@/lib/prisma";

const authenticate = async (username: string, password: string) => {

    const userInDb = await prisma.user.findFirst({
        where: {
            username: username
        }
    });


    if (!userInDb) {
        return null;
        throw new Error("User not found");
    } else if (userInDb.password !== password) {
        return null;
        throw new Error("Incorrect password");
    } else {
        const user = {
            id: userInDb.id,
            name: userInDb.username,
            email: userInDb.email
        }
        return user
    }
}

export const userService = {
    authenticate
};

// catch (error) {
//     if (error instanceof Prisma.PrismaClientKnownRequestError) {
//         console.log(error.message)
//         return null;
//     }
// }