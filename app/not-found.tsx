"use client";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Box from "@/components/ui/box";

export default function NonFound() {
  useEffect(() => {
    // Track 404 page visit
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "page_view", {
        page_title: "404 Page Not Found",
        page_path: window.location.pathname,
      });
    }
  }, []);

  const handleReturnHomeClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "404 Page",
        event_label: "Return Home Button",
        value: 1,
      });
    }
  };

  return (
    <Box
      preset={"stack-center"}
      className="w-full min-h-svh bg-background gap-4"
    >
      <div className="absolute right-4 top-4">
        <ThemeModeToggle />
      </div>

      <Box preset={"stack-center"} className="gap-4">
        <Box preset={"stack-center"} className="gap-0 px-6">
          <Image
            src="/brand.png"
            alt="Next.js logo"
            className="max-w-full"
            width={400}
            height={100}
            priority
          />
          <h1 className="hidden">DAN N DUA</h1>
        </Box>

        <Box preset={"stack-center"} className="p-2 w-auto gap-0">
          <p className="text-6xl font-brand">404</p>
          <p className="text-2xl text-foreground/80">Page not found!</p>
        </Box>

        <Button asChild>
          <Link href={"/"} onClick={handleReturnHomeClick}>
            Return Home!
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
