import logoText from "../assets/logo-text.png";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0">
          <img
            className="h-8 w-auto"
            src={logoText}
            alt="logo"
          />
        </div>

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

        <div className="flex items-center gap-1 sm:gap-2">
          <button className="rounded-lg border border-gray-300 px-2 py-1.5 text-xs font-semibold text-gray-700 transition hover:bg-gray-100 sm:px-3 sm:py-2 sm:text-sm md:px-5">
            Sign In
          </button>

          <button className="rounded-lg bg-blue-600 px-2 py-1.5 text-xs font-semibold text-white shadow-md transition hover:scale-105 hover:bg-blue-700 sm:px-3 sm:py-2 sm:text-sm md:px-5">
            Sign Up
          </button>
        </div>
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
        </div>
      )}
    </div>
  );
}
