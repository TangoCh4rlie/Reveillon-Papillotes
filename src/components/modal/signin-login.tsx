/**
 * v0 by Vercel.
 * @see https://v0.dev/t/fn4nA0Un15a
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import InputField from "../ui/input-field"
import Checkbox from "../ui/checkbox"
import Link from "next/link"
import Button from "@/components/ui/button"

export default function Component() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto bg-black bg-opacity-50">
      <div className="mx-auto w-full max-w-md rounded bg-white p-6">
        <div className="flex justify-between">
          <h2 className="text-lg font-semibold">Sign In</h2>
          <button className="text-black hover:text-gray-700">
            <XIcon className="h-6 w-6" />
          </button>
        </div>
        <form className="mt-4 space-y-6">
          <div>
            <label className="block text-sm font-medium leading-5 text-gray-700" htmlFor="email">
              Email address
            </label>
            <div className="mt-1">
              <InputField id="email" placeholder="Enter your email" type="email" />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium leading-5 text-gray-700" htmlFor="password">
              Password
            </label>
            <div className="mt-1">
              <InputField id="password" placeholder="Enter your password" type="password" />
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox id="remember" />
              <label className="ml-2 block text-sm leading-5 text-gray-900" htmlFor="remember">
                Remember me
              </label>
            </div>
            <div className="text-sm leading-5">
              <Link className="font-medium text-black hover:text-gray-700" href="#">
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button name="Sign in" style="w-full" />
          </div>
        </form>
        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm leading-5">
              <span className="px-2 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>
          <div className="mt-6 grid grid-cols-3 gap-3">
            <div>
              <Button name="qsd" style="w-full" />
                {/* <FacebookIcon className="h-5 w-5 text-blue-600" />
              </Button> */}
            </div>
            <div>
              <Button name="sql" style="w-full" />
                {/* <ChromeIcon className="h-5 w-5 text-red-600" />
              </Button> */}
            </div>
            <div>
              <Button name="sql" style="w-full" />
                {/* <GithubIcon className="h-5 w-5" />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function ChromeIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" x2="12" y1="8" y2="8" />
      <line x1="3.95" x2="8.54" y1="6.06" y2="14" />
      <line x1="10.88" x2="15.46" y1="21.94" y2="14" />
    </svg>
  )
}


function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}


function GithubIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}


function XIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
