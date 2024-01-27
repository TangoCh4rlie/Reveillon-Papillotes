"use client";

import { UserCreateInput } from "@/types/user";
import { ChangeEvent, FormEvent, useState } from "react";

interface UserCreateInputRaw extends UserCreateInput {
    passwordVerify: string;
}

export default function SignupPage() {
    const [inputs, setInputs] = useState<UserCreateInputRaw>({ name: "", email: "", password: "", passwordVerify: ""});
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();

        if (inputs.password !== inputs.passwordVerify) {
            setError("Passwords do not match");
            return;
        }

        const user = {
            name: inputs.name,
            email: inputs.email,
            password: inputs.password,
        }

        try {
            await fetch("/api/users", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user),
            })
            .then((res) => res.json())
            .then((data) => {
                if (data.body.error) {
                    setError(data.body.error);
                } else {
                    window.location.href = "/login";
                }
            });
        } catch (error: any) {
            console.error(error);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs({ ...inputs, [name]: value });
    }

    return (
        <>
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                    <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">
                                Username
                            </label>
                            <div className="mt-2">
                                <input
                                    id="name"
                                    name="name"
                                    type="username"
                                    autoComplete="off"
                                    required
                                    value={inputs.name || ""}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                Email
                            </label>
                            <div className="mt-2">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="off"
                                    required
                                    value={inputs.email || ""}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="off"
                                    required
                                    value={inputs.password || ""}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                    Password confirmation
                                </label>
                            </div>
                            <div className="mt-2">
                                <input
                                    id="passwordVerify"
                                    name="passwordVerify"
                                    type="password"
                                    autoComplete="off"
                                    required
                                    value={inputs.passwordVerify || ""}
                                    onChange={handleChange}
                                    className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                            >
                                Sign in
                            </button>
                        </div>
                        {error && (
                            <p className="text-red-600 text-center capitalize">
                                {error}
                            </p>
                        )}
                    </form>
                    <div>
                        <p>
                            <span className="text-sm text-gray-900">
                                Already have an account?
                            </span>
                            <a
                                href="/login"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                            >
                                {" "}
                                Login
                            </a>
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}