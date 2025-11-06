"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { slides2 } from "@/constants/data";
import {
  useFadeCarousel,
  useAutoplayCarousel,
} from "@/hooks/use-Cartanimation";

export function SectionCards() {
  // Right carousel (fade animation)
  const { activeIndex, goToSlide, handleMouseEnter, handleMouseLeave } =
    useFadeCarousel(slides2.length);

  // Left carousel (Embla with autoplay)
  const {
    autoplayPlugin,
    selectedIndex,
    slidesCount,
    setApi,
    api,
    startAutoplay,
    stopAutoplay,
  } = useAutoplayCarousel(3000, false);

  //
  const handleMouseEnterstop = () => stopAutoplay();
  const handleMouseLeavestart = () => startAutoplay();

  //

  return (
    <div className="grid md:grid-cols-3 gap-6  py-10">
      {/* === RIGHT FADE CAROUSEL === */}
      <div
        className="relative w-full md:col-span-2 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
          style={{
            background: "linear-gradient(to right, #FF7F50, #FF4500)",
          }}
        >
          {slides2.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <div className="flex items-center justify-between h-full p-10 md:p-20">
                <div className="max-w-md z-40">
                  <p className="text-white text-3xl font-bold mb-2 tracking-widest">
                    {slide.title}
                  </p>
                  <h1 className="text-white text-7xl md:text-8xl font-black leading-none tracking-tight">
                    {slide.subtitle}
                  </h1>
                  <button className="mt-8 px-6 py-2 flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg transition duration-300">
                    Get Joint Promotion <span className="ml-2">→</span>
                  </button>
                </div>

                <div className="absolute top-80 right-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96">
                  <div className="relative w-full h-full">
                    <Image
                      src={slide.images}
                      alt={`${slide.title} product`}
                      fill
                      className="p-2 rounded-3xl object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute top-8 right-8 text-white text-4xl font-extrabold p-2 rounded-lg">
                {slide.discount}
              </div>
            </div>
          ))}

          {/* Indicators */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {slides2.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125 w-10"
                    : "bg-white/50 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* === LEFT SLIDING CAROUSEL === */}
      <div
        className="w-full max-w-4xl mx-auto h-[500px] p-0"
        onMouseEnter={handleMouseEnterstop}
        onMouseLeave={handleMouseLeavestart}
      >
        <Carousel
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          setApi={setApi}
        >
          <CarouselContent className="flex">
            {slides2.map((slide, index) => (
              <CarouselItem key={index}>
                <Image
                  src={slide.images}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full shadow" />

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-white scale-125 w-10"
                    : "bg-white/50 w-3"
                }`}
                onClick={() => api && api.scrollTo(index)}
              />
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
