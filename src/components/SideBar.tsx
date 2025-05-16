"use client";

import { allServices } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="hidden sm:flex fixed z-10 top-0 px-6 flex-col justify-between h-screen border-r bg-transparent transition duration-300 w-64 py-10">
      <Link href="/#home">
        <span className="sr-only">Your Company</span>
        <Image
          alt="GSM AC Logo"
          width={1000}
          height={1000}
          src="/logo.webp"
          className="h-20 w-auto"
          priority
        />
      </Link>

      <nav className="flex flex-1 flex-col mt-10">
        <ul role="list" className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul role="list" className="-mx-2 space-y-1">
              {allServices.map((item) => (
                <li key={item.name}>
                  <Link
                    href={`/services/${item.id}`}
                    className={clsx(
                      "text-sm/6 font-semibold transition-colors px-2 py-1 rounded-md",
                      pathname === `/services/${item.id}`
                        ? "text-indigo-300 bg-gray-800"
                        : "text-gray-400 hover:text-white hover:bg-gray-800"
                    )}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
          <li className="-mx-6 mt-auto flex flex-col">
            <Link
              href="tel:+12812354684"
              passHref
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-gray-400 hover:text-indigo-300 transition-colors"
            >
              <span className="sr-only">Phone Number</span>
              <span aria-hidden="true">+1 (281) 235-4684</span>
            </Link>
            <Link
              href="/#home"
              passHref
              className="flex items-center justify-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white transition-colors w-10/12 bg-indigo-500 hover:bg-indigo-400 focus-visible:outline-indigo-400 rounded mx-auto"
            >
              Back to Home
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
