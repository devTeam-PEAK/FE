"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface Props {
  url: string;
}

export default function AlbumActionButton({ url }: Props) {
  const router = useRouter();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(url);
      toast.success("링크가 복사되었습니다!", { position: "bottom-center" });
      router.push("/album/promote");
    } catch {
      toast.error("복사에 실패했습니다.", { position: "bottom-center" });
    }
  };

  return (
    <div className="flex gap-2">
      <Button variant="btnPurple" size="md" onClick={handleCopy}>
        🔗 링크 복사
      </Button>
      <Button variant="btnPurpleSub" size="md">
        수정하기
      </Button>
    </div>
  );
}
