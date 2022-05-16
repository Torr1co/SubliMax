import Image from "next/image";
import { cupCategories } from "../data";
import styles from "../styles/Categories.module.css";
import { IoArrowForwardOutline } from "react-icons/io5";
const Categories = () => {
  return (
    <section className="px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:py-24  lg:max-w-none">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Nuestras tazas a estampar
          </h2>

          <div
            className="mt-6 grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {cupCategories.map((cat) => (
              <div className="group relative cursor-pointer " key={cat.type}>
                <div
                  className={` transition-all duration-300 ease-in-out relative w-full h-80 bg-white rounded-lg overflow-hidden card sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 items-center justify-center flex ${styles["card"]}`}
                >
                  <div className="relative h-3/4 w-3/4">
                    <Image
                      layout="fill"
                      src={cat.img}
                      alt="Collection of four insulated travel bottles on wooden shelf."
                      className="object-center object-cover"
                    />
                  </div>
                  <div className="bg-gradient-to-b from-transparent to-gray-700 absolute bottom-0 h-3/4 w-full z-10 "></div>
                  <div className="absolute bottom-4 left-4 z-20">
                    <p
                      className={`text-base font-medium flex items-center text-white ${styles["textAnimation"]}`}
                    >
                      {cat.type}
                      <span className={styles["arrow"]}>
                        <IoArrowForwardOutline />
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
