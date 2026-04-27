import ErrorView from "@/components/common/error-view";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="p-5">
      <ErrorView
        title={`요청하신 화면을\n불러오지 못했어요`}
        description={`페이지가 없거나 연결이 잠시 불안정해요.\n잠시 후 다시 시도해주세요.`}
      />
      <div className="fixed right-0 bottom-30 left-0 mx-auto max-w-(--max-width) px-11">
        <Button asChild variant="btnPurple" size="full">
          <Link href="/">메인으로 이동</Link>
        </Button>
      </div>
    </main>
  );
}
