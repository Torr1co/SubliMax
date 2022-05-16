import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
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
