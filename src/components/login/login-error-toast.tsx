"use client";

import { useEffect } from "react";
import { toast } from "sonner";

interface Props {
  withdrawnAt?: string;
}

export default function LoginErrorToast({ withdrawnAt }: Props) {
  useEffect(() => {
    const message = withdrawnAt ? (
      <span>
        {withdrawnAt}에 탈퇴처리된 계정입니다.
        <br />
        90일 이후 재가입 가능합니다.
      </span>
    ) : (
      <span>
        탈퇴처리된 계정입니다.
        <br />
        90일 이후 재가입 가능합니다.
      </span>
    );
    toast.error(message, { duration: 3000 });
  }, [withdrawnAt]);

  return null;
}
