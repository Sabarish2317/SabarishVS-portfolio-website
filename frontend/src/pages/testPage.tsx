import { useState, useEffect } from "react";
import { useMotionValue, useMotionValueEvent } from "framer-motion";
import WorkScrollerText from "@/components/workScroller/workScrollerText";

export default function ScrollLockLoading() {
  const [scrollUnlocked, setScrollUnlocked] = useState(false);
  const [progress, setProgress] = useState("0"); // React state to store scroll progress as string
  const scrollProgress = useMotionValue(0);
  const maxScroll = 300; // Full height unlocks scroll

  let touchStartY = 0;

  useMotionValueEvent(scrollProgress, "change", (latest) => {
    setProgress(latest.toFixed(0)); // Update state whenever scrollProgress changes
  });

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (!scrollUnlocked) {
        event.preventDefault();
        const delta = event.deltaY * 0.1;
        updateProgress(delta);
      } else if (window.scrollY <= 0) {
        setScrollUnlocked(false);
      }
    };

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
    };

    const handleTouchMove = (event: TouchEvent) => {
      if (!scrollUnlocked) {
        event.preventDefault();
        const touchDelta = (touchStartY - event.touches[0].clientY) * 0.4;
        if (Math.abs(touchDelta) > 5) updateProgress(touchDelta);
      } else if (window.scrollY <= 0) {
        setScrollUnlocked(false);
      }
    };

    const updateProgress = (delta: number) => {
      const newProgress = Math.max(
        0,
        Math.min(scrollProgress.get() + delta, maxScroll)
      );
      scrollProgress.set(newProgress);

      if (newProgress >= maxScroll) {
        setScrollUnlocked(true);
      }
    };

    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [scrollUnlocked, scrollProgress]);
  console.log(progress.toString());
  return (
    <div className="relative min-h-screen flex flex-col items-center bg-gray-900 text-white">
      {/* Locked Scroll Section */}
      <WorkScrollerText
        loadingBarColor="#ff5733"
        loadingBarBackgroundColor="#333333"
        heading="APP DEVELOPMENT"
        content="I build cross-platform apps with Flutter, following BLoC architecture, clean code practices, and responsive design. My focus is on delivering smooth performance, intuitive navigation, and scalable code."
        childrenIndex={0}
        iscondensed={false}
        progress={progress} // Now dynamically updates
      />

      {/* Natural Scrolling Content
      <div className="h-[150vh] w-full flex items-center justify-center text-lg">
        🎉 Scroll unlocked! Scrolling up will re-lock it 🎉
      </div> */}
    </div>
  );
}
