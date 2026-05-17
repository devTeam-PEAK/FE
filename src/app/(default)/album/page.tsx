import { Suspense } from "react";
import AlbumPage from "@/components/album/album-page";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <AlbumPage />
    </Suspense>
  );
}
