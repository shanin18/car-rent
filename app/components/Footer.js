"use client"
import React from "react";
import "@/public/css/footer.css";
import Social from "./home-2/footer/Social";
import Image from "next/image";
import { usePathname } from "next/navigation";
const Footer = () => {
  const path = usePathname()

  return (
    <footer className={path === "/our-cars" || path === "/about-us" || path === "/contact" ? "footer-bg" : ""}>
      <div className={`footer-content container ${path === "/our-cars" || path === "/about-us" || path === "/contact" ? "" : "footer-bg radius"}`}>
      <Image
        width={120}
        height={45}
        className="logo1 img-fluid mb20"
        src="https://i.ibb.co/gDjMYp3/logo-2.png"
        alt="logo"
      />
        <div className="footer-details">
          <div className="footer-section">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              ipsam cupiditate at voluptate, aliquam sapiente delectus quos quod
              dicta deserunt ipsa, voluptatum modi.
            </p>
            <div className="footer_social_widget home2 mt20">
              <Social />
            </div>
          </div>
          <div className="footer-section">
            <h3>OFFICE</h3>
            <p>
              India —<br />
              93, A.K. Road, Agartala, India,
              <br />
              Tripura
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Number</h3>
            <p>094364 56088</p>
          </div>
          <div className="footer-section">
            <h5 className="title mb20">KEEP IN TOUCH</h5>
            <form className="footer_mailchimp_form">
              <div className="wrapper">
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email..."
                    required
                  />
                  <button type="submit">GO</button>
                </div>
              </div>
            </form>
            <p>Get latest updates and offers.</p>
          </div>
        </div>

        <div className="container mt20 mb20">
          <hr className="hr" />
        </div>

        <div className="copyright container">
          <div>
            <p>
              <a href="/">
                <span> Niljyoti</span>
              </a>
              © {new Date().getFullYear()}. All Rights Reserved.
            </p>
          </div>
          <div>
            <ul className="copyright-section">
              <li>
                <a href="/">Home</a>
              </li>
              -
              <li>
                <a href="/our-cars">Our Cars</a>
              </li>
              -
              <li>
                <a href="/about-us">About Us</a>
              </li>
              -
              <li>
                <a href="/contact">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
