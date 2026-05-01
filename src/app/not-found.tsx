import ErrorView from "@/components/common/error-view";

export default function NotFound() {
  return (
    <ErrorView
      title={`요청하신 화면을\n불러오지 못했어요`}
      description={`페이지가 없거나 연결이 잠시 불안정해요.\n잠시 후 다시 시도해주세요.`}
    />
  );
}
