import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Navigation } from "swiper/modules";
import gsap from "gsap";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

const Certificates = () => {
  const swiperRef = useRef(null);

  const certificates = [
    { img: "/certificates/CDAC.jpg", title: "Python for Web Development" },
    { img: "/certificates/Mern Stack.jpg", title: "MERN Stack Development" },
    { img: "/certificates/Python.jpg", title: "Python Programming" },
    { img: "/certificates/Udemy certificate.jpg", title: "Full Stack Web Development Certification" },
  ];

  useEffect(() => {
    gsap.from(".certificate-slide img", {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      stagger: 0.2,
      ease: "power2.out",
    });

    gsap.to(".certificate-slide img", {
      y: 10,
      repeat: -1,
      yoyo: true,
      duration: 3,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section id="certificates" className="py-20 overflow-visible">
      <h2 className="text-center text-5xl font-bold mb-6">Certificates</h2>
      <p className="text-center text-muted-foreground mb-10">
        Here are some of the certificates I've earned recently.
      </p>

      <div className="w-full max-w-[1400px] mx-auto overflow-visible relative px-10">
        <Swiper
          ref={swiperRef}
          loop={true}
          grabCursor={true}
          centeredSlides={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            waitForTransition: true,
          }}
          speed={1200}
          onSwiper={(swiper) => {
            setTimeout(() => {
              try { swiper.autoplay.start(); } catch {}
            }, 500);
          }}
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1400: { slidesPerView: 3 },
          }}
          effect="coverflow"
          coverflowEffect={{
            rotate: 25,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Autoplay, Navigation]}
          className="mySwiper"
        >
          {certificates.map((cert, index) => (
            <SwiperSlide
              key={index}
              className="certificate-slide flex justify-center items-center"
              style={{ width: "300px", height: "380px" }}
            >
              <img
                src={cert.img}
                alt={cert.title}
                className="w-full h-full object-contain rounded-xl shadow-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Certificates;
