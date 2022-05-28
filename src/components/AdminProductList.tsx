import Image from "next/image";
import { useState } from "react";
import { IoClose, IoEllipsisHorizontal } from "react-icons/io5";
import styles from "../styles/ProductList.module.css";
import { ProductType } from "../utils/types";

const ProductList = ({
  products,
  url,
  setMotives,
}: {
  products: ProductType[];
  url: string;
  setMotives: React.Dispatch<React.SetStateAction<ProductType[]>>;
}) => {
  console.log(products);
  const [error, setError] = useState<number>(0);
  const handleDelete = async (id: number) => {
    const res = await fetch(url + "/" + id, {
      method: "delete",
    });

    if (res.status !== 200) return setError(id);

    setMotives((motives) => motives.filter((motive) => motive._id !== id));
    setError(0);
  };

  return (
    <ul
      className={`${styles["productContainer"]} grid gap-10 place-items-center`}
    >
      {products?.map((product) => (
        <div
          key={product._id}
          className={`"shadow-xl border-2 border-gray-100 px-4"
           w-full  bg-white rounded-lg overflow-hidden`}
        >
          <div className={"relative h-72"}>
            <Image
              src={product.img}
              layout="fill"
              objectFit={"contain"}
              alt={product.motives}
            />
          </div>
          <div className="text-gray-900 ml-4 pb-4 flex flex-col gap-4">
            <p>{product.motives}</p>
            {error === product._id && (
              <span className="text-red-500 text-sm underline underline-offset-2">
                no se pudo eliminar el elemento
              </span>
            )}
            <div className="flex">
              <button
                onClick={() => handleDelete(product._id)}
                className="bg-indigo-600 rounded-md cursor-pointer  py-2 px-4 text-white"
              >
                Eliminar
              </button>
            </div>
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
