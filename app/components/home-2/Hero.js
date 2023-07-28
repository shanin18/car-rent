"use client";
import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  const carSlides = [
    {
      image: "/images/home/WagonR.webp",
      title: "Waygonr",
      price: 800,
    },
    {
      image: "/images/home/dzire.webp",
      title: "Dzire",
      price: 1000,
    },
    {
      image: "/images/home/Skorpio.webp",
      title: "Scorpio",
      price: 1300,
    },
    {
      image: "/images/home/ertiga.webp",
      title: "Ertiga",
      price: 1200,
    },
    {
      image: "/images/home/innova.webp",
      title: "Innova",
      price: 1800,
    },
  ];

  return (
    <div className="main-banner-wrapper home2_main_slider mb30-md">
      <div className="banner-style-one">
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          modules={[Navigation]}
          navigation={{
            nextEl: ".right-btn",
            prevEl: ".left-btn",
          }}
        >
          {carSlides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="slide slide_image"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  height: "750px",
                  backgroundColor: "rgba(0, 0, 0, 0.4)",
                  backgroundBlendMode:"multiply"
                }}
              >
                <div className="container">
                  <div className="row home-content-home2-style">
                    <div className="col-lg-12 p0">
                      <h2 className="banner-title">
                        <small>2023</small> <br /> {slide.title}
                      </h2>
                      <h3 className="banner_top_title text-thm d-flex align-items-baseline">
                        <span className="aminated-object1">
                          <Image
                            width={110}
                            height={14}
                            style={{
                              objectFit: "contain",
                            }}
                            priority
                            className="objects"
                            src="/images/home/title-bottom-border.svg"
                            alt="border image"
                          />
                        </span>
                        <span>₹{slide.price}</span>
                        <small className="text-white d-inline-block ms-2">
                          / 10Hrs
                        </small>
                      </h3>
                      <Link
                        href="/listing-single-v1"
                        className="btn banner-btn"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}

          {/* start navigation  */}
          <div className="carousel-btn-block banner-carousel-btn">
            <span className="carousel-btn left-btn">
              <i className="flaticon-left-arrow left" />
            </span>
            <span className="carousel-btn right-btn">
              <i className="flaticon-right-arrow right" />
            </span>
          </div>
          {/* End navigation */}
        </Swiper>
      </div>
    </div>
  );
};

export default Hero;
