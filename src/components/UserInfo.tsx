"use client";

import { User } from "@/types/user";
import { signOut } from "next-auth/react";

type UserInfoProps = {
  user: User;
}

export default function UserInfo({ user }: UserInfoProps) {
  const handleLogout = async () => {
    await signOut();
  }

  const test = () => {
    console.log(user);
  }

  return(
   <div className="rounded-lg border shadow-lg p-10">
      <div>
        Id : {user.id}
      </div>
      <div>
        Username : {user.name}
      </div>
      <div>
        Email : {user.email}
      </div>
      <button onClick={test}>
        test
      </button>
      <button className="font-medium mt-2 text-blue-600 hover:underline" onClick={handleLogout} >
        Log out
      </button>
    </div>
  );
}