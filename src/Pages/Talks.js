import React from "react";
import { motion } from "framer-motion";
import "./Talks.css";

const talks = [
  {
    title: "Panelist at GASAM Week 2025",
    event: "Gambian Students Association of Morocco (GASAM)",
    description: [
      'Participated as a panelist during GASAM Week 2025 on the topic "The Role of Gambian Youth in National Development."',
      "Discussed the importance of youth empowerment, innovation, and leadership in driving socio-economic transformation.",
      "Highlighted the significance of education, technology, and entrepreneurship in shaping The Gambia’s sustainable future.",
      "Engaged with young professionals and students on actionable strategies for youth-led national progress.",
    ],
    keyPoints: [
      "The importance of giving back to your community and contributing to the growth of our mother land The Gambia.",
      "Active youth participation in every sector, from public service and NGOs to entrepreneurship and academia.",
      "Encouraging young people to take leadership roles or hold decision-makers accountable.",
      "The role of collaboration, creativity, and responsibility in nation-building.",
      "Leveraging education, innovation, and digital skills as key tools for youth-driven development.",
    ],
    gallery: ["/images/talk1.jpg", "/images/talk2.jpg"],
  },

];

function Talks() {
  return (
    <section className="content-section">
      <h2>Talks & Presentations</h2>

      <div className="talks-grid">
        {talks.map((talk, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
            className="card talk-card"
          >
            <div className="talk-header">
              <h3>{talk.title}</h3>
              <p className="talk-event">{talk.event}</p>
            </div>

            <ul>
              {talk.description.map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>

            {talk.keyPoints && (
              <div className="talk-keypoints">
                <h4>Main Discussion Points:</h4>
                <ul>
                  {talk.keyPoints.map((point, k) => (
                    <li key={k}>{point}</li>
                  ))}
                </ul>
              </div>
            )}

            {talk.gallery && talk.gallery.length > 0 && (
              <div className="talk-gallery">
                {talk.gallery.map((img, j) => (
                  <img
                    key={j}
                    src={img}
                    alt={`${talk.title} image ${j + 1}`}
                    className="gallery-image"
                  />
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Talks;
