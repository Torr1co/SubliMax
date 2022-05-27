import Image from "next/image";
import Link from "next/link";
import { IoPersonCircleOutline } from "react-icons/io5";
const Navbar = ({ admin }: { admin?: boolean }) => {
  return admin ? (
    <nav className="py-6 flex px-16 justify-between items-center">
      <IoPersonCircleOutline className="h-10 w-auto text-indigo-500" />
      <p className="text-2xl font-extrabold text-indigo-500">
        Panel de Administracion
      </p>
    </nav>
  ) : (
    <nav className="flex justify-between  px-16 pr-28  w-full bg-white z-10 overflow-hidden">
      <Link href="/#" passHref>
        <div className="relative h-24 w-52 cursor-pointer">
          <Image
            layout="fill"
            src="/logo.jpeg"
            alt="logo sublimax"
            objectFit="contain"
            priority
          />
        </div>
      </Link>

      <ul className="items-center flex gap-8 font-semibold text-gray-800">
        <li>
          <Link href="https://www.instagram.com/sublimax.mgd/">
            <a target="_blank">Instagram</a>
          </Link>
        </li>
        <Link href="/motivos" passHref>
          <li>
            <button className="bg-mainBlue  text-white py-3 px-6 font-bold rounded-full font-mont hover:scale-110 text-sm before:duration-300">
              Explorar diseños
            </button>
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
