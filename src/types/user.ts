export type User = {
    id?: string | null;
    name?: string | null;
    email?: string | null;
}

export type UserCreateInput = {
    name: string;
    email: string;
    password: string;
}