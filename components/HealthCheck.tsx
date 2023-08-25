"use client";

import { trpc } from "@/trpc/client";

export default function HealthCheck() {
  const getHealthCheck = trpc.getHealthCheck.useQuery();

  return (
    <div>
      <div>{JSON.stringify(getHealthCheck.data)}</div>
    </div>
  );
}
