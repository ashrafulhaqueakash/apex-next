import { Hero } from "@/components/home/Hero";
import { PropertyOwnerSplit } from "@/components/home/PropertyOwnerSplit";
import { ProductGroups } from "@/components/ProductGroups";
import { WinWin } from "@/components/home/WinWin";
import { ProcessCarousel } from "@/components/home/ProcessCarousel";
import { PropertyConversion } from "@/components/home/PropertyConversion";
import { Capabilities } from "@/components/home/Capabilities";
import { FeaturedLocations } from "@/components/home/FeaturedLocations";
import { LocationsSection } from "@/components/home/LocationsSection";
import { AdvertiserConversion } from "@/components/home/AdvertiserConversion";
import { EngineeredToPerform } from "@/components/home/EngineeredToPerform";
import { FinalConversion } from "@/components/home/FinalConversion";
import { ContactSection } from "@/components/ContactSection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="w-full">
        <PropertyOwnerSplit />
        <ProductGroups />
        <WinWin />
        <ProcessCarousel />
        <PropertyConversion />
        <Capabilities />
        <FeaturedLocations />
        <LocationsSection />
        <AdvertiserConversion />
        <EngineeredToPerform />
        <FinalConversion />
        <ContactSection />
      </div>
    </>
  );
}
