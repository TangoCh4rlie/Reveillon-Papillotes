import NextAuth from "next-auth"
import EmailProvider from "next-auth/providers/email";
import { sendVerificationRequest } from "@/lib/Mailer";

// importing providers
import GithubProvider from "next-auth/providers/github"


const handler = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_ID as string,
            clientSecret: process.env.GITHUB_SECRET as string,
        }),
        // EmailProvider({
        //     server: process.env.EMAIL_SERVER,
        //     from: process.env.EMAIL_FROM,
        //     sendVerificationRequest({
        //         identifier: email,
        //         url,
        //         provider: { server, from },
        //     }) {

        //     },
        // }),
    ]
})

export { handler as GET, handler as POST }