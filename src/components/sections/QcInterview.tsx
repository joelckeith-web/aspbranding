import { InterviewVideo } from "@/components/sections/InterviewVideo";

// Sean Quy's interview (QC Mechanical). Added beside Nikki's on the
// strategy-call landing pages (Joel, 2026-11-02).
export function QcInterview({ dark = false }: { dark?: boolean }) {
  return (
    <InterviewVideo
      youtubeId="Ncw7to0e_os"
      poster="/images/proof/qc-interview-poster.webp"
      duration="4:45"
      spokenDuration="4 minutes 45 seconds"
      title="Sean Quy of QC Mechanical on working with ASP"
      person="Sean Quy of QC Mechanical"
      name="Sean Quy"
      caption=", owner of QC Mechanical in Orting, Washington, on working with ASP."
      dark={dark}
    />
  );
}
