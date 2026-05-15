import { Suspense } from "react";
import ReportDetail from "@/components/report/report-detail";
import FadeMotion from "@/components/common/fade-motion";

export default function ReportDetailPage() {
  return (
    <Suspense>
      <FadeMotion x={20}>
        <ReportDetail />
      </FadeMotion>
    </Suspense>
  );
}
