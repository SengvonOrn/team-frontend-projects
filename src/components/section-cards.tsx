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
import Shoe from "../../public/slider/Shoe.jpg";
import Three from "../../public/slider/Three.jpg";
import Two from "../../public/slider/Two.jpg";
const slides2 = [
  {
    title: "Black",
    subtitle: "FRIDAY",
    discount: "50% off",
    images: Shoe,
  },
  {
    title: "Cyber",
    subtitle: "MONDAY",
    discount: "70% off",
    images: Three,
  },
  {
    title: "Holiday",
    subtitle: "SALE",
    discount: "40% off",
    images: Two,
  },
];

// Custom hook for the Right Carousel (Fade-in/Fade-out style)
const useFadeCarousel = (totalSlides: number) => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  // Automatic slide change (Adjusted to 3500ms as per your original code)
  React.useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % totalSlides);
    }, 3500);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const prevSlide = () =>
    setActiveIndex((current) => (current - 1 + totalSlides) % totalSlides);

  const nextSlide = () =>
    setActiveIndex((current) => (current + 1) % totalSlides);

  const goToSlide = (index: number) => setActiveIndex(index);

  return { activeIndex, prevSlide, nextSlide, goToSlide };
};

export function SectionCards() {
  // Use the custom hook for the RIGHT CAROUSEL (Fade animation)
  const { activeIndex, prevSlide, nextSlide, goToSlide } = useFadeCarousel(
    slides2.length
  );

  // Use Embla state/ref for the LEFT CAROUSEL (Sliding animation)
  const autoplayPlugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  );
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const [slidesCount, setSlidesCount] = React.useState(0);
  const [api, setApi] = React.useState<any>(null);

  React.useEffect(() => {
    if (!api) return;
    const onSelect = () => setSelectedIndex(api.selectedScrollSnap());
    setSlidesCount(api.scrollSnapList().length);
    api.on("select", onSelect);
    onSelect(); // initialize
    return () => api.off("select", onSelect);
  }, [api]);

  return (
    <div className="grid md:grid-cols-3 gap-6 px-4 lg:px-20 py-10">
      <div className="relative w-full md:col-span-2 overflow-hidden">
        <div
          className="w-full h-[500px] rounded-2xl overflow-hidden shadow-xl"
          style={{
            // Replicating the vibrant orange-to-red gradient
            background: "linear-gradient(to right, #FF7F50, #FF4500)",
          }}
        >
          {/* === Slides Section === */}
          {slides2.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              {/* The actual content of the slide */}
              <div className="flex items-center justify-between h-full p-10 md:p-20 ">
                {/* Text Content */}
                <div className="max-w-md z-40">
                  <p className="text-white text-3xl font-bold mb-2 tracking-widest">
                    {slide.title}
                  </p>
                  <h1 className="text-white text-7xl md:text-8xl font-black leading-none tracking-tight">
                    {slide.subtitle}
                  </h1>

                  {/* Button */}
                  <button className="mt-8 px-6 py-2 flex items-center bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full shadow-lg transition duration-300">
                    Get Joint Promotion
                    <span className="ml-2">→</span>
                  </button>
                </div>
                {/* Product Image (Styled like the T-shirt image in the cart) */}
                <div className="absolute top-80 right-0 -translate-y-1/2 w-64 h-64 md:w-96 md:h-96 rounded-4xl">
                  <div className="relative w-full h-full">
                    <div className="absolute inset-0 pt-8">
                      <Image
                        src={slide.images}
                        alt={`${slide.title} product`}
                        fill
                        objectFit="contain"
                        className="p-2 rounded-3xl" // Padding to make space for the hanger
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* "50% off" Badge (Dynamically pulling discount) */}
              <div className="absolute top-8 right-8 text-white text-4xl font-extrabold p-2 rounded-lg">
                {slide.discount}
              </div>
            </div>
          ))}
          {/* === Indicators for Custom/Right Carousel === */}
          <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex space-x-3 z-30">
            {slides2.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === activeIndex
                    ? "bg-white scale-125 w-10" // Active indicator is wider and brighter
                    : "bg-white/50 w-3"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* ⬅️ LEFT CAROUSEL (Embla/Sliding) */}
      <div className="w-full max-w-4xl mx-auto h-[500px] p-0">
        <Carousel
          className="relative w-full h-full rounded-2xl overflow-hidden shadow-2xl"
          opts={{ loop: true }}
          plugins={[autoplayPlugin.current]}
          setApi={setApi}
        >
          <CarouselContent className="flex">
            <CarouselItem>
              <Image
                src={Shoe}
                alt="Shoe"
                className="w-full h-full object-cover"
              />
            </CarouselItem>

            <CarouselItem>
              <Image
                src={Two}
                alt="Second"
                className="w-full h-full object-cover"
              />
            </CarouselItem>

            <CarouselItem>
              <Image
                src={Three}
                alt="Third"
                className="w-full h-full object-cover"
              />
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2  p-2 rounded-full shadow" />

          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2  p-2 rounded-full shadow" />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {Array.from({ length: slidesCount }).map((_, index) => (
              <button
                key={index}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-white scale-125 w-10" // Active indicator is wider and brighter
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
