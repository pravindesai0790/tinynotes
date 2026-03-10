"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LogoutButton() {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleLogout = async () => {
    if (isPending) {
      return;
    }

    setIsPending(true);

    try {
      await authClient.signOut();
      router.push("/login");
      router.refresh();
    } finally {
      setIsPending(false);
    }
  };

  return (
    <button
      type="button"
      onClick={handleLogout}
      disabled={isPending}
      className="rounded-lg border border-cyan-300/40 px-3 py-1.5 text-sm font-semibold text-cyan-100 transition-colors hover:border-cyan-200 hover:text-cyan-50 disabled:cursor-not-allowed disabled:opacity-60"
    >
      {isPending ? "Logging out..." : "Logout"}
    </button>
  );
}
