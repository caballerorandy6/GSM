import ServiceDetails from "./ServiceDetails";
import { air_duct_sanitizing } from "@/libs/data";

const AirDuctSanitizing = () => {
  return (
    <ServiceDetails
      id="air-duct-sanitizing"
      title="Quality HVAC Services and Air Duct Sanitizing Services!"
      imageSrc="/service5.webp"
      array={air_duct_sanitizing}
    />
  );
};

export default AirDuctSanitizing;
