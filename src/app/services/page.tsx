import AirConditioningInstallation from "@/components/AirConditioningInstallation";
import AirConditioningRepair from "@/components/AirConditioningRepair";
import HeatingInstallation from "@/components/HeatingInstallation";
import HeatingRepair from "@/components/HeatingRepair";
import AirDuctSanitizing from "@/components/AirDuctSanitizing";
import AtticInsullation from "@/components/AtticInsullation";
import Footer from "@/components/Footer";
import ServiceMenu from "@/components/ServiceMenu";
import FAQ from "@/components/FAQ";
import { genPageMetadata } from "@/seo/genPageMetadata";
import { JsonLdForArticle } from "@/components/JsonLdForArticle";
import { JsonLdForBreadcrumb } from "@/components/JsonLdForBreadcrumb";
import { JsonLdForFaq } from "@/components/JsonLdForFaq";
import { JsonLdForProduct } from "@/components/JsonLdForProduct";
import { faqs } from "@/libs/data";
import { servicesIntro } from "@/libs/data";

// Function to generate metadata for the page
export const metadata = genPageMetadata({
  title: "GSM A/C General & Contractor Inc - Services",
  description:
    "Explore our comprehensive HVAC services including air conditioning installation, air conditioning repair, air duct sanitizing, attic insulation, heating installation and heating repair. Your comfort is our priority.",
  pageRoute: "/services",
  ogImg: "/worker6.webp",
});

const AllServicesPage = () => {
  const serviceComponents: React.ComponentType[] = [
    AirConditioningInstallation,
    AirConditioningRepair,
    HeatingInstallation,
    HeatingRepair,
    AirDuctSanitizing,
    AtticInsullation,
  ];
  return (
    <>
      {" "}
      <section id="services" className="min-h-screen py-24 sm:py-32">
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="pb-24 sm:pb-0">
            <ServiceMenu />
          </div>

          <div className="mx-auto w-full px-6 lg:px-8 pb-24 sm:pb-32">
            <h2
              id="services-title"
              className="text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl text-center"
            >
              Home Heating Repair and Installation Available to You!
            </h2>

            <div className="mt-10 space-y-8 text-base/7 flex flex-col ">
              {servicesIntro.map((item, index) => (
                <article key={index} className="flex flex-col w-full">
                  <h3 className="text-2xl font-semibold tracking-tight text-pretty text-white mx-auto">
                    {item.name}
                  </h3>
                  <p className="mt-6 text-base/7 text-gray-300 mx-auto">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          {serviceComponents.map((Component, index) => (
            <Component key={index} />
          ))}

          <FAQ faqs={faqs} />

          <Footer />
        </div>
      </section>
      {/* // JSON-LD structured data */}
      <JsonLdForArticle
        url="https://www.gsmactx.com/services"
        headline="Home Heating Repair and Installation Available to You!"
        description="Professional HVAC solutions including air conditioning installation and repair, heating services, attic insulation, and air duct sanitizing in Texas."
        image="/worker6.webp"
        datePublished="2025-05-16"
        dateModified="2025-05-16"
        author={{
          name: "GSM A/C General & Contractor Inc",
          url: "https://www.gsmactx.com",
        }}
      />
      <JsonLdForBreadcrumb
        itemList={[
          {
            name: "Home",
            item: "https://www.gsmactx.com",
          },
          {
            name: "Services",
            item: "https://www.gsmactx.com/services",
          },
        ]}
      />
      <JsonLdForFaq
        faqs={[
          {
            question: "What HVAC services do you offer?",
            answer:
              "We offer a range of HVAC services including air conditioning installation, air conditioning repair, heating installation, heating repair, air duct sanitizing, and attic insulation.",
          },
          {
            question: "How can I schedule a service?",
            answer:
              "You can schedule a service by contacting us through our website or calling our customer service number.",
          },
          {
            question: "Do you provide emergency HVAC services?",
            answer:
              "Yes, we provide emergency HVAC services to ensure your comfort and safety at all times.",
          },
        ]}
      />
      <JsonLdForProduct
        name="GSM A/C General & Contractor Inc"
        description="Professional HVAC solutions including air conditioning installation and repair, heating services, attic insulation, and air duct sanitizing in Texas."
        image="/logo.webp"
        // brand="GSM A/C General & Contractor Inc"
        // sku="GSM-AC-001"
        // offers={{
        //   price: "0.00",
        //   priceCurrency: "USD",
        //   itemCondition: "https://schema.org/NewCondition",
        //   availability: "https://schema.org/InStock",
        //   seller: {
        //     name: "GSM A/C General & Contractor Inc",
        //     url: "https://www.gsmactx.com",
        //   },
        // }}
      />
    </>
  );
};

export default AllServicesPage;
