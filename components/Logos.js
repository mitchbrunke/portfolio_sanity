import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../styles/Logos.module.css";
import Image from "next/image";
import { sanityClient, urlFor } from "../lib/sanity";

const LogoSlider = ({ logosData }) => {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    slidesPerView: 2,
    loop: true,
    initial: 0,
    duration: 1000,
    dragStart: () => {
      setPause(true);
    },
    dragEnd: () => {
      setPause(false);
    },
  });

  useEffect(() => {
    sliderRef.current.addEventListener("mouseover", () => {
      setPause(true);
    });
    sliderRef.current.addEventListener("mouseout", () => {
      setPause(false);
    });
    timer.current = setInterval(() => {
      if (!pause && slider) {
        slider.next();
      }
    }, 3000);
    return () => {
      clearInterval(timer.current);
    };
  }, [sliderRef, pause, slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      {logosData.map((logo) => (
        <div
          className={`${["keen-slider__slide"]} ${styles.slide} ${[
            "logo_slide",
          ]}`}
          key={logo.company}
        >
          <img src={urlFor(logo.image).width(500).height(500).url()} alt="" />
          {/* <style jsx>{`
            .logo_slide {
              background: url(${urlFor(logo.image)
                .width(600)
                .height(600)
                .url()});
              background-position: center;
              background-size: cover;
            }
          `}</style> */}

          <h3>{logo.company}</h3>
        </div>
      ))}
    </div>
  );
};

export default LogoSlider;
