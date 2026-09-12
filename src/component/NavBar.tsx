import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <img
          className="h-8 w-auto"
          src="/src/assets/logo-text.png"
          alt="logo"
        />

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <a
              className="font-medium text-gray-600 transition hover:text-blue-600"
              href="#"
            >
              Home
            </a>
          </li>

          <li>
            <a
              className="font-medium text-gray-600 transition hover:text-blue-600"
              href="#"
            >
              Technologies
            </a>
          </li>

          <li>
            <a
              className="font-medium text-gray-600 transition hover:text-blue-600"
              href="#"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              className="font-medium text-gray-600 transition hover:text-blue-600"
              href="#"
            >
              About
            </a>
          </li>

          <li>
            <a
              className="font-medium text-gray-600 transition hover:text-blue-600"
              href="#"
            >
              Contact
            </a>
          </li>
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <button className="rounded-lg border border-gray-300 px-5 py-2 font-semibold text-gray-700 transition hover:bg-gray-100">
            Sign In
          </button>

          <button className="rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white shadow-md transition hover:scale-105 hover:bg-blue-700">
            Sign Up
          </button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="border-t border-gray-200 bg-white px-6 py-5 md:hidden">
          <ul className="flex flex-col gap-5">
            <li>
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                Technologies
              </a>
            </li>

            <li>
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                Projects
              </a>
            </li>

            <li>
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#"
                className="font-medium text-gray-600 hover:text-blue-600"
              >
                Contact
              </a>
            </li>
          </ul>

          <div className="mt-6 flex flex-col gap-3">
            <button className="w-full rounded-lg border border-gray-300 px-5 py-2 font-semibold text-gray-700">
              Sign In
            </button>

            <button className="w-full rounded-lg bg-blue-600 px-5 py-2 font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
