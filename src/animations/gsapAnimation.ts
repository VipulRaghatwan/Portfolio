import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const animatePage = () => {
  // Fade-up for all elements with class .fade-up
  gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Fade-left for elements with class .fade-left
  gsap.utils.toArray<HTMLElement>(".fade-left").forEach((el) => {
    gsap.from(el, {
      x: -50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Fade-right for elements with class .fade-right
  gsap.utils.toArray<HTMLElement>(".fade-right").forEach((el) => {
    gsap.from(el, {
      x: 50,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });

  // Scale-up effect
  gsap.utils.toArray<HTMLElement>(".scale-up").forEach((el) => {
    gsap.from(el, {
      scale: 0.8,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });
  });
};
