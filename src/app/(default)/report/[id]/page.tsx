import { Button } from "@/components/ui/button";
import { Calendar, ChevronRight } from "lucide-react";
import Link from "next/link";

const STATS = [
  { label: "게시글 공유수", value: 13 },
  { label: "프로필 방문자수", value: 6 },
  { label: "링크 클릭수", value: 0 },
];

export default function ReportDetailPage() {
  return (
    <main className="flex flex-col gap-9">
      <div className="mt-7 flex flex-col items-start gap-1">
        <h2 className="h2-bold text-font-basic">김피크님의 홍보 현황이에요</h2>
        <div className="border-border text-font-middle flex items-center gap-2 rounded-full border px-4 py-2">
          <Calendar size={16} />
          <span className="p2-medium">26.04.01 - 26.04.14</span>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <section className="grid grid-cols-3 gap-5 text-center">
          {STATS.map(({ label, value }) => (
            <div
              key={label}
              className="box-item rounded-r2 bg-grey1 flex min-h-26 flex-col justify-start gap-2.5 p-2.5"
            >
              <div className="c1-medium text-font-middle rounded-r1 w-full bg-white py-1">
                {label}
              </div>
              <h1 className="text-main text-4xl font-semibold">{value}</h1>
            </div>
          ))}
        </section>

        <section className="border-border rounded-r3 flex flex-col gap-4 border p-5">
          <h6 className="text-font-middle p1-bold flex flex-col gap-1">
            지금 홍보가 막힌 단계는
            <span className="text-main-dark1 h3-bold flex items-center gap-1">
              피드 게시글
              <ChevronRight size={24} />
              프로필 방문
            </span>
            이에요
          </h6>
          <div className="bg-brand-gradient rounded-r2 p-4 break-keep whitespace-pre-line text-white">
            게시글 반응은 있지만, 프로필 링크까지 이어지지 않았어요.
            <br />
            <strong>콘텐츠에 링크로 유도하는 장치가 필요해요.</strong>
          </div>
        </section>
      </div>

      <section className="flex flex-col gap-2">
        <h5 className="h3-bold">이렇게 해보세요</h5>
        <ul className="flex flex-col gap-2">
          <li className="bg-grey1 grid grid-cols-[1fr] items-center gap-5 rounded-2xl px-5 py-5">
            <div className="flex flex-col gap-1 text-wrap break-keep whitespace-pre-line">
              <h5 className="p1-bold text-main">게시글 끝에 링크 유도 문구 넣기</h5>
              <p className="p2-regular text-font-middle">
                {'"프로필 링크에서 바로 들어보세요"\n한 줄만 추가해도 클릭률이 달라져요'}
              </p>
            </div>
          </li>
        </ul>
      </section>

      <div className="flex flex-col gap-4 px-6">
        <Button variant="btnPurple" size="full" asChild>
          <Link href={"/"}>이미지 저장하기</Link>
        </Button>
      </div>
    </main>
  );
}
