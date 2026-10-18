import { TermsHero } from "@/components/terms/TermsHero";
import { TermsHighlights } from "@/components/terms/TermsHighlights";
import { TermsViewer } from "@/components/terms/TermsViewer";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "General Terms & Conditions of Business — The Apex Media Group",
  description:
    "Official General Terms & Conditions of Business for The Apex Media Group (MediaMasters FZ-LLC). Applicable to architectural media bookings, production policies, and campaign activations in Dubai, United Arab Emirates.",
};

export default function TermsPage() {
  return (
    <div className="w-full">
      <TermsHero />
      <TermsHighlights />
      <TermsViewer />
      <ContactSection />
    </div>
  );
}
