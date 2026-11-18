import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

// ─────────────────────────────────────────────────────────────
// GALLERIES
// To add photos: put them in the gallery's folder in /public, named
// photo1.jpeg, photo2.jpeg … and increase `count` to the new total.
// ─────────────────────────────────────────────────────────────
const buildImages = (folder, count) =>
  Array.from({ length: count }, (_, i) => `/${folder}/photo${i + 1}.jpeg`);

const galleries = [
  {
    id: 'healthy-futures',
    title: 'Healthy Futures',
    description:
      'Healthy Futures is our flagship initiative bringing awareness, screening, and education to schools and communities. By equipping children, parents, and teachers with knowledge and tools, we are building a generation that is wise about sugar, strong in health, and ready for brighter futures.',
    images: buildImages('healthy-futures', 51),
  },
  {
    id: 'secure-the-futures',
    title: 'Secure the Futures',
    description:
      'Secure the Futures is our school safety awareness programme, helping children learn to stay safe at school, at home, and in their communities. By equipping children, teachers, and parents with practical knowledge and simple tools, we are building a generation that is aware, prepared, and protected, ready for brighter futures.',
    images: buildImages('secure-the-futures', 10),
  },
];

const GallerySlider = ({ gallery, onOpen }) => (
  <div id={gallery.id} className="scroll-mt-24">
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-4xl font-bold mb-4">{gallery.title}</h2>
      <p className="text-muted-foreground">{gallery.description}</p>
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
      {gallery.images.map((image, index) => (
        <SwiperSlide key={image}>
          <button
            type="button"
            onClick={() => onOpen(index)}
            className="w-full text-left"
          >
            <div className="overflow-hidden rounded-2xl shadow-lg bg-muted cursor-pointer">
              <img
                src={image}
                alt={`${gallery.title} ${index + 1}`}
                className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          </button>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

const Media = () => {
  // { gallery: index into `galleries`, image: index into that gallery's images }
  const [selected, setSelected] = useState(null);

  const activeImages = selected ? galleries[selected.gallery].images : [];

  const openImage = (galleryIndex, imageIndex) => {
    setSelected({ gallery: galleryIndex, image: imageIndex });
  };

  const closeImage = () => {
    setSelected(null);
  };

  const showPrevious = () => {
    setSelected((prev) => ({
      ...prev,
      image: prev.image === 0 ? activeImages.length - 1 : prev.image - 1,
    }));
  };

  const showNext = () => {
    setSelected((prev) => ({
      ...prev,
      image: prev.image === activeImages.length - 1 ? 0 : prev.image + 1,
    }));
  };

  return (
    <section
      id="media"
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 space-y-20">
        {galleries.map((gallery, galleryIndex) => (
          <GallerySlider
            key={gallery.id}
            gallery={gallery}
            onOpen={(imageIndex) => openImage(galleryIndex, imageIndex)}
          />
        ))}
      </div>

      {selected !== null && (
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
            src={activeImages[selected.image]}
            alt={`${galleries[selected.gallery].title} enlarged ${selected.image + 1}`}
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

export default Media;
