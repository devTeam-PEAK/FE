import { StreamingCode } from "@/types/album";

export function getStreamingCode(url: string): StreamingCode | null {
  try {
    const { hostname } = new URL(url);

    // Spotify
    if (hostname.includes("spotify.com")) return "spotify";

    // Apple Music
    if (hostname.includes("music.apple.com")) return "applemusic";

    // Melon
    if (hostname.includes("melon.com")) return "melon";

    // YouTube Music
    if (hostname.includes("music.youtube.com")) return "youtubemusic";

    // SoundCloud
    if (hostname.includes("soundcloud.com")) return "soundcloud";

    return null;
  } catch {
    return null;
  }
}
