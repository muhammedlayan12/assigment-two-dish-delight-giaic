import styles from "../styles/Hero.module.css";
import homeimg from "../images/home.png";
import Image from "next/image";

function Hero() {
  return (
    <div>
        <section className={styles.hero}>
            <div className={styles.content}>
                <h1>Tasty food</h1>
                <h2>Try the best food<br/> of
                the week.</h2>
                <button>View Menu</button>
                </div>
                <Image src={homeimg} alt="" />
        </section>
    </div>
  )
}

export default Hero;