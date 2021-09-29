import { useEffect, useState, useRef } from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import styles from "../styles/Home.module.css";
import { sanityClient, urlFor } from "../lib/sanity";

const Slider = ({ heroData }) => {
  const [pause, setPause] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const timer = useRef();
  const [sliderRef, slider] = useKeenSlider({
    initial: 0,
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide);
    },
    loop: true,
    duration: 3000,
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
    }, 7000);
    return () => {
      clearInterval(timer.current);
    };
  }, [sliderRef, pause, slider]);

  return (
    <div className={`${["navigation-wrapper"]} ${styles.sliderContainer}`}>
      <div ref={sliderRef} className={`${["keen-slider"]} `}>
        {heroData.map((project) => (
          <div
            className={`${["keen-slider__slide"]}  ${styles.slide} ${[
              "single_slide",
            ]} `}
            key={project.title}
          >
            <style jsx>{`
              .single_slide {
                background: url(${urlFor(project.hero)
                  .width(1920)
                  .height(1080)
                  .url()});
                background-position: center;
                background-size: cover;
              }
            `}</style>
            <h1>{project.title}</h1>
            <h4>{project.stack}</h4>
          </div>
        ))}
        ;
      </div>

      {slider && (
        <>
          <ArrowLeft
            onClick={(e) => e.stopPropagation() || slider.prev()}
            disabled={currentSlide === 0}
          />
          <ArrowRight
            onClick={(e) => e.stopPropagation() || slider.next()}
            disabled={currentSlide === slider.details().size - 1}
          />
        </>
      )}
    </div>
  );

  function ArrowLeft(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <div
        onClick={props.onClick}
        className={"arrow arrow--left" + disabeld}
        id={styles.left}
      >
        <p>Previous Project</p>
      </div>
    );
  }

  function ArrowRight(props) {
    const disabeld = props.disabled ? " arrow--disabled" : "";
    return (
      <div
        onClick={props.onClick}
        className={"arrow arrow--right" + disabeld}
        id={styles.right}
      >
        <p>Next Project</p>
      </div>
    );
  }
};

export default Slider;
