"use client";
import DefaultHeader from "@/app/components/common/DefaultHeader";
import HeaderSidebar from "@/app/components/common/HeaderSidebar";
import MobileMenu from "@/app/components/common/MobileMenu";
import LoginSignupModal from "@/app/components/common/login-signup";
import BreadCrumb from "@/app/components/listing/listing-single/BreadCrumb";
import ShareMeta from "../../../components/listing/listing-single/ShareMeta";
import ProductGallery from "@/app/components/listing/listing-single/listing-single-v1/ProductGallery";
import Overview from "@/app/components/listing/listing-single/Overview";
import Descriptions from "@/app/components/listing/listing-single/Descriptions";
import Features from "@/app/components/listing/listing-single/Features";
import Map from "@/app/components/common/Map";
import ConsumerReviews from "@/app/components/listing/listing-single/ConsumerReviews";
import ReviewBox from "@/app/components/listing/listing-single/ReviewBox";
import ContactSeller from "@/app/components/listing/listing-single/sidebar/ContactSeller";
import SellerDetail from "@/app/components/listing/listing-single/sidebar/SellerDetail";
import Link from "next/link";
import ReleatedCar from "@/app/components/listing/listing-single/ReleatedCar";
import Footer from "@/app/components/Footer";
import { useEffect, useState } from "react";
import listingCar from "@/data/listingCar";
import { usePathname } from "next/navigation";

export const metadata = {
  title: "Details || Niljyoti",
  description: `Niljyoti - Car rent service provider.`,
};

const Details = ({ params }) => {
  const id = params.id;
  const path = usePathname();

  const car = listingCar.find((car) => car.id == id);
  return (
    <div className="wrapper">
      {/* Main Header Nav For Mobile */}
      <MobileMenu />
      {/* End Main Header Nav For Mobile */}

      {/* Agent Single Grid View */}
      <section className="our-agent-single bgc-f9 pb90 mt70-992 pt30">
        <div className="container">
          <div className="row mb30">
            <div className="col-lg-7 col-xl-8">
              <div className="single_page_heading_content">
                <div className="car_single_content_wrapper">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a href="/our-cars">Our Cars</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Details
                    </li>
                  </ol>
                  <div className="pt25">
                    <h2 className="title flex-end">{car.title}</h2>
                    <p className="para">
                      2.0h T8 11.6kWh Polestar Engineered Auto AWD (s/s) 5dr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/* End .col-lg-7 */}

            <div className="col-lg-5 col-xl-4">
              <div className="single_page_heading_content text-start text-lg-end">
                <div className="share_content">
                  <ShareMeta />
                </div>
                <div className="price_content">
                  <div className="price mt60 mb10 mt10-md">
                    <h3>₹{car.price}</h3>
                  </div>
                </div>
              </div>
            </div>
            {/* End col-lg-5 */}
          </div>
          {/* End .row */}

          <div className="row">
            <div className="col-lg-8 col-xl-8">
              <ProductGallery slides={car.slide} />
              {/* End Car Gallery */}

              <div className="opening_hour_widgets p30 mt30">
                <div className="wrapper">
                  <h4 className="title">Overview</h4>
                  <Overview carData={car} />
                </div>
              </div>
              {/* End opening_hour_widgets */}

              <div className="listing_single_description mt30">
                <h4 className="mb30">
                  Description{" "}
                  <span className="float-end body-color fz13">ID #9535</span>
                </h4>
                <Descriptions />
              </div>
              {/* End car descriptions */}

              <div className="user_profile_service">
                <Features />
                <hr />
                <div className="row">
                  <div className="col-lg-12">
                    <a className="fz12 tdu color-blue" href="#">
                      View all features
                    </a>
                  </div>
                </div>
              </div>
              {/* End user profile service */}

              <div className="user_profile_location">
                <h4 className="title">Location</h4>
                <div className="property_sp_map mb40">
                  <div className="h400 bdrs8 map_in" id="map-canvas">
                    <Map />
                  </div>
                </div>
                <div className="upl_content d-block d-md-flex">
                  <p className="float-start fn-sm mb20-sm">
                    <span className="fas fa-map-marker-alt pr10 vam" />
                    3891 Ranchview Dr. Richardson, California 62639
                  </p>
                  <button className="btn location_btn">Get Direction</button>
                </div>
              </div>
              {/* End Location */}

              <ConsumerReviews />
              {/* End ConsumerReviews */}

              <ReviewBox />
              {/* End ReviewBox */}
            </div>
            {/* End .col-xl-8 */}

            <div className="col-lg-4 col-xl-4">
              <div className="sidebar_seller_contact">
                <SellerDetail />
                <h4 className="mb30">Contact For Rent</h4>
                <ContactSeller />
              </div>

              {/* End .col-xl-4 */}
            </div>
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}
      </section>
      {/* End Agent Single Grid View */}

      {/* Car For Rent */}
      <section className="car-for-rent">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="main-title text-center text-md-start mb10-520">
                <h2 className="title">Releated Best Car</h2>
              </div>
            </div>
            {/* End .col-sm-6 */}

            <div className="col-sm-6">
              <div className="text-center text-md-end mb30-520">
                <Link href="/our-cars" className="more_listing">
                  Show All Cars
                  <span className="icon">
                    <span className="fas fa-plus" />
                  </span>
                </Link>
              </div>
            </div>
            {/* End .col-sm-6 */}
          </div>
          {/* End .row */}

          <div className="col-lg-12">
            <div
              className="home1_popular_listing home3_style"
              data-aos-delay="100"
            >
              <div className="listing_item_4grid_slider nav_none">
                <ReleatedCar />
              </div>
            </div>
          </div>
          {/* End .col-lg-12 */}
        </div>
        {/* End .container */}
      </section>
      {/* End Car For Rent */}

      {/* Our Footer */}
      <Footer />
      {/* End Our Footer */}

      {/* Modal */}
      <div
        className="sign_up_modal modal fade"
        id="logInModal"
        data-backdrop="static"
        data-keyboard=""
        tabIndex={-1}
        aria-hidden="true"
      >
        <LoginSignupModal />
      </div>
      {/* End Modal */}
    </div>
    // End wrapper
  );
};

export default Details;
