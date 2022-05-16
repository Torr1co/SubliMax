import Image from "next/image";
import styles from "../styles/ProductList.module.css";
type ProductListTypes = {
  products: ProductType[];
};
type ProductType = {
  id: string;
  title: string;
  img: string;
  motivos: string[];
};

const ProductList = ({ products }: ProductListTypes) => {
  return (
    <ul
      className={`${styles["productContainer"]} grid gap-10 place-items-center`}
    >
      {products.map((product) => (
        <div
          key={product.id}
          className="relative w-full h-72 bg-white rounded-lg"
        >
          <Image
            src={product.img}
            layout="fill"
            objectFit="contain"
            alt={product.title}
          />
        </div>
      ))}
    </ul>
  );
};

export default ProductList;
