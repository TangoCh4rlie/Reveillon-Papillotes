"use client";

import { getServerAuthSession } from "@/server/auth";
import { signOut } from "next-auth/react";
import Link from "next/link";
import LogoutButton from "./logoutButton";

export default async function Header() {

    const authSession = await getServerAuthSession();

    const handleLogout = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        await signOut();
    }

    return (
        <header className="flex space-x-10">
            <Link href="#">
                <BookIcon className="h-6 w-6" />
            </Link>
            <div className="flex space-x-2">
                <Link href="#">
                    Home
                </Link>
                <Link href="#">
                    About
                </Link>
            </div>
            {!authSession && <div className="flex space-x-2">
                <Link href="/login">
                    Login
                </Link>
                <Link href="/signup">
                    Sign up
                </Link>
            </div>}
            {authSession && <div className="flex space-x-2">
                <Link href="/profile">
                    Profile
                </Link>
                <LogoutButton />
            </div>}
        </header>
    );
}

function BookIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
        </svg>
    )
}