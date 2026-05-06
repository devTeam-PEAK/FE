"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { Spinner } from "@/components/ui/spinner";

export default function AuthSuccess() {
  const router = useRouter();

  useEffect(() => {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 10_000);

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/me`, {
      credentials: "include",
      signal: controller.signal,
    })
      .then((res) => {
        if (res.ok) {
          document.cookie = "isLoggedIn=true; path=/; max-age=604800";
          router.replace("/");
        } else {
          router.replace("/login");
        }
      })
      .catch(() => router.replace("/login"))
      .finally(() => clearTimeout(timer));

    return () => {
      clearTimeout(timer);
      controller.abort();
    };
  }, [router]);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <Spinner className="text-main" />
    </div>
  );
}
