import Layout from "../hocs/Layout";
import { IoClose, IoSearch } from "react-icons/io5";
import ProductList from "../components/ProductList";
import { mockupProducts } from "../data";
import { FormEvent, SyntheticEvent, useState } from "react";
import { ProductType } from "../types";

const Motivos = () => {
  const [input, setInput] = useState<string>();
  const [filter, setFilter] = useState<string>();
  const [products, setproducts] = useState<ProductType[]>(mockupProducts);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilter(input);
  };

  const getProducts = () => {
    if (!filter) return products;

    return products.filter((product) => {
      console.log(product.motivos, filter);
      return product.motivos.includes(filter.toLowerCase());
    });
  };

  return (
    <Layout title="motivos ">
      <section className=" px-8 sm:py-8 bg-blue-100 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <form className="flex mr-4" onSubmit={(e) => handleSubmit(e)}>
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0  focus:bg-white focus:border-mainBlue focus:outline-none rounded-l-2xl h-10"
              placeholder="Buscar.."
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="px-4 text-white bg-mainBlue rounded-r-2xl ">
              <IoSearch className="w-4 h-4" />
            </button>
          </form>
          {filter && (
            <div
              className="px-4 py-1 rounded-3xl bg-mainBlue text-blue-100 uppercase font-bold text-sm flex items-center cursor-pointer"
              onClick={() => setFilter("")}
            >
              {filter}
              <span className="ml-2 h-4 w-4">
                <IoClose />
              </span>
            </div>
          )}
        </div>
        <ProductList products={getProducts()} />
      </section>
    </Layout>
  );
};

export default Motivos;
