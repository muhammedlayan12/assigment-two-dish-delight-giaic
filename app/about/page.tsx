import Link from "next/link";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import styles from "./styles.module.css";

function About() {
  return (
    <div>
      <Navbar />

      <div className={styles.breadCrumb}>
        <div className={styles.name}>About</div> 
        <div className={styles.parent}>
          <Link href="/">Home</Link>
          <i>&gt;</i>
          <span>About</span>
        </div>
      </div>

      <Hero />
      <Footer />
    </div>
  );
}

export default About;