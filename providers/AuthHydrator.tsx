"use client";

import { useAuthStore } from "@/store/state/auth-store/auth.store";
import React, { useEffect } from "react";

export default function AuthHydrator({
  children,
}: {
  children: React.ReactNode;
}) {
  const hydrateUser = useAuthStore((state) => state.hydrateUser);

  useEffect(() => {
    hydrateUser();
  }, [hydrateUser]);

  return <>{children}</>;
}
