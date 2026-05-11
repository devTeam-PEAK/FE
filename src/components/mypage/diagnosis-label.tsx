interface Props {
  label: string | null;
}

export default function DiagnosisLabel({ label }: Props) {
  return (
    <div className="border-main-light2 bg-main-light1 inline-flex w-fit rounded-full border px-3 py-1">
      <span className="p2-semibold text-main-mid">{label}</span>
    </div>
  );
}
