import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Hero() {
  const slides = [
    {
      title: "TIMELESS ELEGANCE",
      subtitle: "Crafted for modern sophistication",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
    },
    {
      title: "LUXURY REDEFINED",
      subtitle: "Swiss precision meets modern design",
      image:
        "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3",
    },
    {
      title: "MASTERPIECE WATCHES",
      subtitle: "Built for those who value perfection",
      image:
        "https://images.unsplash.com/photo-1518546305927-5a555bb7020d",
    },
  ];

  return (
    <section className="relative w-full h-screen bg-black overflow-hidden">
      
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 4000 }}
        pagination={{ clickable: true }}
        navigation
        loop
        className="h-full"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-screen flex items-center">
              
              {/* Background */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/70" />

              {/* Content */}
              <div className="relative z-10 max-w-7xl mx-auto w-full px-6 flex flex-col lg:flex-row items-center justify-between">

                {/* LEFT TEXT */}
                <div className="text-white max-w-xl">
                  <p className="text-[#C9A24E] tracking-widest mb-3">
                    CRAFTED FOR
                  </p>

                  <h1 className="text-4xl md:text-6xl font-light leading-tight">
                    {item.title}
                  </h1>

                  <p className="text-gray-300 mt-4 text-sm md:text-base">
                    {item.subtitle}
                  </p>

                  <button className="mt-6 px-6 py-3 bg-[#C9A24E] text-black font-medium hover:bg-[#b8943f] transition">
                    EXPLORE COLLECTION
                  </button>
                </div>

                {/* RIGHT IMAGE */}
                <div className="mt-10 lg:mt-0">
                  <img
                    src="https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3"
                    alt="watch"
                    className="w-[280px] md:w-[420px] drop-shadow-2xl"
                  />
                </div>

              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}