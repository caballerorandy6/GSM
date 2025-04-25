"use client";

import AirConditioningInstallation from "@/components/AirConditioningInstallation";
import AirConditioningRepair from "@/components/AirConditioningRepair";
import HeatingInstallation from "@/components/HeatingInstallation";
import HeatingRepair from "@/components/HeatingRepair";
import AirDuctSanitizing from "@/components/AirDuctSanitizing";
import AtticInsullation from "@/components/AtticInsullation";
import { useScrollSpy } from "@/hooks/useScrollSpy";

const AllServicesPage = () => {
  useScrollSpy(["home", "about", "services", "testimonials", "contact"]);

  return (
    <main className="min-h-screen overflow-y-scroll">
      <AirConditioningInstallation />
      <AirConditioningRepair />
      <HeatingInstallation />
      <HeatingRepair />
      <AirDuctSanitizing />
      <AtticInsullation />
    </main>
  );
};

export default AllServicesPage;
