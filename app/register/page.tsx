import { AuthFormCard } from "@/app/components/AuthFormCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/notes");
  }

  return <AuthFormCard mode="register" />;
}
