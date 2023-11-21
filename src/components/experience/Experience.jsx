import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>My Strengths</h5>
      <h2>Skills</h2>

      <div className="container experience__container">
        <div className="experience__backend">
          <h3>Data Mining & Analytical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Python & R</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Machine Learning & Deep Learning</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Data Mining & Analytics</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>ETL and Data Pipelines</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Data Visualization (Tableau/PowerBI)</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Statistical Analysis</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            {/* <article className="experience__details">
              <BsPatchCheckFill />
              <h4>TypeScript</h4>
              <small className="text-light">Experienced</small>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className="text-light">Experienced</small>
            </article> */}
          </div>
        </div>
        <div className="experience__frontend">
          <h3>Technical Skills</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>SQL</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>HTML/CSS</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Redis</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>Java/JavaScript</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experince__details-icon" />
              <div>
                <h4>C/C++</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
