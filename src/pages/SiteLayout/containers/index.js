import React from "react";
import style from "./index.module.css";

import { Header } from "../components/common/Header";
import { PresentationPage } from "../components/Presentation/Presentation";
import { VeterinarianPage } from "../components/Veterinarian/Veterinarian";
import { HowItWorks } from "../components/HowItworks/HowItworks";
import { About } from "../components/AboutUs/AboutUs";
import { Blog } from "../components/Blog/Blog";
import { Sponsors } from "../components/Sponsors/Sponsors";
import { Footer } from "../components/Footer/Footer";

export const Layout = () => {
  return (
    <div className={style.site}>
      <Header />
      <PresentationPage />
      <VeterinarianPage />
      <HowItWorks />
      <About />
      <Blog />
      <Sponsors />
      <Footer />
    </div>
  );
};
