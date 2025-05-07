"use client";

import AirConditioningInstallation from "@/components/air-conditioning-installation";
import AirConditioningRepair from "@/components/air-conditioning-repair";
import HeatingInstallation from "@/components/heating-installation";
import HeatingRepair from "@/components/HeatingRepair";
import AirDuctSanitizing from "@/components/air-duct-sanitizing";
import AtticInsullation from "@/components/attic-insullation";
import Footer from "@/components/Footer";
import { servicesIntro } from "@/libs/data";
import ServiceMenu from "@/components/ServiceMenu";

const AllServicesPage = () => {
  return (
    <section id="services" className="min-h-screen py-24 sm:py-32">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="pb-24 sm:pb-0">
          <ServiceMenu />
        </div>

        <div className="mx-auto max-w-2xl lg:max-w-7xl pb-24 sm:pb-32">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl text-center">
            Home Heating Repair and Installation Available to You!
          </h2>

          <div className="mt-10 max-w-xl space-y-8 text-base/7 lg:max-w-none">
            {servicesIntro.map((item, index) => (
              <div key={index} className="relative flex flex-col">
                <p className="text-2xl font-semibold tracking-tight text-pretty text-white">
                  {item.name}
                </p>
                <dd className="mt-6 text-base/7 text-gray-300">
                  {item.description}
                </dd>
              </div>
            ))}
          </div>
        </div>

        <AirConditioningInstallation />
        <AirConditioningRepair />
        <HeatingInstallation />
        <HeatingRepair />
        <AirDuctSanitizing />
        <AtticInsullation />
        <Footer />
      </div>
    </section>
  );
};

export default AllServicesPage;
