"use client";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const AirConditioningInstallationSkeleton = () => {
  return (
    <section
      id="air-conditioning-installation-loading"
      className="overflow-hidden py-24 sm:py-32 custom-blue"
    >
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold text-white sm:text-5xl text-center">
          <Skeleton width={500} height={40} />
        </h2>

        <div className="relative h-80 my-10">
          <Skeleton height="100%" width="100%" />
        </div>

        <div className="mt-10 max-w-xl space-y-8 lg:max-w-none">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="relative flex flex-col space-y-3">
              <Skeleton width="60%" height={30} />
              <Skeleton count={3} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AirConditioningInstallationSkeleton;
