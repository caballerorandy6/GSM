"use client";

import dynamic from "next/dynamic";
import { notFound } from "next/navigation";
import { allServices } from "@/libs/data";
import { useMemo } from "react";
import Spinner from "@/components/Spinner";

interface Props {
  id: string;
}

export default function ServiceClient({ id }: Props) {
  const service = useMemo(() => allServices.find((s) => s.id === id), [id]);

  if (!service) {
    notFound();
  }

  const ServiceComponent = useMemo(
    () =>
      dynamic(
        () =>
          import(`@/components/${service.id}`).catch(() => {
            notFound();
            return Promise.resolve(() => null);
          }),
        {
          loading: () => <Spinner />,
          ssr: false,
        }
      ),
    [service.id]
  );

  return (
    <div className="p-8">
      <ServiceComponent />
    </div>
  );
}
