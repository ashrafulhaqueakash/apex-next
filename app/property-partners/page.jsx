import { PageHero } from "@/components/PageHero";
import { ItemsGrid } from "@/components/ItemsGrid";
import { FullyManaged } from "@/components/property-partners/FullyManaged";
import { PropertyConversion } from "@/components/property-partners/PropertyConversion";
import { ApexProcess } from "@/components/ApexProcess";
import { ContactSection } from "@/components/ContactSection";
import { CTAButton } from "@/components/ui/Button";

const THE_CASE_FOR_IT = [
  {
    title: "UNLOCK A NEW INCOME STREAM.",
    body: "Turn previously unused façade or rooftop space into a professionally managed source of revenue.",
  },
  {
    title: "NO INVESTMENT REQUIRED.",
    body: "Apex manages the media infrastructure, engineering, production and installation required for each campaign.",
  },
  {
    title: "TURN A TEMPORARY PHASE INTO AN OPPORTUNITY.",
    body: "High quality architectural mesh can transform the appearance of developments under construction while creating new commercial value.",
  },
  {
    title: "SHOW THE FUTURE AT FULL SCALE.",
    body: "Use the building itself to reveal the completed development, communicate the developer brand or bring the future scheme to life on the actual site.",
  },
];

export const metadata = {
  title: "For Property Partners — The Apex Media Group",
  description: "For developers, building owners and asset managers with visibility that is not yet working commercially. Apex turns façades, developments and rooftops into professionally managed Architectural Media assets.",
};

export default function PropertyPartnersPage() {
  return (
    <div className="w-full">
      <PageHero
        image="/images/home/owners-card.webp"
        eyebrow="FOR PROPERTY PARTNERS"
        title="TURN YOUR BUILDING INTO AN ASSET."
        lead="For developers, building owners and asset managers with visibility that is not yet working commercially. Apex turns façades, developments and rooftops into professionally managed Architectural Media assets."
      >
        <div className="mt-1">
          <CTAButton className="!px-8">SUBMIT A PROPERTY</CTAButton>
        </div>
      </PageHero>

      <ItemsGrid
        eyebrow="THE OPPORTUNITY"
        title="YOUR BUILDING ALREADY HAS AN AUDIENCE."
        lead="Every prominent building creates visibility. Apex turns that visibility into commercial value while the property continues to do exactly what it was built to do."
        items={THE_CASE_FOR_IT}
      />

      <FullyManaged />
      <ApexProcess variant="property-partners" />
      <PropertyConversion />
      <ContactSection />
    </div>
  );
}
