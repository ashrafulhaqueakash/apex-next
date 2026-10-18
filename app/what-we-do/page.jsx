import { PageHero } from "@/components/PageHero";
import { ReframeCards } from "@/components/what-we-do/ReframeCards";
import { ProductGroups } from "@/components/ProductGroups";
import { ApexProcess } from "@/components/ApexProcess";
import { Closing } from "@/components/what-we-do/Closing";
import { ContactSection } from "@/components/ContactSection";

export const metadata = {
  title: "What We Do — The Apex Media Group",
  description:
    "Apex works where architecture, engineering, media and brand experience meet. We turn buildings, developments and rooftops into media landmarks built to command attention and create value.",
};

export default function WhatWeDoPage() {
  return (
    <div className="w-full">
      <PageHero
        image="/images/locations/photo-c.webp"
        eyebrow="WHAT WE DO"
        title="ARCHITECTURE IS THE MEDIA."
        lead="Apex works where architecture, engineering, media and brand experience meet. We turn buildings, developments and rooftops into media landmarks built to command attention and create value."
      />
      <ReframeCards />
      <ProductGroups
        rounded={false}
        variant="home"
        eyebrow="THREE WAYS TO OWN THE CITY"
        title="BUILD. ICON. ABOVE."
        lead="Three product groups. Three different ways to turn architecture into media."
      />
      <ApexProcess variant="what-we-do" />
      <Closing />
      <ContactSection />
    </div>
  );
}
