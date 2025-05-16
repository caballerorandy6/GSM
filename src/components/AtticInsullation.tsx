import ServiceDetails from "./ServiceDetails";
import { attic_insulation } from "@/libs/data";

const AtticInsullation = () => {
  return (
    <ServiceDetails
      id="attic-insulation"
      title="Attic Insulation Services to Keep Your Home Comfortable!"
      imageSrc="/service6.webp"
      array={attic_insulation}
    />
  );
};

export default AtticInsullation;
