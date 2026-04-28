import Image from "next/image";
import { StreamingType } from "@/types/album";
import { mapToStreamingBtn } from "@/utils/mapper";

interface Props {
  streamingType: StreamingType;
}

export default function StreamingButton({ streamingType }: Props) {
  const { label, icon } = mapToStreamingBtn[streamingType];

  return (
    <button className="bg-grey1 flex h-14 w-full items-center gap-3 rounded-2xl px-4">
      <Image src={icon} alt={label} width={32} height={32} />
      <span className="p2-bold text-font-middle">{label}</span>
    </button>
  );
}
