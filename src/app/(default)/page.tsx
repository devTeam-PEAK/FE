import { cookies } from "next/headers";
import Home from "@/components/home/home-page";

export default async function Page() {
  const cookieStore = await cookies();

  const showIntro = !cookieStore.has("peak-intro-seen");
  const isLoggedIn = cookieStore.has("isLoggedIn");

  return <Home showIntro={showIntro} isLoggedIn={isLoggedIn} />;
}
