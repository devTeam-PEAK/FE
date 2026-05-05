import HeaderClient from "./_header-client";
import { cookies } from "next/headers";

export default async function Header() {
  const cookieStore = await cookies();
  const isLoggedIn = cookieStore.has("refreshToken");

  return <HeaderClient isLoggedIn={isLoggedIn} />;
}
