/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useEffect } from "react";

export default function Tracker() {
  useEffect(() => {
    const handleRouteChange = () => {
      const url = window.location.pathname; // Get the current path
      if (window.gtag) {
        window.gtag('event', 'page_view', {
          page_path: url,
        });
      }
    };

    // Initial page load tracking
    handleRouteChange();

    // Listen for popstate events (triggered by browser navigation)
    window.addEventListener('popstate', handleRouteChange);

    // Cleanup
    return () => {
      window.removeEventListener('popstate', handleRouteChange);
    };
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      const referrer = document.referrer || "direct";
      const location = window.location.href;

      // Send custom event
      window.gtag("event", "user_info", {
        event_category: "User Info",
        event_label: "User Session",
        referrer,
        location,
      });

      // Optional: Capture geolocation
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;

          if (typeof window !== "undefined" && window.gtag) {
            window.gtag("event", "user_location", {
              event_category: "Location",
              latitude,
              longitude,
            });
          }
        },
        (error) => console.error("Geolocation error:", error)
      );
    }
  }, []);

  useEffect(() => {
    const startTime = Date.now();

    return () => {
      const endTime = Date.now();
      const timeSpent = (endTime - startTime) / 1000; // in seconds

      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "page_time", {
          event_category: "Time Spent",
          event_label: "Page Duration",
          value: timeSpent,
        });
      }
    };
  }, []);

  return <></>;
}
