import { useEffect } from "react";
import { useRouter } from "next/router";

export function usePageTracking() {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_view", {
          page_path: url,
        });
      }
    };

    // Start tracking
    router.events.on("routeChangeComplete", handleRouteChange);

    // Cleanup
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
}
