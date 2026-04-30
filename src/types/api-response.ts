/******************************
 * Image Upload
 ******************************/

// 음악 홍보 이미지 업로드 URL 발급 Res
export interface GetCoverImgUploadUrlRes {
  uploadUrl: string;
  imageKey: string;
  imageUrl: string;
}

/******************************
 * Music Promotion
 ******************************/

// 뮤지션 홍보 생성 Res
export interface CreateMusicPromotionRes {
  trackingUrl: string;
  promotionId: number;
}

// 뮤지션 홍보 조회 Res
export interface GetMusicPromotionRes {
  promotionId: number;
  trackingCode: string;
  trackingUrl: string;
  activityName: string;
  songTitle: string;
  releaseDate: string;
  imageUrl: string;
  shortDescription: string;
  createdAt: string;
  streamingLinks: {
    streamingCode: string;
    domain: string;
    redirectUrl: string;
    displayOrder: number;
  }[];
}
