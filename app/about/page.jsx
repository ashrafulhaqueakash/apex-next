import { AboutHero } from "@/components/about/AboutHero";
import { StoryTabs } from "@/components/about/StoryTabs";
import { Philosophy } from "@/components/about/Philosophy";
import { Team } from "@/components/about/Team";
import { AboutClosing } from "@/components/about/AboutClosing";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "About — The Apex Media Group",
  description:
    "The Apex Media Group is a Dubai based Architectural Media company transforming the built environment into extraordinary brand opportunities.",
};

export default function AboutPage() {
  return (
    <div className="w-full">
      <AboutHero />
      <StoryTabs />
      <Philosophy />
      <Team />
      <AboutClosing />
      <ContactSection />
    </div>
  );
}
