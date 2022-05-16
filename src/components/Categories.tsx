import Image from "next/image";
import { cupCategories } from "../data";
import styles from "../styles/Categories.module.css";
import { IoArrowForwardOutline } from "react-icons/io5";
import Link from "next/link";
const Categories = () => {
  return (
    <section className="px-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto sm:py-16 lg:max-w-none">
          <h2 className={`text-3xl font-extrabold text-gray-900 `}>
            Nuestras tazas a{" "}
            <span className={`relative ${styles["title"]}`}>estampar </span>
          </h2>

          <div
            className="mt-6 grid gap-6"
            style={{
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            }}
          >
            {cupCategories.map((cat) => (
              <Link href="/motivos" passHref key={cat.type}>
                <div className="group relative cursor-pointer ">
                  <div
                    className={` transition-all duration-300 ease-in-out relative w-full h-80  rounded-lg  card sm:aspect-w-2 sm:aspect-h-1 sm:h-64 lg:aspect-w-1 lg:aspect-h-1 items-center justify-center flex ${styles["card"]}`}
                  >
                    <div className="relative h-3/4 w-3/4">
                      <Image
                        layout="fill"
                        src={cat.img}
                        alt="Collection of four insulated travel bottles on wooden shelf."
                        className="object-center object-cover"
                      />
                    </div>

                    <p
                      className={`text-base font-medium flex items-center text-gray-800 ${styles["textAnimation"]} absolute bottom-2 left-4 gray`}
                    >
                      {cat.type}
                      <span className={styles["arrow"]}>
                        <IoArrowForwardOutline />
                      </span>
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;
