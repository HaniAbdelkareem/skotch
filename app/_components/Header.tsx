import { LoginLink, RegisterLink } from "@kinde-oss/kinde-auth-nextjs"
import Link from "next/link"
import Logo from "./Logo"

function Header() {
  return (
    <header className="">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          <Logo />
          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-8 text-sm">
                <li>
                  <Link
                    className="text-black/70 font-medium text-[0.9rem]"
                    href="#"
                  >
                    {" "}
                    About{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black/70 font-medium text-[0.9rem]"
                    href="#"
                  >
                    {" "}
                    Pricing{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    className="text-black/70 font-medium text-[0.9rem]"
                    href="#"
                  >
                    {" "}
                    Contact{" "}
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="sm:flex sm:gap-4">
                <LoginLink
                  postLoginRedirectURL="/dashboard"
                  className="rounded-md px-5 py-2.5 text-sm font-medium text-black/90 shadow"
                >
                  Sign in
                </LoginLink>

                <div className="hidden sm:flex">
                  <RegisterLink className="rounded-md bg-black/90 px-5 py-2.5 text-sm font-medium text-white shadow-2xl">
                    Get Started
                  </RegisterLink>
                </div>
              </div>

              <div className="block md:hidden">
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
