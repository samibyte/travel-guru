import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import slideImg from "../assets/images/Sajek.png";

import "swiper/css";
import "swiper/css/navigation";

const CardSlider = ({ data, onSlideChange }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.activeIndex);
    if (onSlideChange) {
      onSlideChange(swiper.activeIndex);
    }
  };

  return (
    <div className="relative w-full">
      <Swiper
        className="w-full h-[500px]"
        grabCursor={true}
        slidesPerView={3}
        spaceBetween={50}
        initialSlide={0}
        onSlideChange={handleSlideChange}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Navigation]}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {data.map((d, index) => (
          <SwiperSlide
            key={index}
            className="relative rounded-[20px] overflow-hidden h-[600px]"
          >
            <img
              className="w-full h-full object-cover object-bottom"
              src={slideImg || d.img}
              alt={d.title || d.name}
            />
            <div className="absolute bottom-12 left-6 z-10">
              <h3 className="text-white text-3xl font-black uppercase drop-shadow-lg">
                {d.title || d.name}
              </h3>
            </div>
            {/* Orange border on active slide */}
            <div
              className={`absolute inset-0 rounded-[20px] pointer-events-none border-4 ${
                index === activeIndex ? "border-primary" : "border-transparent"
              }`}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Buttons */}
      <div className="absolute bottom-[-80px] left-1/2 -translate-x-1/2 flex gap-5 z-50">
        <button className="swiper-button-prev-custom w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <span className="text-2xl">‹</span>
        </button>
        <button className="swiper-button-next-custom w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
          <span className="text-2xl">›</span>
        </button>
      </div>
    </div>
  );
};

export default CardSlider;
