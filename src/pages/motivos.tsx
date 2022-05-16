import Layout from "../hocs/Layout";
import { IoSearch } from "react-icons/io5";
import ProductList from "../components/ProductList";
import { products } from "../data";
const Motivos = () => {
  return (
    <Layout title="motivos ">
      <section className=" px-8 sm:py-8 bg-blue-100 max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <div className="flex ">
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0  focus:bg-white focus:border-mainBlue focus:outline-none rounded-l-2xl"
              placeholder="Buscar.."
            />
            <button className="px-4 text-white bg-mainBlue rounded-r-2xl ">
              <IoSearch className="w-4 h-4" />
            </button>
          </div>
        </div>
        <ProductList products={products} />
      </section>
    </Layout>
  );
};

export default Motivos;
