import { fetcher } from "@/lib/api/common";
import { GetCoverImgUploadUrlRes } from "@/types/api-response";

/**
 * 음악 홍보 이미지 업로드 URL 발급 : presigned URL 발급
 * [POST] /uploads/music-promotion-image
 */
export async function getCoverImgUploadUrl(
  filename: string
): Promise<GetCoverImgUploadUrlRes> {
  try {
    return await fetcher(
      `/uploads/music-promotion-image?filename=${filename}`,
      {
        method: "POST",
      }
    );
  } catch (e) {
    throw new Error("[uploads]: 커버 이미지 업로드 URL 발급 실패");
  }
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
