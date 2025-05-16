import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import ScrollSpyHandler from "@/components/ScrollSpyHandler";
import { genPageMetadata } from "@/seo/genPageMetadata";
import { JsonLdForArticle } from "@/components/JsonLdForArticle";
import { JsonLdForBreadcrumb } from "@/components/JsonLdForBreadcrumb";
import { JsonLdForFaq } from "@/components/JsonLdForFaq";
import { JsonLdForProduct } from "@/components/JsonLdForProduct";
import FAQ from "@/components/FAQ";
import { faqs } from "@/libs/data";
import Footer from "@/components/Footer";

export const metadata = genPageMetadata({
  title: "GSM A/C General & Contractor Inc, the best HVAC company in Texas",
  description:
    "GSM A/C General & Contractor Inc. offers professional air conditioning installation, air conditioning repair, heating installation, heating repair, air duct sanitizing and attic insulation services in Texas. Trusted HVAC experts delivering efficient, reliable, and affordable climate solutions for homes and businesses.",
  pageRoute: "/",
  ogImg: "/logo.webp",
});

export default function Home() {
  return (
    <main>
      <ScrollSpyHandler />
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ faqs={faqs} />
      <Footer />

      {/* JSON-LD Markup */}
      <JsonLdForArticle
        url="https://www.gsmactx.com"
        headline="About Our HVAC Repair & Installation Company"
        description="Explaining the services we offer and our commitment to quality."
        image="/worker.webp"
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
            item: "https://www.gsmactx.com/",
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
            question:
              "Are your services available in Cypress Area And Houston?",
            answer:
              "Yes, we provide our HVAC services throughout Cypress Area and Houston.",
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
        //   url: "https://www.gsmactx.com",
        // }}
      />
    </main>
  );
}
