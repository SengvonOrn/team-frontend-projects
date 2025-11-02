"use client";

import { useEffect, useRef, useState } from "react";

export function useScrollDetection(threshold = 60, blurThreshold = 100) {
  const lastScroll = useRef(0);
  const [scrollY, setScrollY] = useState(0);
  const [hideTop, setHideTop] = useState(false);

  useEffect(() => {
    // Detect your actual scroll container (SidebarInset)
    const scrollContainer =
      document.querySelector('[data-slot="sidebar-inset"]') || window;

    const handleScroll = () => {
      const current =
        scrollContainer === window
          ? window.scrollY
          : (scrollContainer as HTMLElement).scrollTop;

      // Hide navbar when scrolling down past threshold
      if (current > lastScroll.current && current > threshold) {
        setHideTop(true);
      } else {
        setHideTop(false);
      }

      lastScroll.current = current;
      setScrollY(current);
    };
    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  const blurHeader = scrollY > blurThreshold;
  return { scrollY, hideTop, blurHeader };
}
