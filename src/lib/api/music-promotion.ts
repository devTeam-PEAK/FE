import { fetcher } from "@/lib/api/common";
import { MusicPromotionInfo } from "@/types/album";
import {
  CreateMusicPromotionRes,
  GetMusicPromotionRes,
  GetMyPagePromotionsRes,
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
 * 마이페이지 프로모션 목록 조회
 * [GET] /mypage/promotions
 */
export async function getMyPagePromotions(): Promise<GetMyPagePromotionsRes> {
  try {
    const res = await fetcher<GetMyPagePromotionsRes>("/mypage/promotions", {
      method: "GET",
    });

    return res;
  } catch (e) {
    console.error("[music-promotion]: 마이페이지 프로모션 목록 조회 실패");
    throw e;
  }
}

/**
 * 뮤지션 홍보 삭제
 * [DELETE] /music-promotions/{promotionId}
 */
export async function deleteMusicPromotion(promotionId: number): Promise<void> {
  try {
    await fetcher<void>(`/music-promotions/${promotionId}`, {
      method: "DELETE",
    });
  } catch (e) {
    console.error("[music-promotion]: 뮤지션 홍보 삭제 실패");
    throw e;
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
