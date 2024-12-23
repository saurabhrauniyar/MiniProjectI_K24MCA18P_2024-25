import React from 'react'
import Navbar from '../Navbar/Navbar';
import styles from './AboutUs.module.css';

function About() {
  return (
    <div className={styles.aboutUsContainer}>
      <Navbar />
      <section className={styles.heroSection}>
        <h1>About Us</h1>
        <p>
          Plate2Donate is on a mission to combat food waste and support those in need. We connect donors with local charities to make a meaningful impact and build a community where no food goes to waste.
        </p>
      </section>
      <section className={styles.missionSection}>
        <h2>Our Mission</h2>
        <p>
          Our goal is simple: make food donation easy, effective, and impactful. By connecting generous individuals and events with those who need food the most, we aim to foster a world where everyone has access to nutritious meals and food waste is minimized.
        </p>
      </section>
      <section className={styles.teamSection}>
        <h2>Meet Our Team</h2>
        <p>
          Our team is made up of passionate individuals committed to making a difference. From tech developers to community outreach specialists, each member plays a critical role in ensuring the success of Plate2Donate and its mission.
        </p>
      </section>
      <footer className={styles.aboutFooter}>
        <p>&copy; 2024 Plate2Donate. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default About