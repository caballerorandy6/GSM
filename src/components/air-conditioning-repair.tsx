import Image from "next/image";
import { air_conditioning_repair } from "@/libs/data";

const AirConditioningRepair = () => {
  return (
    <section
      id="air-conditioning-repair"
      className="overflow-hidden bg-white pb-24 sm:pb-32 custom-blue"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl text-center ">
          Need Help with Fixing Your Air Conditioning Unit? Use Our HVAC Repair
          Services Now!
        </h2>
        <div className="relative h-80 transition-transform duration-300 hover:scale-105 my-10">
          <Image
            width={560}
            height={560}
            alt="GSM AC Personal"
            src="/service2.webp"
            className="block size-full object-cover"
            priority={false}
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        <div className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
          {air_conditioning_repair.map((item, index) => (
            <div key={index} className="relative flex flex-col">
              <p className="text-2xl font-semibold tracking-tight text-pretty text-white">
                {item.name}
              </p>{" "}
              <dd className="mt-6 text-base/7 text-gray-300">
                {item.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirConditioningRepair;
