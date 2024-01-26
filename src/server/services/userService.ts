const authenticate = (username: string, password: string) => {

    //TODO: Replace with actual authentication

    if (username !== "admin" && password !== "admin") {
        return null;
    }

    const user = {
        id: "9001",
        name: "Admin",
        email: "admin@localhost"
    }

    return user;
}

export const userService = {
    authenticate
};