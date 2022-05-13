import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Layout from "../hocs/Layout";
const IndexPage: NextPage = () => {
  return (
    <Layout title="SubliMax">
      <Slider />
    </Layout>
  );
};

export default IndexPage;
