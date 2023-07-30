"use client";
import menuItems from "@/data/menuItems";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ProSidebarProvider, Sidebar, Menu, MenuItem } from "react-pro-sidebar";

const MobileMenu = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 71) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const socialLinks = [
    {
      name: "Facebook",
      icon: "fab fa-facebook-f",
      link: "#",
    },
  ];

  const contactInfo = [
    {
      icon: "flaticon-map",
      text: "93, A.K. Road, Agartala, India, Tripura",
    },
    {
      icon: "flaticon-phone-call",
      text: "094364 56088",
    },
  ];

  return (
    <>
      <div className="stylehome1 h0">
        <div className={`mobile-menu ${fixed ? "shadow fixed" : undefined}`}>
          <div className="header stylehome1">
            <div className="mobile_menu_bar">
              <a
                className="menubar"
                data-bs-toggle="offcanvas"
                data-bs-target="#mobileMenu"
                aria-controls="mobileMenu"
              >
                <small>Menu</small>
                <span />
              </a>
            </div>
            {/* End mobile_menu_bar */}

            <div className="mobile_menu_main_logo">
              <Image
                width={80}
                height={45}
                className="logo1 img-fluid"
                src="https://i.ibb.co/gDjMYp3/logo-2.png"
                alt="logo"
              />
            </div>
            {/* End .mobile_menu_main_logo */}
          </div>
        </div>
        {/* /.mobile-menu */}
      </div>
      {/* End mobile menu header */}

      {/* start mobile sidebar menu */}
      <div
        className="offcanvas offcanvas-end mobile_menu-canvas"
        tabIndex="-1"
        id="mobileMenu"
        aria-labelledby="mobileMenuLabel"
        data-bs-scroll="true"
      >
        <div className="offcanvas-body">
          <div className="pro-header">
            <Link href="/">
              <Image
                width={80}
                height={45}
                className="logo1 img-fluid"
                src="https://i.ibb.co/gDjMYp3/logo-2.png"
                alt="logo"
              />
            </Link>
            <div
              className="fix-icon"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              <i className="fa-light fa-circle-xmark"></i>
            </div>
          </div>
          {/* End pro-header */}

          {/* mobile menu items start */}
          <ProSidebarProvider>
            <Sidebar
              width="100%"
              backgroundColor="#09adf2"
              className="my-custom-class"
            >
              <Menu>
                <div className="mobile-list">
                  {menuItems.map((menuItem, index) => (
                    <li className="dropitem" key={index}>
                      <a className="color-white pt3 pb3" href={menuItem.path}>
                        <span className="title">{menuItem.label}</span>
                      </a>
                    </li>
                  ))}
                </div>
              </Menu>
            </Sidebar>
          </ProSidebarProvider>
          {/* mobile menu items end */}

          <div className="pro-footer mm-add-listing">
            <div className="border-none">
              <div className="mmenu-contact-info">
                {contactInfo.map((info, index) => (
                  <span className="phone-num" key={index}>
                    <i className={info.icon} /> <a href="#">{info.text}</a>
                  </span>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((link, index) => (
                  <a href={link.link} key={index}>
                    <span className={link.icon} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          {/* End mm-add-listng */}
        </div>
        {/* End offcanvas-body */}
      </div>
      {/* End mobile sidebar menu */}
    </>
  );
};

export default MobileMenu;
