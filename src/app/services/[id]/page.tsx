import ServiceClient from "@/components/ServiceClient";

export default function ServicePage({ params }: { params: { id: string } }) {
  return (
    <main className="p-8">
      <ServiceClient id={params.id} />
    </main>
  );
}
