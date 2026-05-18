"use client";

import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getMe } from "@/lib/api/auth";

interface Props {
  promotionId: number;
  musicianId: number;
  trackingUrl: string;
  fromAnalysis: boolean;
}

export default function AlbumActionSection({
  promotionId,
  musicianId,
  trackingUrl,
  fromAnalysis,
}: Props) {
  const router = useRouter();

  const [isMusician, setIsMusician] = useState(false); // 앨범 소유자 여부
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const me = await getMe();

        if (!me) {
          setIsMusician(false);
          return;
        }

        setIsMusician(me?.id === musicianId);
      } catch {
        setIsMusician(false);
      } finally {
        setLoading(false);
      }
    };

    fetchMe();
  }, [musicianId]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(trackingUrl);
      toast.success("링크가 복사되었습니다!", { position: "bottom-center" });

      if (isMusician) {
        router.push("/album/promote");
      }
    } catch {
      toast.error("복사에 실패했습니다.", { position: "bottom-center" });
    }
  };

  const handleEdit = () => {
    router.push(
      `/album?edit=${promotionId}&from=${fromAnalysis ? "analysis" : "detail"}`
    );
  };

  if (loading) return null;

  return (
    <div className="mt-auto flex flex-col items-center gap-1">
      {isMusician ? (
        <>
          <span className="c1-medium text-font-light">
            팬들이 링크를 눌렀을 때 이렇게 보여요.
          </span>
          <span className="p2-bold text-font-middle mb-2">
            마음에 들면 인스타그램 프로필에 바로 붙여보세요!
          </span>
        </>
      ) : (
        <>
          <span className="c1-medium text-font-light">
            이 노래가 마음에 든다면?
          </span>
          <span className="p2-bold text-font-middle mb-2">
            함께 듣고 싶은 사람에게 공유하세요.
          </span>
        </>
      )}

      <div className="flex gap-2">
        {fromAnalysis ? (
          <Button
            variant="btnPurple"
            size="md"
            onClick={() => router.push("/mypage")}
          >
            마이페이지 이동
          </Button>
        ) : (
          <Button variant="btnPurple" size="md" onClick={handleCopy}>
            링크 복사하기
          </Button>
        )}

        {isMusician && (
          <Button variant="btnPurpleSub" size="md" onClick={handleEdit}>
            수정하기
          </Button>
        )}
      </div>
    </div>
  );
}
