import React from "react";
import { motion } from "framer-motion";
import "./Projects.css"; // light CSS only for layout, inherits theme colors

const projects = [
  {
    title: "Defect Detection on Candelabra Surfaces",
    description: [
      "Developed an image-processing solution to detect surface defects on candelabra products.",
      "Utilized machine vision algorithms for defect localization and classification.",
      "Optimized the inspection pipeline to improve detection accuracy and reduce manual labor.",
    ],
    gallery: ["/images/model1.jpg", "/images/model2.jpg", "/images/model3.jpg"],
  },
  {
    title: "Multifunctional Security System Design",
    description: [
      "Designed a multifunctional security system using ESP32 and PIC16F887 microcontrollers.",
      "Integrated facial and voice recognition to enhance system authentication.",
      "Implemented real-time response and control logic for improved user interaction.",
    ],
    gallery: [ "/images/security_1.jpg","/images/security.jpg","/images/security_2.jpg"],
  },
  {
    title: "Solar System and Battery Charger Design",
    description: [
      "Developed a solar battery charger using MPPT algorithm to maximize energy conversion.",
      "Simulated system behavior under variable irradiance and temperature conditions.",
      "Focused on optimizing efficiency and reliability for off-grid energy systems.",
    ],
    gallery: ["/images/inverter_1.jpg","/images/lacem_1.jpg", "/images/inverter_2.jpg", "/images/inverter_3.jpg"],
  },
];

function Projects() {
  return (
    <section className="content-section">
      <h2>Projects</h2>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card project-card"
          >
            <div className="project-header">
              <h3>{proj.title}</h3>
            </div>

            <ul>
              {proj.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            <div className="project-gallery">
              {proj.gallery.map((img, j) => (
                <img
                  key={j}
                  src={img}
                  alt={`${proj.title} image ${j + 1}`}
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

export default Projects;
