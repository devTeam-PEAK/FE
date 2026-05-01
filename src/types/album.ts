export interface MusicPromotionInfo {
  activityName: string;
  songTitle: string;
  releaseDate: string;
  streamingLinks: {
    streamingCode: StreamingCode;
    url: string;
  }[];
  imageUrl: string;
  shortDescription: string;
}

export type StreamingCode =
  | "spotify"
  | "applemusic"
  | "melon"
  | "youtubemusic"
  | "soundcloud";

export interface StreamingItem {
  code: StreamingCode;
  url: string;
}
