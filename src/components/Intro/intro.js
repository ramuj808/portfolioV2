import React from "react";
import { Link } from "react-scroll";
import "./intro.css";
import ResumeBtn from "../../assets/icons8-resume-48.png";
import profile from "../../assets/IMG_6521.jpg";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hi,</span>
        <span className="introMessage">
          My name is <span className="introName">Jumar</span> <br />
        </span>
        <p className="introPara">
          I am a motivated and passionate web designer, expanding my learning to
          creating things on the web.
        </p>
        <Link>
          <button className="btn">
            <img src={ResumeBtn} alt="Resume" />
            Resume
          </button>
        </Link>
      </div>
      <img src={profile} alt="profile" className="bg-profile" />
    </section>
  );
};

export default Intro;
