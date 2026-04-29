"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function LoginErrorToast() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");
  const withdrawnAt = searchParams.get("withdrawnAt");

  useEffect(() => {
    if (error === "withdrawn") {
      const message = withdrawnAt
        ? `${withdrawnAt}에 탈퇴처리된 계정입니다. 90일 이후 재가입 가능합니다.`
        : "탈퇴처리된 계정입니다. 90일 이후 재가입 가능합니다.";
      toast.error(message, { duration: 5000 });
    }
  }, [error, withdrawnAt]);

  return null;
}
