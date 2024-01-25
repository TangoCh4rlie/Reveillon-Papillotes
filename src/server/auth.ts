import { NextAuthOptions, getServerSession } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { userService } from "./services/userService";

export const authOptions: NextAuthOptions = {
    session: {
        strategy: "jwt",
        //TODO sepcify duration
    },
    callbacks: {
        async jwt({ token, account, profile }) {
            if (account && account.type === "credentials") {
                token.userId = account.providerAccountId;
            }
            return token;
        },
        async session({ session, token, user }) {
            //@ts-ignore
            session.user.id = token.userId;
            return session;
        },
    },
    pages: {
        signIn: "/login",
        signOut: "/logout",
    },
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text", placeholder: "username" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                const { username, password } = credentials as {
                    username: string
                    password: string
                };

                return userService.authenticate(username, password);
            }
        })
    ],
}

export const getServerAuthSession = () => getServerSession(authOptions);

//https://medium.com/@julispitangso/authentication-in-next-js-14-app-router-using-nextauth-with-credential-provider-c6c6e64433de