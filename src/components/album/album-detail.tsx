import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import StreamingButton from "@/components/album/streaming-button";
import { StreamingItem } from "@/types/album";
import { Trash2 } from "lucide-react";

interface Props {
  coverUrl: string;
  title: string;
  artist: string;
  releaseDate: string;
  streamingLinks: StreamingItem[];
  message: string;
  showDelete?: boolean;
  onDelete?: () => void;
}

export default function AlbumDetail({
  coverUrl,
  title,
  artist,
  releaseDate,
  streamingLinks,
  message,
  showDelete = false,
  onDelete,
}: Props) {
  return (
    <section className="relative flex flex-col gap-9">
      <div className="flex flex-col items-center gap-1">
        <div className="mb-2 overflow-hidden rounded-2xl">
          <Image
            src={coverUrl}
            alt="앨범 커버 이미지"
            width={200}
            height={200}
            className="object-cover"
            priority
          />
        </div>
        <h2 className="h2-bold text-font-basic">{title}</h2>
        <p className="p1-bold text-font-basic">{artist}</p>
        <p className="p2-medium text-font-middle">{releaseDate}</p>
      </div>

      <div className="flex flex-col gap-2">
        <p className="p1-bold text-font-middle">음원 들으러 가기</p>
        <div className="grid grid-cols-2 gap-2">
          {streamingLinks.map((item) => (
            <StreamingButton
              key={item.url}
              streamingCode={item.code}
              url={item.url}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <p className="p1-bold text-font-middle">{artist}의 한 마디</p>
        <Card>
          <CardContent className="whitespace-pre-line">{message}</CardContent>
        </Card>
      </div>
      {showDelete && (
        <Trash2
          className="text-font-light absolute top-0 right-0 z-999 cursor-pointer"
          size={24}
          onClick={onDelete}
        />
      )}
    </section>
  );
}
