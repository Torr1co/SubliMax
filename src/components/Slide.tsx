import styles from "../styles/Slider.module.css";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

const Slide = ({ bg, title, highlight, text, img, main }) => {
  const [loaded, setLoaded] = useState(false);
  console.log(bg);
  return (
    <div
      className={`flex text-black ${bg} gap-8  px-28 py-16 w-screen h-full`}
      key={title}
    >
      <div
        className={`w-1/2 ${!loaded && main && "opacity-0"} ${
          loaded && main && styles["slideDown"]
        }`}
      >
        <h1 className="font-main font-bold text-5xl">
          {title}
          <br />
          <span className="text-mainBlue">{highlight}</span>
        </h1>
        <p className="mt-10 text-2xl pr-16 font-medium">{text}</p>
        <Link href="/motivos">
          <a>
            <button className="bg-black mt-10 text-white py-6 px-12 font-bold rounded-full font-main text-medium hover:scale-110 duration-300">
              Explorar Mas
            </button>
          </a>
        </Link>
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
            d="M60.8,-29.3C73.1,-13.8,73.4,14.4,61.3,31.7C49.2,49.1,8.6,55.6,-1.9,56.7C-28.4,57.8,-56.8,53.5,-66.2,37.7C-75.6,21.9,-66,-5.3,-51.8,-21.9C-37.6,-38.4,-18.8,-44.3,2.7,-45.9C24.3,-47.5,48.5,-44.7,60.8,-29.3Z"
            transform="translate(85 90)"
          />
        </svg>
        <div
          className={`relative rounded-lg w-full h-full overflow-hidden ${
            !loaded && main && "opacity-0"
          } ${loaded && main && styles["slideTopRight"]} `}
        >
          <Image
            src={img}
            layout="fill"
            alt="Header img"
            className="object-center object-cover w-full h-full"
            onLoad={() => main && setLoaded(true)}
            priority={main ? false : true}
          />
        </div>
      </div>
    </div>
  );
};

export default Slide;
