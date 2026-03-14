"use client";

import { useEffect } from "react";

/**
 * Client-side script component to initialize scroll animations
 * This component should be included in the layout or main page
 */
export default function ScrollAnimationScript() {
  useEffect(() => {
    // Initialize scroll animations observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
            // Unobserve after animation for better performance
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -5% 0px",
      }
    );

    // Observe all elements with animate-on-scroll class
    const animateElements = document.querySelectorAll(".animate-on-scroll");
    animateElements.forEach((el) => observer.observe(el));

    // Cleanup
    return () => {
      animateElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return null; // This component doesn't render anything
}