import React from "react";
import styles from "./sticker.module.css";
import { Link } from "react-router-dom";
import { HiOutlinePencil, HiOutlineChatAlt } from "react-icons/hi";
import { IoLogoWhatsapp } from "react-icons/io";

const Sticker = () => {
  return (
    <div className={`${styles.sticker}`}>
      <Link to="" className={`${styles.stickerApply}`}>
        <HiOutlinePencil />
        <p>Apply</p>
      </Link>
      <Link to="" className={`${styles.stickerdetails}`}>
        <IoLogoWhatsapp />
      </Link>
      <Link to="" className={`${styles.stickerChat}`}>
        <HiOutlineChatAlt />
      </Link>
    </div>
  );
};

export default Sticker;
