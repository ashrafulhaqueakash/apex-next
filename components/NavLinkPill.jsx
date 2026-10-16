"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function NavLinkPill({ href, className, children, onClick }) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href} onClick={onClick} className={className(isActive)}>
      {children}
    </Link>
  );
}
