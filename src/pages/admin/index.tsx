import { FormEvent, useState } from "react";
import { IoClose, IoSearch } from "react-icons/io5";
import Login from "../../components/Login";
import AdminProductList from "../../components/AdminProductList";
import Layout from "../../hocs/Layout";
import { ProductType } from "../../utils/types";
import { IoPersonCircleOutline } from "react-icons/io5";
import NewMotive from "../../components/NewMotive";

interface MotiveProps {
  motives: ProductType[];
  url: string;
}

const Admin = ({ motives, url }: MotiveProps) => {
  const [isAdmin, setIsAdmin] = useState<boolean>(true);
  const [input, setInput] = useState<string>();
  const [filter, setFilter] = useState<string>();
  const [motivesList, setMotivesList] = useState<ProductType[]>(motives);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setFilter(input);
  };

  const getMotives = () => {
    if (!filter) return motivesList;

    return motivesList.filter((product) => {
      return product.motives.includes(filter.toLowerCase());
    });
  };

  return isAdmin ? (
    <Layout title="Administrador" admin>
      <NewMotive url={url} setMotives={setMotivesList} />
      <section className="px-16 sm:py-8  sm:px-16 lg:px-16 ">
        <h2 className="mt-6 mb-16 text-center text-3xl font-extrabold text-gray-900">
          Lista de Motivos
        </h2>
        <div className="flex items-center mb-8">
          <form
            className="flex mr-4 relative"
            onSubmit={(e) => handleSubmit(e)}
          >
            <input
              type="text"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 transition ease-in-out m-0  focus:bg-white focus:outline-none rounded-lg h-10"
              placeholder="Buscar."
              onChange={(e) => setInput(e.target.value)}
            />
            <button>
              <IoSearch className="absolute top-2 right-3 text-gray-700 h-5 w-auto" />
            </button>
          </form>
          {filter && (
            <div
              className="px-4 py-1 rounded-3xl text-indigo-400 uppercase font-bold text-sm flex items-center cursor-pointer border-indigo-400 border-2 "
              onClick={() => setFilter("")}
            >
              {filter}
              <span className="ml-2 h-4 w-4">
                <IoClose />
              </span>
            </div>
          )}
        </div>
        <AdminProductList
          products={getMotives()}
          url={url}
          setMotives={setMotivesList}
        />
      </section>
    </Layout>
  ) : (
    <Login />
  );
};

// GET PROPS FOR SERVER SIDE RENDERING
export async function getServerSideProps() {
  // get motives data from API
  const res = await fetch(process.env.API_URL as string);
  console.log("serverSideRes: ", res);
  const motives = await res.json();
  // return props
  return {
    props: { motives, url: process.env.API_URL },
  };
}
export default Admin;
