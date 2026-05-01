import { fetcher } from "@/lib/api/common";

/**
 * 개발용 JWT 발급
 * [POST] /dev/token
 */
export async function getDevToken(musicianId: number) {
  try {
    const { accessToken } = await fetcher<{ accessToken: string }>(
      `/dev/token?musicianId=${musicianId}`,
      {
        method: "POST",
      }
    );

    localStorage.setItem("accessToken", accessToken);
  } catch (e) {
    throw new Error("[dev]: 개발용 JWT 발급 실패");
  }
}
