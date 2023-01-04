import React from "react";
import Layout from "../common/layout";
import './notFound.css';

const NotFound = () => {
  return (
    <Layout>
      <div className="not__found">
      <h4>The page you are looking for doesn't exist.</h4>
     </div>
    </Layout>
  );
};

export default NotFound;
