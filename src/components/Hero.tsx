import Image from "next/image";
import styles from "../styles/Hero.module.css";
import { useState } from "react";
const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  return (
    <section className="h-screen flex px-20 py-16 gap-8 overflow-hidden text-black bg-blue-100">
      <div
        className={`w-1/2 ${!loaded && "opacity-0"} ${
          loaded && styles["slideDown"]
        }`}
      >
        <h1 className="font-mont font-bold text-5xl">
          Las mejores tazas de tus personajes
          <br />
          <span className="text-mainBlue">Preferidos</span>
        </h1>
        <p className="mt-10 text-2xl pr-16 font-medium">
          Desde <span className="font-bold">los Simpson</span> hasta{" "}
          <span className="font-bold">Dragon Ball</span>, el mejor regalo para
          un amigo y{" "}
          <span className="font-bold">pronto vendran personalizadas!</span>
        </p>
        <button className="bg-black mt-10 text-white py-6 px-12 font-bold rounded-full font-mont text-medium hover:scale-110 duration-300">
          Explorar Mas
        </button>
      </div>

      <div className="w-1/2 relative p-16 pt-0 ">
        <svg
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left 0"
          style={{ transform: "scale(1.5)" }}
        >
          <path
            fill="#009AE0"
            d="M60.8,-29.3C73.1,-13.8,73.4,14.4,61.3,31.7C49.2,49.1,24.6,55.6,-1.9,56.7C-28.4,57.8,-56.8,53.5,-66.2,37.7C-75.6,21.9,-66,-5.3,-51.8,-21.9C-37.6,-38.4,-18.8,-44.3,2.7,-45.9C24.3,-47.5,48.5,-44.7,60.8,-29.3Z"
            transform="translate(85 90)"
          />
        </svg>
        <div
          className={`relative w-full h-full ${!loaded && "opacity-0"} ${
            loaded && styles["slideTopRight"]
          } `}
        >
          <Image
            src="/headers/harry.jpeg"
            layout="fill"
            alt="Header img"
            objectFit="contain"
            onLoad={() => setLoaded(true)}
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
