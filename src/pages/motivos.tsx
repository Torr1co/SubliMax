import Layout from "../hocs/Layout";
import { IoClose, IoSearch } from "react-icons/io5";
import ProductList from "../components/ProductList";
import { FormEvent, useState } from "react";
import { ProductType } from "../utils/types";

interface MotiveProps {
  motives: ProductType[];
}
const Motivos = ({ motives }: MotiveProps) => {
  const [input, setInput] = useState<string>();
  const [filter, setFilter] = useState<string>();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilter(input);
  };

  const getMotives = () => {
    if (!filter) return motives;

    return motives.filter((product) => {
      return product.motives.includes(filter.toLowerCase());
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
        <ProductList products={getMotives()} />
      </section>
    </Layout>
  );
};

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get motives data from API
  const res = await fetch(process.env.API_URL as string);
  const motives = await res.json();

  // return props
  return {
    props: { motives },
  };
}

export default Motivos;
