"use client";

import { useEffect } from "react";
import { refreshScrollTrigger } from "@/lib/gsap/animations";
import { registerGsapPlugins } from "@/lib/gsap/register";

export function GsapProvider({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element {
  useEffect(() => {
    registerGsapPlugins();

    const handleLoad = (): void => {
      refreshScrollTrigger();
    };

    const handleResize = (): void => {
      refreshScrollTrigger();
    };

    window.addEventListener("load", handleLoad);
    window.addEventListener("resize", handleResize);

    const timeoutId = window.setTimeout(refreshScrollTrigger, 100);

    return () => {
      window.removeEventListener("load", handleLoad);
      window.removeEventListener("resize", handleResize);
      window.clearTimeout(timeoutId);
    };
  }, []);

  return <>{children}</>;
}
