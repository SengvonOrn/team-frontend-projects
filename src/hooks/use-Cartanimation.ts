import Autoplay from "embla-carousel-autoplay";
import { useEffect, useState, useRef } from "react";

export const useFadeCarousel = (totalSlides: number, intervalTime = 3500) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isPaused = useRef(false);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      if (!isPaused.current) {
        setActiveIndex((prev) => (prev + 1) % totalSlides);
      }
    }, intervalTime);
  };

  const stop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const handleMouseEnter = () => {
    isPaused.current = true;
  };

  const handleMouseLeave = () => {
    isPaused.current = false;
  };

  useEffect(() => {
    start();
    return () => stop();
  }, [totalSlides, intervalTime]);

  const prevSlide = () => {
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setActiveIndex((current) => (current + 1) % totalSlides);
  };

  const goToSlide = (index: number) => setActiveIndex(index);

  return {
    activeIndex,
    prevSlide,
    nextSlide,
    goToSlide,
    handleMouseEnter,
    handleMouseLeave,
  };
};

//==============================================>

export const useAutoplayCarousel = (
  delayTime = 3000,
  stopOnInteraction = false
) => {
  const autoplayPlugin = useRef(
    Autoplay({ delay: delayTime, stopOnInteraction })
  );

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [slidesCount, setSlidesCount] = useState(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setSlidesCount(api.scrollSnapList().length);

    api.on("select", onSelect);
    onSelect(); // initialize first time

    return () => api.off("select", onSelect);
  }, [api]);

  const stopAutoplay = () => autoplayPlugin.current.stop();
  const startAutoplay = () => autoplayPlugin.current.play();

  return {
    autoplayPlugin, // pass this ref to your Embla carousel
    selectedIndex,
    slidesCount,
    setApi, // call this inside your component: onInit={(api) => setApi(api)}
    api,
    startAutoplay,
    stopAutoplay,
  };
};
