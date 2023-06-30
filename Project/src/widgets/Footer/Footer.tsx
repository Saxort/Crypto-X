import React from "react";
import classes from "./Footer.module.scss";
import VK from "../../../public/free-icon-vk-2111828.png";
import Telegram from "../../../public/free-icon-telegram-4701496.png";
import Github from "../../../public/free-icon-github-2111432.png";
const Footer = () => {
  const links = [
    {
      path: VK,
      link: "https://vk.com/tegneshumresh",
    },
    {
      path: Telegram,
      link: "https://t.me/Saxort",
    },
    {
      path: Github,
      link: "https://github.com/Saxort",
    },
  ];
  
  return (
    <div style={{ width: "100vw", height: "21vh" }}>
      <div className={classes.contaier}>
        <div className={classes.icons}>
          {links.map(({ path, link }) => (
            <a href={link}>
              <img className={classes.icon} src={path} />
            </a>
          ))}
          
        </div>
        <div className={classes.desc}>
          © 2023 Interactive Calendar App. All Rights Reserved (0_0). Created by
          Kirill Kolosvetov
        </div>
      </div>
    </div>
  );
};

export default Footer;
