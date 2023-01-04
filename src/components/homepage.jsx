import React from "react";
import Layout from "./common/layout";
import Hero from "./hero/hero";
import FeaturedCollection from "./featuredCollection/featuredCollection";

const HomePage = () => {
  return (
     <Layout>
        <Hero />
        <FeaturedCollection />
      </Layout>
  );
};

export default HomePage;
