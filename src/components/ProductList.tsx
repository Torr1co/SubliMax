import Image from "next/image";
import { IoClose, IoEllipsisHorizontal } from "react-icons/io5";
import styles from "../styles/ProductList.module.css";
import { ProductType } from "../utils/types";

const ProductList = ({ products }: { products: ProductType[] }) => {
  return (
    <ul
      className={`${styles["productContainer"]} grid gap-10 place-items-center`}
    >
      {products?.map((product) => (
        <div
          key={product._id}
          className={" w-full  bg-white rounded-lg overflow-hidden"}
        >
          <div className={"relative h-72"}>
            <Image
              src={product.img}
              layout="fill"
              objectFit={"contain"}
              alt={product.motives}
            />
          </div>
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
