"use client";
import Link from "next/link";
import MainMenu from "./MainMenu";
import Image from "next/image";
import { useEffect, useState } from "react";

const DefaultHeader = () => {
  const [fixed, setFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 102) {
        setFixed(true);
      } else {
        setFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
  }, []);

  const user = false;

  return (
    <header
      className={`header-nav menu_style_home_one home3_style main-menu ${fixed && "fixed  shadow"}`}
    >
      {/* Ace Responsive Menu */}
      <nav>
        <div className="container posr">
          {/* Menu Toggle btn*/}
          <div className="menu-toggle">
            <button type="button" id="menu-btn">
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
          </div>
          <Link href="/" className="navbar_brand float-start dn-md pt10 pb10">
            <Image
              width={130}
              height={45}
              className="logo1 img-fluid"
              src="https://i.ibb.co/gDjMYp3/logo-2.png"
              alt="logo"
            />
          </Link>

          {/* Responsive Menu Structure*/}
          <ul
            // id="respMenu"
            className="ace-responsive-menu text-end"
            data-menu-style="horizontal"
          >
            <MainMenu />
            {user ? (
              <li className="add_listing">
                <Link href="/add-listings">+ Add Listing</Link>
              </li>
            ) : undefined}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default DefaultHeader;
