import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import BackButton from "@/components/common/back-button";
import DiagnosisItemCard from "@/components/mypage/diagnosis-item-card";
import { LinkIcon, CirclePlayIcon } from "lucide-react";
import Image from "next/image";
import { getStreamingCode } from "@/utils/album";
import { mapToStreamingBtn } from "@/utils/mapper";

const MOCK = {
  promotionId: 10,
  songTitle: "가나다",
  imageUrl:
    "https://hoppin-s3-bucket.s3.ap-northeast-2.amazonaws.com/music-promotions/bf490763-9ab5-4854-8fdf-79c3b016af2e.png",
  releaseDate: "26.04.10",
  createdAt: "26.04.11",
  trackingUrl: "test url",

  realtimeStats: {
    trackingClickCount: 10,
    streamingClickCount: 24,
  },

  streamingLinks: [
    {
      url: "https://open.spotify.com/album/44HJerzPLHbGr8G2eC1bIv?si=ahby9UP2RkqNJUpOEQetmg", // 이걸로 스트리밍 코드 뽑아옴
      clickUrl:
        "https://open.spotify.com/album/44HJerzPLHbGr8G2eC1bIv?si=ahby9UP2RkqNJUpOEQetmg", // 클릭 시 이걸로 연결
      displayOrder: 1,
      clickCount: 2,
      clickShareRate: 100,
    },
    {
      url: "https://music.youtube.com/watch?v=vE0PUcb3zQA&si=Clv-CaVsws1U9DxZ",
      clickUrl:
        "https://music.youtube.com/watch?v=vE0PUcb3zQA&si=Clv-CaVsws1U9DxZ",
      displayOrder: 2,
      clickCount: 3,
      clickShareRate: 4,
    },
  ],

  diagnosis: [
    {
      status: "RUNNING",
      diagnosisId: 1,
      diagnosedDate: "26.05.04",
      bottleneckType: null,
      actionTitle: "진단 결과 대기중이에요",
      headline: "평균 1~2일 이내 결과를 확인하실 수 있어요",
      unread: true,
    },
    {
      status: "COMPLETED",
      diagnosisId: 2,
      diagnosedDate: "26.04.28",
      bottleneckType: "피드 반응 부족",
      actionTitle: "게시글 끝에 링크 유도 문구를 넣어서 인스타그램에 적용하기",
      headline:
        "프로필 링크에서 바로 들어보세요 한 줄만 추가해도 클릭률이 달라져요.",
      unread: false,
    },
  ],
} as const;

export default async function AlbumAnalysisPage() {
  return (
    <>
      <div className="mb-6 flex flex-col gap-7">
        <BackButton title={MOCK.songTitle} />

        <main className="mb-2 flex flex-col gap-7">
          <section className="mb-1 flex flex-col items-center gap-6 px-9">
            <div className="flex flex-col gap-3">
              <div className="rounded-r2 shrink-0 overflow-hidden">
                <Image
                  src={MOCK.imageUrl}
                  alt={MOCK.songTitle}
                  width={126}
                  height={126}
                  className="aspect-square object-cover"
                />
              </div>

              <ul className="flex flex-col">
                <li className="flex items-center justify-center gap-2">
                  <div className="p1-semibold-leading-none text-font-light">
                    발매일
                  </div>
                  <span className="bg-border h-4 w-px" />
                  <div className="p1-semibold-leading-none text-font-middle">
                    {MOCK.releaseDate}
                  </div>
                </li>

                <li className="flex items-center justify-center gap-2">
                  <div className="p1-semibold-leading-none text-font-light">
                    홍보시작
                  </div>
                  <span className="bg-border h-3 w-px" />
                  <div className="p1-semibold-leading-none text-font-middle">
                    {MOCK.createdAt}
                  </div>
                </li>
              </ul>
            </div>

            <div className="flex w-full flex-col gap-3">
              <div className="flex gap-3">
                <Button
                  variant="btnPurpleSub"
                  className="p2-bold h-9 flex-1 rounded-full"
                >
                  홍보 페이지 수정
                </Button>
                <Button
                  variant="btnPurpleSub"
                  className="p2-bold h-9 flex-1 rounded-full"
                >
                  {" "}
                  홍보 페이지 삭제
                </Button>
              </div>
              <Button
                variant="btnPurple"
                className="p2-bold h-9 w-full rounded-full"
              >
                🔗 홍보 페이지 링크 복사
              </Button>
            </div>
          </section>

          <Separator className="-mx-5" />

          <section className="mb-1 flex flex-col gap-6">
            <h4 className="h4-bold text-font-basic">실시간 홍보 현황이에요</h4>

            <ul className="flex gap-5">
              <li className="flex flex-col items-center gap-3">
                <div className="bg-main-light1 inline-flex rounded-sm px-2 py-1">
                  <span className="c1-medium text-font-middle">
                    홍보링크 방문자 수
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <LinkIcon className="text-main-light2 mr-1" size={16} />
                  <span className="h1-semibold text-main-mid leading-none">
                    {MOCK.realtimeStats.trackingClickCount}
                  </span>
                  <span className="p1-bold text-main-mid self-end">명</span>
                </div>
              </li>

              <li className="flex flex-col items-center gap-3">
                <div className="bg-main-light1 inline-flex rounded-sm px-2 py-1">
                  <span className="c1-medium text-font-middle">
                    스트리밍 이동 횟수
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <CirclePlayIcon className="text-main-light2 mr-1" size={16} />
                  <span className="h1-semibold text-main-mid leading-none">
                    {MOCK.realtimeStats.streamingClickCount}
                  </span>
                  <span className="p1-bold text-main-mid self-end">회</span>
                </div>
              </li>
            </ul>
          </section>

          <Separator className="-mx-5" />

          <section className="mb-1 flex flex-col gap-6">
            <h4 className="h4-bold text-font-basic">
              어떤 스트리밍 사이트로 이동했나요?
            </h4>

            <ul className="flex flex-col gap-5">
              {MOCK.streamingLinks.map((item) => {
                const streamingCode = getStreamingCode(item.url);
                const streamingItem = mapToStreamingBtn[streamingCode!];

                return (
                  <li
                    key={streamingItem.label}
                    className="flex justify-between px-1 py-3"
                  >
                    <div className="flex items-center gap-3">
                      <Image
                        src={streamingItem.icon}
                        alt={streamingItem.label}
                        width={32}
                        height={32}
                        className="shrink-0"
                      />

                      <span className="p1-bold-leading-none text-font-middle">
                        {streamingItem.label}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Progress className="w-20" value={item.clickShareRate} />

                      <span className="p2-semibold text-font-middle relative top-px w-10 text-left">
                        {item.clickShareRate}%
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>

          <Separator className="-mx-5" />

          <section className="mb-1 flex flex-col gap-6">
            <h4 className="h4-bold text-font-basic">지금 바로 바꿔보세요</h4>

            <ul className="flex flex-col gap-6">
              {MOCK.diagnosis.map((item) => (
                <li key={item.diagnosisId}>
                  <DiagnosisItemCard {...item} />
                </li>
              ))}
            </ul>
          </section>
        </main>

        <Button variant="btnPurple" size="full">
          이 앨범 홍보 다시 진단받기
        </Button>
      </div>
    </>
  );
}
