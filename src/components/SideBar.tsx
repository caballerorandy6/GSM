"use client";

import { allServices } from "@/libs/data";
import Image from "next/image";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

export default function SideBar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex fixed z-10 top-0 pb-3 px-6 flex-col justify-between h-screen border-r bg-transparent transition duration-300 w-64 py-10">
      <Link href="/#home" className="flex h-16 shrink-0 items-center">
        <Image
          width={1000}
          height={1000}
          alt="GSM AC Logo"
          src="/logo.webp"
          className="h-68 w-auto mb-10 object-contain cursor-pointer"
        />
      </Link>

      <nav className="flex flex-1 flex-col">
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

          <li className="-mx-6 mt-auto">
            <Link
              href="tel:+12812354684"
              passHref
              className="flex items-center gap-x-4 px-6 py-3 text-sm/6 font-semibold text-white hover:bg-gray-800"
            >
              <span className="sr-only">Phone Number</span>
              <span aria-hidden="true">(281) 235-4684</span>
              <p>Call Now!</p>
            </Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
