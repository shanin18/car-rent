"use client";
import menuItems from "@/data/menuItems";
import { usePathname } from "next/navigation";

const MainMenu = () => {
  const path = usePathname();

  return (
    <>
      {menuItems.map((menuItem, index) => (
        <li className="dropitem" key={index}>
          <a
            className={menuItem.path === path && "active"}
            href={menuItem.path}
          >
            <span className="title">{menuItem.label}</span>
          </a>
        </li>
      ))}
    </>
  );
};

export default MainMenu;
