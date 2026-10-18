import Link from "next/link";
import { StaggerGroup, StaggerItem } from "./ui/Reveal";
import { LinkedInIcon, InstagramIcon } from "./ui/Icons";

const FOOTER_GROUPS = [
  {
    title: "Contact",
    items: [
      { label: "MAKATEB 2 - 505 - Dubai Production City - Dubai - United Arab Emirates" },
      { label: "info@theapexmediagroup.com", href: "mailto:info@theapexmediagroup.com" },
      { label: "+971585227385", href: "tel:+971585227385" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "WHAT WE DO", to: "/what-we-do" },
      { label: "FOR ADVERTISERS", to: "/advertisers" },
      { label: "FOR PROPERTY PARTNERS", to: "/property-partners" },
      // { label: "LOCATIONS", to: "/locations" },
      { label: "ABOUT", to: "/about" },
    ],
  },
  {
    title: "Follow",
    items: [
      { label: "LinkedIn", icon: "linkedin" },
      { label: "Instagram", icon: "instagram" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms & Conditions", to: "/terms" },
    ],
  },
];

function FooterIcon({ name }) {
  if (name === "linkedin") return <LinkedInIcon />;
  if (name === "instagram") return <InstagramIcon />;
  return null;
}

function FooterColumn({ title, items }) {
  return (
    <div className="flex w-full min-w-0 flex-col gap-4">
      <span className="font-display text-xl font-light leading-6 text-[#7f7f7f]">{title}</span>
      <div className="flex flex-col gap-2">
        {items.map((item) => {
          const content = (
            <>
              {item.icon && <FooterIcon name={item.icon} />}
              <span className="min-w-0 break-words">{item.label}</span>
            </>
          );
          if (item.to) {
            return (
              <Link
                key={item.label}
                href={item.to}
                className="link-underline flex w-fit min-w-0 max-w-full items-center gap-2 font-display text-sm font-medium leading-[17px] text-ivory hover:text-white"
              >
                {content}
              </Link>
            );
          }
          if (item.href) {
            return (
              <a
                key={item.label}
                href={item.href}
                className="link-underline flex w-fit min-w-0 max-w-full items-center gap-2 font-display text-sm font-medium leading-[17px] text-ivory hover:text-white"
              >
                {content}
              </a>
            );
          }
          return (
            <span key={item.label} className="block min-w-0 break-words font-display text-sm font-medium leading-[17px] text-ivory">
              {item.label}
            </span>
          );
        })}
      </div>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="flex flex-col items-center gap-8 bg-ink px-4 pb-[100px] pt-16 lg:gap-14 lg:px-16 lg:pt-11">
      <div className="h-px w-full bg-[#2c2c2c]/40 lg:w-[1152px]" />

      <div className="hidden w-[1152px] items-start lg:flex">
        <img src="/images/logos/apex-wordmark.svg" alt="The Apex Media Group" className="h-[48px] w-auto" />
        <StaggerGroup className="ml-auto flex gap-10">
          {FOOTER_GROUPS.map((group, i) => (
            <StaggerItem key={group.title} className={i === 0 ? "w-[210px]" : "w-[170px]"}>
              <FooterColumn {...group} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>

      <div className="flex w-full flex-col gap-8 lg:hidden">
        <img src="/images/logos/apex-wordmark.svg" alt="The Apex Media Group" className="h-[44px] w-auto self-start" />
        <StaggerGroup className="grid grid-cols-2 gap-8">
          {FOOTER_GROUPS.map((group) => (
            <StaggerItem key={group.title} className="min-w-0">
              <FooterColumn {...group} />
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </footer>
  );
}
