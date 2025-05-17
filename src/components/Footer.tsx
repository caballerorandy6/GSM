import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/libs/data";
import Facebook from "./icons/Facebook";
import Google from "./icons/Google";

interface Social {
  name: string;
  href: string;
  icon: React.ElementType;
}

const social: Social[] = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/gsmactx/?ref=page_internal",
    icon: Facebook,
  },
  {
    name: "Google",
    href: "https://www.google.com/maps/place/G+S+M+A%2FC+%26+General+Contractor+INC./@29.8801535,-95.7088008,15z/data=!4m6!3m5!1s0x8640d7a7761d3e75:0x5aa72afac9b36840!8m2!3d29.8801145!4d-95.7088761!16s%2Fg%2F11n5cyv1cm?entry=ttu",
    icon: Google,
  },
];

const images = [
  {
    src: "/certified.avif",
    alt: "Certified",
    id: "certified",
  },
  {
    src: "/customer.avif",
    alt: "Customer Satisfaction",
    id: "customer",
  },
  {
    src: "/discount.avif",
    alt: "Discount for Seniors and Military",
    id: "discount",
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-20 sm:py-24 lg:px-8">
        <div className="flex justify-center items-center mb-10">
          {images.map((image) => (
            <Image
              key={image.id}
              width={100}
              height={100}
              src={image.src}
              alt={image.alt}
              priority={false}
              className="object-contain w-32 h-auto"
            />
          ))}
        </div>
        <nav
          aria-label="Footer"
          className="-mb-6 flex flex-wrap justify-center gap-x-12 gap-y-3 text-sm/6"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
            >
              {item.name}
            </Link>
          ))}
        </nav>
        <div className="mt-16 flex justify-center gap-x-10">
          {social.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-300"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </Link>
          ))}
        </div>
        <p className="mt-10 text-center mx-auto text-sm/6 text-gray-400">
          &copy; 2024 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
