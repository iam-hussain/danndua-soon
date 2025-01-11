"use client";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";

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
    <div className="flex flex-col md:flex-row gap-6 justify-center align-middle items-center w-full">
      <Image
        className="block h-[100px] w-auto"
        src="/instagram.png"
        alt="Follow Us on Instagram"
        width={120}
        height={120}
        priority
      />
      <div className="flex flex-col gap-2 text-center max-w-xl">
        {/* <h3 className="text-xl text-foreground/80">Join Us on Instagram!</h3> */}
        <p className="text-md text-foreground/70">
          Let’s be Insta-buddies! Follow us for exclusive updates on our newest
          products, expert tips, and irresistible offers you won’t want to miss!
        </p>
        <div className="w-full pt-4 px-4 max-w-sm flex justify-center align-bottom items-center m-auto">
          <Button asChild className="w-full">
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
    </div>
  );
}
