import React from "react";
// Components
import Banner from "../components/Banner";
import Customers from "../components/Customers";
import Footer from "../components/Footer";
import LatestProducts from "../components/LatestProducts";
// styles
import styles from "../assets/css/Home.module.css";
const Home = () => {
  return (
    <>
      <main className={styles.mainContainer}>
        <Banner />
        <LatestProducts />
        <Customers />
      </main>
      <Footer />
    </>
  );
};

export default Home;
