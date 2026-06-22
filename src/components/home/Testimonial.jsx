import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const testimonials = [
  {
    text: "The quality and craftsmanship of my Chronova watch is simply unmatched. It's more than a watch, it's a legacy.",
    name: "Michael Thompson",
    role: "Entrepreneur",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=12",
  },
  {
    text: "Luxury experience from start to finish. The detailing feels world-class.",
    name: "Daniel Carter",
    role: "Business Owner",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=32",
  },
  {
    text: "Chronova brings timeless elegance into modern design perfectly.",
    name: "Sophia Williams",
    role: "Designer",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "Chronova brings timeless elegance into modern design perfectly.",
    name: "Sophia Williams",
    role: "Designer",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=47",
  },
  {
    text: "Chronova brings timeless elegance into modern design perfectly.",
    name: "Sophia Williams",
    role: "Designer",
    rating: 5,
    img: "https://i.pravatar.cc/100?img=47",
  },
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-black text-white border-t border-white/10">
      
      {/* Title */}
      <h2 className="text-center text-3xl tracking-[6px] font-semibold text-white mb-14">
        WHAT OUR CLIENTS SAY
      </h2>

      <div className="max-w-6xl mx-auto px-4 pb-12">
        <Swiper
          className="pb-10"
          modules={[EffectCoverflow, Pagination, Autoplay]}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 220,
            modifier: 2.2,
            slideShadows: false,
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i}>
              <div className="w-[600px] mx-auto bg-[#0b0b0b] border border-[#C9A24E] rounded-3xl p-6 flex flex-col justify-between transition-all duration-500">

                {/* Quote */}
                <div className="text-[#C9A24E] text-6xl font-serif leading-none rotate-180 text-center">
                  ”
                </div>

                {/* Stars */}
                <div className="flex justify-center gap-1 text-[#C9A24E] text-2xl">
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>

                {/* Text */}
                <p className="text-white text-lg leading-relaxed text-center px-4 mt-2">
                  {item.text}
                </p>

                {/* Profile */}
                <div className="flex items-center justify-center gap-3 mt-6">
                  <img
                    src={item.img}
                    alt=""
                    className="w-10 h-10 rounded-full object-cover border border-[#C9A24E]"
                  />
                  <div className="text-left">
                    <h4 className="text-white font-semibold text-sm">
                      {item.name}
                    </h4>
                    <p className="text-gray-500 text-xs">{item.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Pagination + Active Slide Fix */}
      <style jsx>{`
        .swiper {
          padding-bottom: 50px;
        }

        .swiper-pagination {
          position: relative !important;
          margin-top: 25px;
          text-align: center;
        }

        .swiper-pagination-bullet {
          background: #C9A24E !important;
          opacity: 0.4;
          width: 10px;
          height: 10px;
        }

        .swiper-pagination-bullet-active {
          background: #C9A24E !important;
          opacity: 1;
          transform: scale(1.2);
        }

        .swiper-slide {
          opacity: 0.4;
          transform: scale(0.85);
          transition: 0.4s ease;
          filter: blur(2px);
        }

        .swiper-slide-active {
          opacity: 1 !important;
          transform: scale(1) !important;
          filter: blur(0px) !important;
        }
      `}</style>
    </section>
  );
}