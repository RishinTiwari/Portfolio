import React from "react";
import "./About.css";
import Me from "../../assets/tiwari.webp";
import { FaAward } from "react-icons/fa";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

const About = () => {
  return (
    <section id="about">
      <h5>Get to know</h5>
      <h2>About me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="My Photo" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>2.5+ years Working</small>
            </article>
            {/* <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>2+ years Working</small>
            </article> */}
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>10 + Projects</h5>
              <small>adding more..</small>
            </article>
          </div>
          <p>
          Bringing over 2.5 years of proven experience as a seasoned data analyst, I stand out in the realms of Python, SQL, Tableau, PowerBI, R, and ETL methodologies. Proficient in executing statistical analyses and applying agile methodologies, I specialize in extracting meaningful insights. My expertise further extends to the application of AI and ML techniques, showcasing a dedicated commitment to optimizing data processes for informed business strategies. Moreover, my track record includes a demonstrated ability to design impactful visualizations and custom dashboards, underscoring my passionate dedication to harnessing the power of data for unlocking strategic business growth opportunities.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
