import Link from "next/link";
import { PageHero } from "@/components/PageHero";
import { HeroActions } from "@/components/advertisers/HeroActions";
import { ItemsGrid } from "@/components/ItemsGrid";
import { ProductGroups } from "@/components/ProductGroups";
import {
  AdvertiserClosing,
  AdvertiserOpportunities,
  AdvertiserTurnkeyDelivery,
  BespokeOpportunities,
} from "@/components/advertisers/ConversionSections";
import { ContactSection } from "@/components/ContactSection";

const WHY_ARCHITECTURAL_MEDIA = [
  {
    title: "IMPACT AT ARCHITECTURAL SCALE.",
    body: "Entire façades create a physical presence that conventional media formats cannot reproduce. The building becomes the format.",
  },
  {
    title: "BE IMPOSSIBLE TO IGNORE.",
    body: "Architectural Media does not fight for a fraction of attention inside a feed or a rotating screen. It changes the environment around it.",
  },
  {
    title: "ONE LANDMARK. ONE BRAND.",
    body: "No rotation. No neighbouring advertiser. No shared screen. Your brand owns the location for the duration of the campaign.",
  },
  {
    title: "BE WHERE THE CITY ALREADY LOOKS.",
    body: "We work with architecture that already matters to the way people move through and experience Dubai.",
  },
  {
    title: "BECOME PART OF THE CITY.",
    body: "The strongest executions move beyond advertising. They become photographed, shared, discussed and remembered as part of the urban landscape.",
  },
];


export const metadata = {
  title: "For Advertisers — The Apex Media Group",
  description: "For brands and agencies that want more than another placement on the plan. Apex creates exclusive Architectural Media opportunities that put brands at the scale of the city itself.",
};

export default function AdvertisersPage() {

  return (
    <div className="w-full">
      <PageHero
        image="/images/advertisers/advertisers.webp"
        eyebrow="FOR ADVERTISERS"
        title={
          <>
            DON&rsquo;T BUY MEDIA.
            <br />
            OWN A LANDMARK.
          </>
        }
        lead="For brands and agencies that want more than another placement on the plan. Apex creates exclusive Architectural Media opportunities that put brands at the scale of the city itself."
      >
        <HeroActions />
      </PageHero>

      <ItemsGrid
        eyebrow="WHY ARCHITECTURAL MEDIA"
        title="THE CITY IS THE MEDIUM."
        lead="Architectural Media changes the role a brand can play in the city. It is not about adding more units. It is about owning one extraordinary location properly."
        items={WHY_ARCHITECTURAL_MEDIA}
      />

      <AdvertiserTurnkeyDelivery />

      <ProductGroups
        id="groups"
        tone="dark"
        variant="detail"
        eyebrow="THREE WAYS IN"
        title="BUILD. ICON. ABOVE."
        lead="Choose the environment that gives your brand the strongest relationship with the city."
        footer={
          <Link href="/what-we-do" className="link-underline font-sans text-base font-medium text-white">
            DISCOVER WHAT WE DO
          </Link>
        }
      />

      <AdvertiserOpportunities />
      <BespokeOpportunities />
      <AdvertiserClosing />
      <ContactSection />
    </div>
  );
}
