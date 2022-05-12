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
      {home ? null : <Navbar />}
      {/* className={home ? "" : "pt-28"} */}
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
