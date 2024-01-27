import Link from "next/link";
import { getServerAuthSession } from "@/server/auth";
import UserInfo from "@/components/UserInfo";

export default async function Home() {

  const authSession = await getServerAuthSession();


  return (
    <main className="flex items-center justify-center h-screen">
      {authSession?.user && <UserInfo user={authSession?.user} />}
      {!authSession?.user && (
        <Link className="font-medium mt-2 text-blue-600 hover:underline" href="/login">
          Login
        </Link>
      )}
    </main>
  );

}


// // extracting data from usesession as session
// const { data: session } = useSession()

// // checking if sessions exists
// if (session) {
//   // rendering components for logged in users
//   return (
//     <div className="w-full h-screen flex flex-col justify-center items-center">
//       <div className="w-44 h-44 relative mb-4">
//       <Image
//         src={session.user?.image as string}
//         fill
//         alt=""
//         className="object-cover rounded-full"
//       />
//       </div>
//       <p className="text-2xl mb-2">Welcome <span className="font-bold">{session.user?.name}</span>. Signed In As</p>
//       <p className="font-bold mb-4">{session.user?.email}</p>
//       <button className="bg-red-600 py-2 px-6 rounded-md" onClick={() => signOut()}>Sign out</button>
//     </div>
//   )
// }

// // rendering components for not logged in users
// return (
//   <div className="w-full h-screen flex flex-col justify-center items-center">
//       <p className="text-2xl mb-2">Not Signed In</p>
//       <button className="bg-none border-gray-300 border py-2 px-6 rounded-md mb-2" onClick={() => signIn('github')}>Sign in with github</button>
//   </div>
// )

/* <>
      <Header />
      <main>
          <div>
            <div>
              <h1>
                Welcome to Papillotes Reveillon Citations
              </h1>
              <p>
                A reference for all citations in the "Papillotes Reveillon" paper.
              </p>
            </div>
            <div>
              <Link
                className=""
                href="profile"
              >
                Create New Post
              </Link>
            </div>
          </div>
      </main>
    </> */
