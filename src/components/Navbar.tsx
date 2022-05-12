import Image from "next/image";
import Link from "next/link";
const Navbar = () => {
  return (
    <nav className="flex justify-between  px-16 pr-28  w-full bg-white z-10 ">
      <div className="relative h-24 w-52 ">
        <Image
          layout="fill"
          src="/logo.jpeg"
          alt="logo sublimax"
          objectFit="contain"
        />
      </div>

      <ul className="items-center flex gap-8 font-semibold text-gray-800">
        <li>
          <Link href="https://www.instagram.com/sublimax.mgd/" target="_blank">
            <a>Instagram</a>
          </Link>
        </li>
        <li>
          <Link href="#">
            <a>Sobre Mi</a>
          </Link>
        </li>
        <li>
          <button className="bg-mainBlue  text-white py-3 px-6 font-bold rounded-full font-mont hover:scale-110 text-sm before:duration-300">
            Explorar mas
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
