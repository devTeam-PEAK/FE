import { StreamingCode } from "@/types/album";

export const mapToStreamingBtn: Record<
  StreamingCode,
  {
    label: string;
    icon: string;
  }
> = {
  spotify: {
    label: "스포티파이",
    icon: "/spotify.png",
  },
  applemusic: {
    label: "애플 뮤직",
    icon: "/apple-music.png",
  },
  melon: {
    label: "멜론",
    icon: "/melon.png",
  },
  youtubemusic: {
    label: "유튜브 뮤직",
    icon: "/youtube-music.png",
  },
  soundcloud: {
    label: "사운드클라우드",
    icon: "/soundcloud.png",
  },
};
