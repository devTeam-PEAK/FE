import Image from "next/image";

interface ErrorViewProps {
  title: string;
  description?: string;
}

export default function ErrorView({ title, description }: ErrorViewProps) {
  return (
    <div className="mt-25 flex flex-col items-center gap-8 text-center whitespace-pre-line">
      <div className="flex flex-col gap-14">
        <h1 className="h1-bold">{title}</h1>
        {description && (
          <p className="text-font-middle p2-regular">{description}</p>
        )}
      </div>
      <div className="bg-grey2 flex h-44 w-44 items-center justify-center rounded-full">
        <Image src={"/bamti-sad.svg"} alt="" width={128} height={128} />
      </div>
    </div>
  );
}
