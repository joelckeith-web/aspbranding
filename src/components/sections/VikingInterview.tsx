import { InterviewVideo } from "@/components/sections/InterviewVideo";

// Nikki Bridge's interview (Viking Heating and Air Conditioning, the client in
// the HVAC case study). Approved for the landing pages and the ASP site, and
// Viking may be named (Joel, 2026-10-26).
export function VikingInterview({ dark = false }: { dark?: boolean }) {
  return (
    <InterviewVideo
      youtubeId="lxEd909lojg"
      poster="/images/proof/viking-interview-thumb.webp"
      duration="4:38"
      spokenDuration="4 minutes 38 seconds"
      title="Nikki Bridge of Viking Heating and Air Conditioning on working with ASP"
      person="Nikki Bridge of Viking Heating and Air Conditioning"
      name="Nikki Bridge"
      caption=", co-owner of Viking Heating and Air Conditioning in Phoenix, on working with ASP."
      dark={dark}
    />
  );
}
