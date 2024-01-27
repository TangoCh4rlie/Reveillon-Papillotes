import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
    if (!req.body) {
        return {
            status: 400,
            body: { message: "No body provided" }
        }
    }
    const username = req.body;

    const user = await authenticate(username, password);

    if (user) {
        return {
            status: 200,
            body: { user }
        }
    } else {
        return {
            status: 401,
            body: { message: "Invalid credentials" }
        }
    }
}