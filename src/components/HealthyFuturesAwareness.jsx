import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const images = Array.from(
  { length: 33 },
  (_, i) => `/healthy-futures/photo${i + 1}.jpeg`
);

const HealthyFuturesAwareness = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImage = (index) => {
    setSelectedImage(index);
  };

  const closeImage = () => {
    setSelectedImage(null);
  };

  const showPrevious = () => {
    setSelectedImage((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const showNext = () => {
    setSelectedImage((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <section
      id="healthy-futures-awareness"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Healthy Futures Awareness
          </h2>

          <p className="text-muted-foreground">
            Highlights from our outreach events, awareness campaigns,
            and community engagements focused on building healthier futures.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          loop
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1280: {
              slidesPerView: 4,
            },
          }}
        >
          {images.map((image, index) => (
            <SwiperSlide key={index}>
              <button
                type="button"
                onClick={() => openImage(index)}
                className="w-full text-left"
              >
                <div className="overflow-hidden rounded-2xl shadow-lg bg-muted cursor-pointer">
                  <img
                    src={image}
                    alt={`Healthy Futures Awareness ${index + 1}`}
                    className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              </button>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {selectedImage !== null && (
        <div className="fixed inset-0 z-[9999] bg-black/90 flex items-center justify-center px-4">
          <button
            type="button"
            onClick={closeImage}
            className="absolute top-5 right-5 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
            aria-label="Close image"
          >
            <X size={28} />
          </button>

          <button
            type="button"
            onClick={showPrevious}
            className="absolute left-4 md:left-8 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
            aria-label="Previous image"
          >
            <ChevronLeft size={34} />
          </button>

          <img
            src={images[selectedImage]}
            alt={`Healthy Futures Awareness enlarged ${selectedImage + 1}`}
            className="max-w-full max-h-[85vh] object-contain rounded-lg"
          />

          <button
            type="button"
            onClick={showNext}
            className="absolute right-4 md:right-8 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
            aria-label="Next image"
          >
            <ChevronRight size={34} />
          </button>
        </div>
      )}
    </section>
  );
};

export default HealthyFuturesAwareness;