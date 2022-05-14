import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Layout from "../hocs/Layout";
import Categories from "../components/Categories";
const IndexPage: NextPage = () => {
  return (
    <Layout title="SubliMax">
      <Slider />
      <Categories />
    </Layout>
  );
};

export default IndexPage;
