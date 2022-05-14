import { useState } from "react";
import { IoArrowBackOutline, IoArrowForwardOutline } from "react-icons/io5";
import { slider } from "../mockupSlider";
import Slide from "./Slide";

const Arrow = ({
  direction,
  ...event
}: {
  direction: String;
  onClick: any;
}) => {
  return (
    <div
      className={`h-16 w-16 bg-blue-600 rounded-full flex justify-center items-center absolute top-0 bottom-0 m-auto  ${
        direction == "left" ? "left-4" : "right-4"
      } z-10 opacity-70 cursor-pointer`}
      {...event}
    >
      {direction == "left" ? (
        <IoArrowBackOutline color="white" className="h-8 w-8" />
      ) : (
        <IoArrowForwardOutline color="white" className="h-8 w-8" />
      )}
    </div>
  );
};

const Hero = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const maxIndex = slider.length - 1;
  function handleClick(direction: String) {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : maxIndex);
    } else {
      setSlideIndex(slideIndex < maxIndex ? slideIndex + 1 : 0);
    }
  }

  return (
    <section className="h-screen overflow-hidden relative flex w-screen ">
      <Arrow direction="left" onClick={() => handleClick("left")} />
      <div
        className="h-full flex transition-all duration-1000 ease-in-out"
        style={{ transform: `translateX(${slideIndex * -100}vw)` }}
      >
        {slider.map((slide) => (
          <Slide key={slide.title} {...slide} />
        ))}
      </div>

      <Arrow direction="right" onClick={() => handleClick("right")} />
    </section>
  );
};

export default Hero;
