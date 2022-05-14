import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

type LayoutProps = {
  children: React.ReactNode;
  title: String;
  home?: boolean;
};

const Layout = ({ children, title, home }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className="bg-blue-100 bg-emerald-100 bg-yellow-100 hidden"></div>
      {home ? null : <Navbar />}
      {/* className={home ? "" : "pt-28"} */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
