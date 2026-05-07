"use client";

import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon } from "lucide-react";
import AlbumItemCard from "@/components/mypage/album-item-card";
import ErrorView from "@/components/common/error-view";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { getMyPagePromotions } from "@/lib/api/music-promotion";

export default function MyPage() {
  const router = useRouter();

  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["mypage-promotions"],
    queryFn: getMyPagePromotions,
  });

  const albums = data?.promotions ?? [];

  return (
    <main className="flex flex-1 flex-col gap-9">
      <header className="text-font-middle relative flex items-center">
        <button className="cursor-pointer" onClick={() => router.back()}>
          <ChevronLeftIcon size={32} />
        </button>
        <h3 className="h3-bold absolute left-1/2 -translate-x-1/2">
          마이페이지
        </h3>
      </header>

      {isLoading ? (
        <div className="flex flex-1 items-center justify-center">
          <Spinner className="text-main" />
        </div>
      ) : isError ? (
        <>
          <ErrorView
            title={`요청하신 화면을\n불러오지 못했어요`}
            description={`페이지가 없거나 연결이 잠시 불안정해요.\n잠시 후 다시 시도해주세요.`}
            onAction={refetch}
            actionLabel="다시 시도하기"
          />
        </>
      ) : albums.length > 0 ? (
        <section className="flex flex-col gap-5">
          <div className="flex items-end justify-between">
            <h3 className="h3-bold text-font-basic">앨범 홍보 목록</h3>
            <span className="c1-bold text-font-light">최신순 (업데이트순)</span>
          </div>

          <div className="flex flex-col gap-2">
            {albums.map((album) => (
              <AlbumItemCard key={album.promotionId} album={album} />
            ))}
          </div>
        </section>
      ) : (
        <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center">
          <p className="p2-medium text-font-middle">
            현재 만들어진 홍보 페이지가 없어요.
            <br />
            링크를 만들고 앨범 홍보를 시작해보세요!
          </p>
          <Button variant="btnPurple" size="full" asChild>
            <Link href="/album">홍보 링크 만들러 가기 💨</Link>
          </Button>
        </div>
      )}
    </main>
  );
}
