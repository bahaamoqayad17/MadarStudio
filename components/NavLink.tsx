"use client";

import Link, { LinkProps } from "next/link";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const NavLink = forwardRef<
  HTMLAnchorElement,
  LinkProps & { className?: string }
>(({ className, ...props }, ref) => {
  return <Link ref={ref} className={cn(className)} {...props} />;
});
NavLink.displayName = "NavLink";

export default NavLink;
