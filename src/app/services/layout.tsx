import { Metadata } from "next";
import SideBar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "GSM A/C General & Contractor Inc, Services Page",
  description: "Services offered by GSM A/C General & Contractor Inc.",
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex">
      <div className="hidden md:block fixed left-0 h-screen w-64">
        <SideBar />
      </div>
      <div className="flex-1 ml-64">{children}</div>
    </section>
  );
}
