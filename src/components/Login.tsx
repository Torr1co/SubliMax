import { IoPersonCircleOutline } from "react-icons/io5";
import CryptoJs from "crypto-js";
import { FormEvent, useState } from "react";

const AdminPage = ({
  setAdmin,
  url,
}: {
  setAdmin: React.Dispatch<React.SetStateAction<boolean>>;
  url: string;
}) => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(url, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    setLoading(false);

    if (res.status !== 200) return setError(await res.json());
    setAdmin(true);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <IoPersonCircleOutline className="mx-auto h-16 w-auto text-indigo-500" />
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Verifica que eres administrador
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="usuario" className="sr-only">
                Usuario
              </label>
              <input
                id="usuario"
                name="usuario"
                type="usuario"
                autoComplete="usuario"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Usuario"
                onChange={(e) => setUsername(e.target.value)}
                value={username}
              />
            </div>
            <div>
              <label htmlFor="Contraseña" className="sr-only">
                Contraseña
              </label>
              <input
                id="contraseña"
                name="contraseña"
                type="password"
                autoComplete="current-contraseña"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Contraseña"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
            </div>
          </div>

          <div className="flex items-center justify-between"></div>
          <span className="text-red-500 underline underline-offset-2 text-sm">
            {error}
          </span>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              {loading ? "Cargando..." : "Ingresar"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
