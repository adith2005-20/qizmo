"use client";

import { AuthUIProvider } from "@daveyplate/better-auth-ui";
import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";

import { authClient } from "@/lib/auth-client";

export function Providers({ children }: { children: ReactNode }) {
  const router = useRouter();

  return (
    <AuthUIProvider
      authClient={authClient}
      navigate={(url) => router.push(url)}   // Use an arrow function
      replace={(url) => router.replace(url)} // Use an arrow function
      onSessionChange={() => {
        // Clear router cache (protected routes)
        router.refresh();
      }}
      LinkComponent={Link}
    >
      {children}
    </AuthUIProvider>
  );
}
