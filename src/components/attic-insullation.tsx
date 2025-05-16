import Image from "next/image";
import { attic_insulation } from "@/libs/data";

const AtticInsullation = () => {
  return (
    <section
      id="attic-insulation"
      className="overflow-hidden bg-white pb-24 sm:pb-32 custom-blue"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl text-center ">
          Attic Insulation!
        </h2>
        <div className="relative h-80 transition-transform duration-300 hover:scale-105 my-10">
          <Image
            width={560}
            height={560}
            alt="GSM AC Personal"
            src="/service6.webp"
            className="block size-full object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
          {attic_insulation.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <h3 className="text-2xl font-semibold tracking-tight text-pretty text-white">
                {item.name}
              </h3>{" "}
              <p className="mt-6 text-base/7 text-gray-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AtticInsullation;
