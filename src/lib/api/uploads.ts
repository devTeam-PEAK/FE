import { GetCoverImgUploadUrlRes } from "@/types/api-response";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * 음악 홍보 이미지 업로드 URL 발급 : presigned URL 발급
 * POST /uploads/music-promotion-image
 */
export async function getCoverImgUploadUrl(
  filename: string
): Promise<GetCoverImgUploadUrlRes> {
  const res = await fetch(
    `${BASE_URL}/uploads/music-promotion-image?filename=${filename}`,
    {
      method: "POST",
    }
  );

  if (!res.ok) {
    throw new Error("[uploads]: 커버 이미지 업로드 URL 발급 실패");
  }

  return res.json();
}

/**
 * 음악 홍보 이미지 S3 업로드
 */
export async function uploadCoverImg(file: File): Promise<string> {
  // 1. presigned URL 발급
  const { uploadUrl, imageUrl } = await getCoverImgUploadUrl(file.name);

  // 2. S3 업로드
  const res = await fetch(uploadUrl, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (!res.ok) {
    throw new Error("[uploads]: S3 업로드 실패");
  }

  // 3. 최종 URL 반환
  return imageUrl;
}
