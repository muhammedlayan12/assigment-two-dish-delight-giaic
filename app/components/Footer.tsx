import styles from '../styles/Footer.module.css';
import Image from 'next/image';
import Link from 'next/link';
import paymentimg from "../images/payment.png";

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div>
                    <h3> Dish <span>Delight</span></h3>
                    <p>
                        The customer is at the heart of our unique business model, which includes design.
                    </p>
                    <div className={styles.payment}>
                        <Image src={paymentimg} alt="Payment Methods" />
                    </div>
                </div>
                <div>
                    <h3>SHOPPING</h3>
                    <ul>
                        <li><Link href="">Clothing Store</Link></li>
                        <li><Link href="">Trending Shoes</Link></li>
                        <li><Link href="">Accessories</Link></li>
                        <li><Link href="">Sale</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>SUPPORT</h3>
                    <ul>
                        <li><Link href="">Payment Methods</Link></li>
                        <li><Link href="">Delivery</Link></li>
                        <li><Link href="">Return & Exchanges</Link></li>
                    </ul>
                </div>
                <div>
                    <h3>NEWSLETTER</h3>
                    <p>Be the first to know about new arrivals, look books, sales & promos!</p>
                    <div className={styles.newsletter}>
                        <input 
                            placeholder="Your email" 
                            type="email" 
                            aria-label="Email for newsletter subscription" 
                        />
                    </div>
                </div>
            </div>
            <div className={styles['bottom-bar']}>
                <p>
                    Copyright © 2024 All rights reserved | This Website is made by <a href="https://layan-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer">Muhammad Layan</a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
