import { useState, useEffect } from "react";
import AboutUs from "../Aboutus/AboutUs";
import HomePage from "../Home/HomePage";
import Footer from "./Footer";
import ContactUs from "./ContactUs";

export default function Indexpage() {

  return (
    <div>
      <HomePage />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}
