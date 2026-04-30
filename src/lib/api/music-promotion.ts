import { fetcher } from "@/lib/api/common";
import { MusicPromotionInfo } from "@/types/album";
import {
  CreateMusicPromotionRes,
  GetMusicPromotionRes,
} from "@/types/api-response";

/**
 * 뮤지션 홍보 생성
 * [POST] /music-promotions
 */
export async function createMusicPromotion(
  payload: MusicPromotionInfo
): Promise<CreateMusicPromotionRes> {
  try {
    const res = await fetcher<{
      data: CreateMusicPromotionRes;
    }>("/music-promotions", {
      method: "POST",
      body: JSON.stringify(payload),
    });

    return res.data;
  } catch {
    throw new Error("[music-promotion]: 뮤지션 홍보 생성 실패");
  }
}

/**
 * 뮤지션 홍보 조회
 * [GET] /music-promotions/{promotionId}
 */
export async function getMusicPromotion(
  promotionId: number
): Promise<GetMusicPromotionRes> {
  try {
    const res = await fetcher<{
      data: GetMusicPromotionRes;
    }>(`/music-promotions/${promotionId}`, {
      method: "GET",
    });

    return res.data;
  } catch (e) {
    console.error("[music-promotion]: 뮤지션 홍보 조회 실패");
    throw e;
  }
}
