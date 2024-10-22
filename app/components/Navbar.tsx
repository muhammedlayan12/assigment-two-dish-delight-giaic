"use client";

import { useState } from "react";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className={styles.navbar}>
        <div className={styles.name}>Dish <span>Delight</span></div>
        <div className={styles.hamburger} onClick={toggleMenu}>
          &#9776; 
        </div>
        <ul className={`${styles.navigation} ${isOpen ? styles.open : ""}`}>
          <div className={styles.closeButton} onClick={toggleMenu}>
            &times; 
          </div>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/about">About</Link></li>
          {/* <li><Link href="">Services</Link></li>
          <li><Link href="">Menu</Link></li> */}
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
