import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout(props) {
  const { children } = props;

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;