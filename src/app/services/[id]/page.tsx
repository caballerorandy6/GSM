import ServiceClient from "@/components/ServiceClient";

interface Props {
  params: {
    id: string;
  };
}

export default async function ServicePage({ params }: Props) {
  return (
    <main className="p-8">
      <ServiceClient id={params.id} />
    </main>
  );
}
