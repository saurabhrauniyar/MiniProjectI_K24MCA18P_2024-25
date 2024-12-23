import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import styles from "./Home.module.css"; // Use CSS modules for scoped styles.


// import Navbar from "../Navbar/Navbar";

function Home() {
    const navigate = useNavigate();


    useEffect(() => {
        const token = localStorage.getItem("jwt")

        if (!token) {
            navigate('/signin');
        }
    }, []);



    const goToweding = () => {
        navigate('/weding')
    }
    const goToBirthday = () => {
        navigate('/birthday')
    }
    const goToParty = () => {
        navigate('/others')
    }

    return <div>
        <Navbar />

        <div className={styles.homeOptions}>
            <div className={styles.box}>
                <h1>Weddings</h1>
                <p>Celebrate your special day by sharing the joy! Donate excess food
            from your wedding to those in need and make the day even more
            meaningful.
                </p>
                <button className={styles.bookNowButton} onClick={() => {goToweding()}}>Book Now</button>
            </div>
            <div className={styles.box}>
                <h1>Birthdays</h1>
                <p>Share the happiness of your birthday! Donate surplus food to
                    brighten someone's day and create lasting memories.
                </p>
                <button className={styles.bookNowButton} onClick={() => {goToBirthday()}}>Book Now</button>
            </div>
            <div className={styles.box}>
                <h1>Parties</h1>
                <p>Host with a purpose! Let your celebration help others by donating leftover food and spreading kindness.
                </p>
                <button className={styles.bookNowButton}  onClick={() => {goToParty()}}>Book Now</button>
            </div>
            
            <section className={styles.infoSection}>
                <h2>Why Donate Food?</h2>
                <p>
                    Every day, tons of food go to waste while millions of people go
                    hungry. By donating, you can make a significant impact and help
                    those in need.
                </p>
            </section>

        <section className={styles.infoSection}>
          <h2>How Does Plate2Donate Work?</h2>
          <p>
            Simply register, list the food items you wish to donate, and we’ll
            connect you with local charities or individuals in need. It’s quick
            and easy to make a difference!
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>Success Stories</h2>
          <p>
            We've helped thousands of people access meals they wouldn't have had
            otherwise. Join our community and be a part of these life-changing
            moments.
          </p>
        </section>

        <section className={styles.infoSection}>
          <h2>Join Us Today</h2>
          <p>
            Becoming a donor is simple, and your contributions can bring hope
            to many. Start your journey with Plate2Donate and help create a
            hunger-free world.
          </p>
          <Link to="/signup" className={styles.ctaButton}>
            Sign Up to Donate
          </Link>
        </section>
      </div>

      <footer className={styles.footer}>
        <p>&copy; 2024 Plate2Donate. All rights reserved.</p>
      </footer>
    </div>
}

export default Home;
