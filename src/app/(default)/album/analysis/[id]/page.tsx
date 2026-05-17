import AlbumAnalysisPage from "@/components/mypage/album-analysis-page";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: Props) {
  const { id } = await params;

  return <AlbumAnalysisPage promotionId={Number(id)} />;
}
