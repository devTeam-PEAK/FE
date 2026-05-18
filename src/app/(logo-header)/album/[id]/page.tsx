import AlbumDetail from "@/components/album/album-detail";
import AlbumActionSection from "@/components/album/album-action-section";
import { cookies } from "next/headers";
import { getMusicPromotion } from "@/lib/api/music-promotion";
import { getStreamingCode } from "@/utils/album";
import FadeMotion from "@/components/common/fade-motion";

interface Props {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ from?: string }>;
}

export default async function AlbumDetailPage({ params, searchParams }: Props) {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("accessToken");

  const { id } = await params;
  const { from } = await searchParams;

  const promotionId = Number(id);
  const fromAnalysis = from === "analysis";

  const data = await getMusicPromotion(promotionId);

  const albumInfo = {
    coverUrl: data.imageUrl,
    title: data.songTitle,
    artist: data.activityName,
    releaseDate: data.releaseDate,
    message: data.shortDescription,
    streamingLinks: data.streamingLinks
      .sort((a, b) => a.displayOrder - b.displayOrder)
      .map((link) => {
        const code = getStreamingCode(link.url);
        if (!code) return null;

        return {
          code,
          url: link.clickUrl,
        };
      })
      .filter((v): v is NonNullable<typeof v> => v !== null),
  };

  return (
    <FadeMotion>
      <main className="flex min-h-[calc(100dvh-var(--header-height)-var(--page-padding-bottom))] flex-col">
        <div className="mt-4 mb-6 flex flex-col justify-center gap-10">
          <AlbumDetail {...albumInfo} />
        </div>

        <AlbumActionSection
          isLoggedIn={isLoggedIn}
          promotionId={promotionId}
          musicianId={data.musicianId}
          trackingUrl={data.trackingUrl}
          fromAnalysis={fromAnalysis}
        />
      </main>
    </FadeMotion>
  );
}
