import React from "react";
import "./UserProfileCard.css";
import Image from "../Assets/IMG_20210503_144801511.jpg";
import linkedin from "../Assets/linkedin copy.png";
import git from "../Assets/github-logo copy.png";
import email from "../Assets/email copy.png";
import video from "../Assets/video.mp4";

const UserProfileCard = () => {
  return (
    <div className="bgCard">
      <div>
        <video src={video} autoPlay loop muted />
        <div className="card">
          <div className="gradiant"></div>
          <div className="card-down">
            <img src={Image} alt="" />
            <div className="profile-title">Johnbosco Oparah</div>
            <div className="profile-description">
              Enthusiastic and highly motivated Full Stack Developer with a
              strong foundation in web development and a passion for learning.
            </div>
          </div>
          <div className="profile-button">
            <div className="social-link">
              <img className="profile-link" src={linkedin} alt="" />
              <a href="">Linkedin</a>
            </div>
            <div className="social-link">
              <img className="profile-link" src={git} alt="" />
              <a href="">GitHub</a>
            </div>
            <div className="social-link">
              <img className="profile-link" src={email} alt="" />
              <a href="mailto:boscoiyke67@gmail.com">Contact Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
