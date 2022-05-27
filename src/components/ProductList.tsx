import Image from "next/image";
import { IoClose, IoEllipsisHorizontal } from "react-icons/io5";
import styles from "../styles/ProductList.module.css";
import { ProductType } from "../utils/types";

const ProductList = ({
  admin,
  products,
}: {
  admin?: boolean;
  products: ProductType[];
}) => {
  return (
    <ul
      className={`${styles["productContainer"]} grid gap-10 place-items-center`}
    >
      {products.map((product) => (
        <div
          key={product._id}
          className={`${
            admin && "shadow-xl border-2 border-gray-100 px-4"
          } w-full  bg-white rounded-lg overflow-hidden`}
        >
          <div className={"relative h-72"}>
            <Image
              src={product.img}
              layout="fill"
              objectFit={"contain"}
              alt={product.motives}
            />
          </div>
          {admin && (
            <>
              <div className="text-gray-900 ml-4 pb-4 flex flex-col gap-4">
                <p>{product.motives}</p>
                <div className="flex">
                  <div className="bg-indigo-600 rounded-md cursor-pointer  py-2 px-4 text-white">
                    Eliminar
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
