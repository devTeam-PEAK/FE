const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

/**
 * 로컬 스토리지에서 저장된 JWT accessToken 조회
 * dev / prod 공통 사용
 */
export function getAccessToken() {
  if (typeof window === "undefined") return null;

  return localStorage.getItem("accessToken");
}

/**
 * 공통 API 요청 함수
 * 모든 fetch 요청의 기본 래퍼로 사용
 */
export async function fetcher<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = getAccessToken();

  const headers = new Headers(options.headers);

  if (!headers.has("Content-Type") && !(options.body instanceof FormData)) {
    headers.set("Content-Type", "application/json");
  }

  if (token) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers,
    credentials: "include",
  });

  if (!res.ok) {
    throw Error();
  }

  return res.json();
}
