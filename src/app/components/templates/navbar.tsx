"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const url = [
  {
    href: "/",
    name: "Beranda",
  },
  {
    href: "/jobfair",
    name: "Jobfair",
  },
  {
    href: "/about",
    name: "Tentang",
  },
];

export default function Navbar() {
  const pathName = usePathname();

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <div className="flex items-center">
          <a
            href="#"
            className="flex items-center space-x-3 rtl:space-x-reverse pr-5"
          >
            <Image
              src="/icons/icon.png"
              width={100}
              height={100}
              alt="Picture of the author"
            />
          </a>

          <div
            className="hidden w-full md:block md:w-auto"
            id="navbar-multi-level"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-4 md:flex-row md:mt-0 md:border-0 md:bg-white ">
              {url.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block py-2 px-4 text-gray-500 rounded-xl font-semibold hover:bg-gray-50 ${
                      pathName === item.href ? "bg-gray-100" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-end items-center">
          <button
            type="button"
            className="block py-2 px-5 mr-4 text-gray-500 rounded-xl font-semibold hover:bg-gray-50"
          >
            Masuk
          </button>
          <button
            type="button"
            className="text-white
             bg-teal-500
             hover:bg-teal-400 text-sm px-5 py-2.5 rounded-full font-semibold"
          >
            Mulai Diskusi
          </button>
        </div>
      </div>
    </nav>
  );
}
