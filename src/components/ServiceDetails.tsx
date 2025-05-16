import Image from "next/image";
import { ServiceDetailsProps } from "@/libs/types";

const ServiceDetails = ({
  id,
  title,
  imageSrc,
  array,
}: ServiceDetailsProps) => {
  return (
    <section
      id={id}
      className="overflow-hidden bg-white pb-24 sm:pb-32 custom-blue"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8 flex flex-col items-center">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl text-center ">
          {title}
        </h2>
        <div className="relative w-full h-[20rem] sm:h-[24rem] my-10 transition-transform duration-300 hover:scale-105 rounded-lg overflow-hidden">
          <Image
            width={560}
            height={560}
            alt="GSM AC Personal"
            src={imageSrc}
            className="block size-full object-cover w-full"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="mt-10 w-full space-y-8">
          {array.map((item, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-white w-full  text-center">
                {item.name}
              </h3>
              <p className="mt-6 text-base text-gray-300 w-full">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
