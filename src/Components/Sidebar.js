import React from "react";
import profile from "../Assets/profile.jpg";
import "./Sidebar.css";
import { Mail, MapPin, GraduationCap, Linkedin, Github, Facebook, BookOpen, Globe } from "lucide-react";

function Sidebar() {
  return (
    <aside className="sidebar">
      <img src={profile} alt="SAINEY DANSO" className="sidebar-img" />

      <h2 className="sidebar-name">SAINEY DANSO</h2>
      <p className="sidebar-pronouns">He/Him/His</p>

      <p className="sidebar-role">
        Researcher: RF, ML, IoT Networks & Edge AI | M.Sc. Embedded Systems | Entrepreneur
      </p>

      <p className="sidebar-location">
        <MapPin size={16} /> Benguerir, Morocco <br />
        <span className="sidebar-affiliation">UM6P</span>
      </p>

      <div className="sidebar-links">
        <a href="mailto:saineydanso4@gmail.com">
          <Mail size={16} /> Email
        </a>
        <a href="https://scholar.google.com/" target="_blank" rel="noreferrer">
          <BookOpen size={16} /> Google Scholar
        </a>

        <a href="https://www.researchgate.net/" target="_blank" rel="noreferrer">
          <GraduationCap size={16} /> ResearchGate
        </a>
        <a href="https://github.com/" target="_blank" rel="noreferrer">
          <Github size={16} /> GitHub
        </a>
        <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
          <Linkedin size={16} /> LinkedIn
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noreferrer">
          <Facebook size={16} /> Facebook
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;
