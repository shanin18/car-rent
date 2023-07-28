import HeaderSidebar from "@/app/components/common/HeaderSidebar";

import Link from "next/link";
import Header from "../components/home-2/Header";
import MobileMenu from "../components/common/MobileMenu";
import Hero from "../components/home-2/Hero";
import HeroFilter from "../components/common/HeroFilter";
import WhyChoose from "../components/common/WhyChoose";
import FeaturedFilterListing from "../components/home-1/FeaturedFilterListing";
import CarType from "../components/home-2/CarType";
import SaleBanner from "../components/home-2/SaleBanner";
import Footer from "../components/home-2/Footer";
import Testimonial from "../components/common/Testimonial";

export const metadata = {
  title: "Home || Niljyoti",
  description: `Niljyoti - Car rent service provider.`,
};

const Home_2 = () => {

  return (
    <div className="body_home2_style">
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <HeaderSidebar />
      </div>
      {/* Sidebar Panel End */}

      {/* Main Header Nav */}
      <Header />
      {/* End Main Header Nav */}

      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Hero Section */}
      <section className="home-one mt10 mt70-992 p0 bdrs16 bdrs0-md ovh">
        <div className="container-fluid p0">
          <div className="row">
            <div className="col-xl-12">
              <Hero />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}

      {/* How It Works with filter */}
      <section className="whychose_us pb70 pt0">
        <div className="container">
          <div className="row mb20">
            <div className="col-lg-10 m-auto">
              <div className="advance_search_panel home2_style">
                <div className="row">
                  <HeroFilter />
                </div>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row mt100 justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Why Choose Us?</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <WhyChoose />
          </div>
          {/* End .row */}
        </div>
        {/* End container */}
      </section>
      {/* End How It Works with filter */}

      {/* Featured Product  */}
      <section className="featured-product pt0">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="main-title text-center">
                <h2>Our Cars</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-12" data-aos-delay="100" data-aos="fade-up">
              <FeaturedFilterListing />
            </div>
          </div>
          {/* End .row */}

          <div className="row mt20">
            <div className="col-lg-12">
              <div className="text-center">
                <Link href="/our-cars" className="more_listing">
                  Show All Cars{" "}
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Featured Product  */}

      {/* Our CarType  */}
      <section className="popular-listing pb80 pt0 ">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Browse By Type</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row">
            <CarType />
          </div>
          {/* End .row */}
        </div>
      </section>
      {/* End Our CarType  */}

      {/* Our Popular Listing */}
      {/*  */}
      {/* End Our Popular Listing */}

      {/* Sale Banner */}
      <section className="home2_img_divider salesbanner">
        <div className="container">
          <div className="row">
            <SaleBanner />
          </div>
        </div>
      </section>
      {/* End Sale Banner */}

      {/* Our Testimonials */}
      <section className="our-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Testimonials</h2>
              </div>
            </div>
          </div>
          {/* End .row */}

          <div className="row justify-content-center">
            <div className="col-lg-12">
              <Testimonial />
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Our Testimonials */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}
    </div>
    // End .body_home2_style
  );
};

export default Home_2;
