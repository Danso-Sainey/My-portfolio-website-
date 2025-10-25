import React from "react";
import { motion } from "framer-motion";
import "./Experiences.css"; // light CSS only for layout, no colors

const experiences = [
  {
    title: "Research Assistant : UM6P",
    description: [
      "Contributed to the development of intelligent telemedicine systems combining TinyML and IoT for real-time health monitoring.",
      "Designed and implemented a ML jamming model using IQ samples capable of identifying parterns in raw signal data for  low-power edge devices.",
      "Collaborated with interdisciplinary researchers to optimize signal acquisition and improve model accuracy in noisy environments.",
    ],
    image: "/images/um6p.png",
    gallery: ["/images/ecg1.jpg","/images/ecg2.jpg","/images/jam1.jpg", "/images/jam2.jpg"],
  },
  {
    title: " EnergyVision, Morocco",
    description: [
      "Worked on the design and simulation of large-scale solar energy systems for commercial and rural installations.",
      "Conducted extensive market research on renewable energy adoption trends and regulatory frameworks in Morocco.",
      "Developed solar system optimization algorithms focusing on cost reduction and energy efficiency improvement.",
    ],
    image: "/images/energyvision.png",
    gallery: ["/images/energyvision_1.jpg"],
  },
  {
    title: "Intern : Heliantha, Morocco",
    description: [
      "Performed technical studies and system dimensioning for photovoltaic (PV) systems and water pumping installations.",
      "Supported integration of renewable energy solutions into agricultural and industrial infrastructures.",
      "Gained practical experience with PV design software, energy audits, and field data collection for performance validation.",
    ],
    image: "/images/heliantha.png",
    gallery: ["/images/heliantha_1.jpg","/images/heliantha_2.jpg","/images/heliantha_3.jpg","/images/heliantha_4.jpg","/images/heliantha_5.jpg","/images/heliantha_8.jpg","/images/heliantha_6.jpg"],
  },
  {
    title: "Final Project Intern : LACEM, Morocco",
    description: [
      "Designed and simulated a solar battery charger based on a Maximum Power Point Tracking (MPPT) algorithm using MATLAB.",
      "Focused on optimizing power conversion efficiency and storage management within standalone solar systems.",
      "Learned advanced control techniques for dynamic load balancing and renewable system modeling.",
    ],
    image: "/images/lacem.png",
    gallery: ["/images/inverter_3.jpg","/images/inverter_2.jpg","/images/lacem_7.jpg","/images/lacem_1.jpg"],
  },
  {
    title: "Intern : NAWEC, Gambia",
    description: [
      "Assisted in daily control operations and maintenance activities of both heavy and light fuel engines.",
      "Gained hands-on exposure to power generation systems, electrical control panels, and troubleshooting processes.",
      "Developed a foundational understanding of energy infrastructure and industrial maintenance procedures.",
    ],
    image: "/images/nawec.png",
    gallery: ["/images/nawec_1.jpg","/images/nawec_2.jpg","/images/nawec_3.jpg"],
  },
];

function Experiences() {
  return (
    <section className="content-section">
      <h2>Experiences</h2>

      <div className="experiences-grid">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card experience-card"
          >
            <div className="experience-header">
              <img
                src={exp.image}
                alt={exp.title}
                className="experience-logo"
              />
              <h3>{exp.title}</h3>
            </div>

            <ul>
              {exp.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            <div className="experience-gallery">
              {exp.gallery.map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt={`${exp.title} image ${j + 1}`}
                  className="gallery-image"
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Experiences;
