import { PrivacyHero } from "@/components/privacy/PrivacyHero";
import { PrivacyHighlights } from "@/components/privacy/PrivacyHighlights";
import { PrivacyViewer } from "@/components/privacy/PrivacyViewer";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "Corporate Privacy Policy — The Apex Media Group",
  description:
    "Official Corporate Privacy Policy for The Apex Media Group (MediaMasters FZ-LLC). Explaining personal data processing, statutory safeguards under UAE Federal Decree-Law No. 45 of 2021, architectural media campaign coordination, and data subject rights in Dubai, United Arab Emirates.",
};

export default function PrivacyPage() {
  return (
    <div className="w-full">
      <PrivacyHero />
      <PrivacyViewer />
      <ContactSection />
    </div>
  );
}
