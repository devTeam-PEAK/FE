"use client";
import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    const done = localStorage.getItem("onboarding");
    if (!done) router.replace("/onboarding");
  }, [router]);

  return (
    <main className="p-5">
      <div className="mt-25 mb-24 flex flex-col items-center gap-8 text-center">
        <div className="bg-grey2 h-30 w-30 rounded-full"></div>
        <div className="flex flex-col gap-6">
          <h1 className="h1-bold">
            신곡 홍보,
            <br />
            <span className="text-main">이제 쉽게</span>
            <br />할 수 있어요
          </h1>
          <p className="text-font-middle p3-regular">
            뭘 해야 할지 몰라서 답답했다면
            <br />
            Peak가 딱 맞는 방법을 알려드릴게요
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="btnPurple" size="full">
              <span className="p1-semibold">신곡 홍보 링크 만들기</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              발매 정보를 입력하면 팬에게 바로
              <br />
              공유할 수 있는 링크가 생겨요
            </p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="btnWhite" size="full">
              <span className="p1-semibold">내 음원 홍보 진단하기</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>
              지금 팬이 왜 안 늘고 있는지,
              <br />
              다음엔 뭘 하면 좋을지 알려드려요
            </p>
          </TooltipContent>
        </Tooltip>
      </div>
    </main>
  );
}
