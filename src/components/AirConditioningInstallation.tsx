import { air_conditioning_installation } from "@/libs/data";
import ServiceDetails from "@/components/ServiceDetails";

const AirConditioningInstallation = () => {
  return (
    <ServiceDetails
      id="air-conditioning-installation"
      title="Take Advantage of Our Affordable AC Replacement Services Today!"
      imageSrc="/service1.webp"
      array={air_conditioning_installation}
    />
  );
};

export default AirConditioningInstallation;
