import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./styles.module.css";
import Link from "next/link";

function Contact() {
  return (
    <div>
      <Navbar />

      <div className={styles.breadCrumb}>
        <div className={styles.name}>Contact</div>
        <div className={styles.parent}>
          <Link href="/">Home</Link>
          <i>&gt;</i>
          <span>Contact</span>
        </div>
      </div>

      <Hero />
      <Footer />
    </div>
  );
}

export default Contact;
