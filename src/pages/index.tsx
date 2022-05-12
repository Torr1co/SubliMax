import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Layout from "../hocs/Layout";
const IndexPage: NextPage = () => {
  console.log(process.env.NODE_ENV);
  return (
    <Layout title="SubliMax">
      <Hero />
    </Layout>
  );
};

export default IndexPage;
