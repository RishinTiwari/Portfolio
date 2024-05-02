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
          With over 2.5 years of experience as a seasoned data analyst, I excel in Python, SQL, Data Science, Data Visualization, ETL, and Big Data. Proficient in statistical analysis and agile methodologies, I specialize in extracting meaningful insights for informed business strategies. My expertise extends to AI and ML techniques, and I am passionate about leveraging data to unlock strategic growth opportunities. Currently, I am exploring LLMs and Generative AI, staying updated with emerging trends to harness AI's potential in making our lives easier. Let's connect to discuss how we can use AI for mutual benefit.
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
