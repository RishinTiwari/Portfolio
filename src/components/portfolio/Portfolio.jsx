import React from "react";
import "./Portfolio.css";
import Sneakers from "../../assets/Sneakers.jpeg";
import Tableau from "../../assets/Tableau.jpeg";
import ISL from "../../assets/ISl.jpeg";
import  Heart from "../../assets/heart.jpeg";
import  insurance from "../../assets/insurance.png";
import  backorder from "../../assets/backorder.png";
import  retargeting from "../../assets/retargeting.png";
import  mongo from "../../assets/mongo.webp";
import  gemini from "../../assets/gemini.png";

const data = [
  {
    id: 5,
    image: Heart,
    title: "CardioHealth Insights: Predictive Model for Cardiovascular Disease",
    github: "https://github.com/RishinTiwari/Cardiovascular-Disease-Prediction-Project",
    demo: "",
  },
  {
    id: 6,
    image: insurance,
    title: "Predictive Modeling for Insurance Company Profitability",
    github: "https://github.com/RishinTiwari/Insurance-Risk-Management-Project",
    demo: "",
  },
  {
    id: 7,
    image: backorder,
    title: "Backorder Prediction for Optimal Inventory Management",
    github: "https://github.com/RishinTiwari/Backorder-Propagation-Prediction",
    demo: "",
  },
  {
    id: 8,
    image: retargeting,
    title: "Retargeting Campaign Analysis",
    github: "https://github.com/RishinTiwari/Retargeting-Customer-Project",
    demo: "",
  },
  {
    id: 9,
    image: mongo,
    title: "MongoDB E-commerce Project",
    github: "https://github.com/RishinTiwari/Ecommerce-Database-MongoDB-Project",
    demo: "",
  },
  {
    id: 10,
    image: gemini,
    title: "LLM Nutrition App using Google Gemini API",
    github: "https://github.com/RishinTiwari/Nutrition-App-using-Google-Gemini-API",
    demo: "",
  },
  {
    id: 1,
    image: ISL,
    title: "Audio to Sign Language Converter",
    github: "https://github.com/RishinTiwari/AudioToSignLanguageConverter",
    demo: "",
  },
  {
    id: 2,
    image: Sneakers,
    title: "Sneakers Classifier",
    github: "https://github.com/RishinTiwari/Sneaker_Classifier",
    demo: "",
  },
  {
    id: 3,
    image: Tableau,
    title: "Tableau Sales Performance Analysis",
    github: "https://github.com/RishinTiwari/Tableau_Sales_Performance_analysis",
    demo: "",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                {github.length > 1 ? <a href={github} className="btn" target="_blank">
                  Github
                </a> : null}
                {demo.length > 1 ? <a href={demo} className="btn btn-primary" target="_blank">
                  Live Demo
                </a> : null}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
