import Image from "next/image";
import { mapToStreamingBtn } from "@/utils/mapper";
import { StreamingCode } from "@/types/album";
import Link from "next/link";

interface Props {
  streamingCode: StreamingCode;
  url: string;
}

export default function StreamingButton({ streamingCode, url }: Props) {
  const { label, icon } = mapToStreamingBtn[streamingCode];

  return (
    <Link
      href={url}
      target="_blank"
      className="bg-grey1 flex h-14 w-full items-center gap-3 rounded-2xl px-4"
    >
      <Image src={icon} alt={label} width={32} height={32} />
      <span className="p2-bold text-font-middle">{label}</span>
    </Link>
  );
}
