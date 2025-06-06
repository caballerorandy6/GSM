import Image from "next/image";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  link,
}: ServiceCardProps) => {
  return (
    <div className="flex p-px lg:col-span-2">
      <div className="overflow-hidden rounded-lg bg-gray-800 ring-1 ring-white/15 lg:rounded-tl-[2rem]">
        <div className="relative h-80  transition-transform duration-300 hover:scale-110">
          <Image
            width={1000}
            height={1000}
            alt={title}
            src={imageUrl}
            className="h-80 object-cover object-left"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/10" /> {/* Sombra suave */}
        </div>
        <div className="p-10">
          <h2 className="text-2xl font-semibold tracking-tight text-pretty text-white">
            {title}
          </h2>
          <p className="mt-6 text-base/7 text-gray-300">{description}</p>
          <Link
            href="/services"
            className="text-sm/4 font-semibold text-blue-400 hover:text-indigo-300 transition-colors"
          >
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
