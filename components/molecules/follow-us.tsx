"use client";
import { Instagram } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function FollowUs() {
  // Function to handle Instagram click event
  const handleInstagramClick = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "click", {
        event_category: "Instagram",
        event_label: "Instagram Follow Link",
        value: 1,
      });
    }
  };

  return (
    <div className="flex max-w-sm flex-col gap-6 justify-center align-middle items-center m-auto">
      <div className="flex">
        <Instagram className="h-24 w-24 text-foreground/80" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-md text-center">
          Let’s connect on Instagram! Stay updated on our latest products,
          tips, and offers.
        </p>
        <Button asChild>
          <Link
            href={"https://www.instagram.com/dan_n_dua"}
            target="_blank"
            onClick={handleInstagramClick} // Attach the event handler here
          >
            Follow Us!
          </Link>
        </Button>
      </div>
    </div>
  );
}
