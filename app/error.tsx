"use client";
import Image from "next/image";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ThemeModeToggle } from "@/components/atoms/theme-mode-toggle";
import Box from "@/components/ui/box";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    // Track the error in Google Analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "exception", {
        description: error.message || "Unknown error",
        fatal: true,
      });
    }
  }, [error]);

  const handleResetClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Error Page",
        event_label: "Try Again Button",
        value: 1,
      });
    }
    reset();
  };

  const handleReturnHomeClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Error Page",
        event_label: "Return Home Button",
        value: 1,
      });
    }
  };

  return (
    <Box preset={"stack-center"} className="w-full min-h-svh bg-background">
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
          <p className="text-6xl font-brand">OOPS</p>
          <p className="text-2xl text-foreground/80">Something went wrong!</p>
        </Box>
        <Button variant={"outline"} onClick={handleResetClick}>
          Try again
        </Button>
        <Button asChild>
          <Link href={"/"} onClick={handleReturnHomeClick}>
            Return Home!
          </Link>
        </Button>
      </Box>
    </Box>
  );
}
