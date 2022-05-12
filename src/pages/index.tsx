import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import Navbar from "../components/Navbar";
import Header from "../components/Header";
import Layout from "../hocs/Layout";
const IndexPage: NextPage = () => {
  return (
    <Layout title="SubliMax">
      <Header />
    </Layout>
  );
};

export default IndexPage;
