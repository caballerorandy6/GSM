import ServiceClient from "@/components/ServiceClient";

interface ServicePageProps {
  params: {
    id: string;
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  return (
    <main className="p-8">
      <ServiceClient id={params.id} />
    </main>
  );
}
