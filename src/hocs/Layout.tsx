import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { IoPersonCircleOutline } from "react-icons/io5";

type LayoutProps = {
  children: React.ReactNode;
  title: String;
  home?: boolean;
  admin?: boolean;
};

const Layout = ({ children, title, home, admin }: LayoutProps) => {
  admin;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-blue-100 bg-emerald-100 bg-yellow-100 hidden"></div>
      {home ? null : <Navbar admin={admin}/>}
      {/* className={home ? "" : "pt-28"} */}
      <main className="overflow-hidden">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
