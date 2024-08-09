import React, { useState, useEffect } from 'react';
import Banner from "./utils/Banner";
import CarouselRotate from "./utils/CarouselRotate";
import BelowBanner from "./utils/BelowBanner";
import "./home.css";
import Footer from '../pages/components/Footer'
import EventGallary from '../pages/components/EventGallary'
const Home = () => {


  return (
    <div className="parallex">
      <Banner />
      <div className="wrapper">
        <BelowBanner />
        <div className="below-banner-2">
          {/* Additional content */}
        </div>
        {/* <EventGallary /> */}
        <CarouselRotate />

        <Footer />
      </div>
    </div>
  );
};

export default React.memo(Home);
