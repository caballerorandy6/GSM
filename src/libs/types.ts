import { navigation } from "@/libs/data";

export type SectionName = (typeof navigation)[number]["name"];

export type ServiceDetailsProps = {
  id: string;
  title: string;
  imageSrc: string;
  array: {
    name: string;
    description: string;
  }[];
};
