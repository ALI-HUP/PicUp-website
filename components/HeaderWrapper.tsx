"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";

const HeaderWrapper = () => {
  const pathname = usePathname();

  const hideHeader = pathname === "/" || pathname === "/login";

  return hideHeader ? null : <Header />;
};

export default HeaderWrapper;
