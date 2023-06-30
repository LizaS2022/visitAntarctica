import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import InquirerForm from "./inquiryForm/InquiryForm.js";
import Tours from "./tour/Tour";
import Videos from "./Videos/Video";
import "bootstrap/dist/css/bootstrap.min.css";

const Main = () => {
  return (
    <div>
      <Navbar />
      <Tours />
      <Videos />
      <InquirerForm />
      <Footer />
    </div>
  );
};

export default Main;
