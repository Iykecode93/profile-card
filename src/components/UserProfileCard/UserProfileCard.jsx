import React from "react";
import "./UserProfileCard.css";
import Image from "../Assets/IMG_20210503_144801511.jpg";

const UserProfileCard = () => {
  return (
    <div className="card">
      <div className="gradiant"></div>
      <div className="card-down">
        <img src={Image} alt="" />
        <div className="profile-title">Johnbosco Oparah</div>
        <div className="profile-description">
          Enthusiastic and highly motivated Full Stack Developer with a strong
          foundation in web development and a passion for learning.
        </div>
        <div className="profile-button">
          <a href="mailto:boscoiyke67@gmail.com">Contact Me</a>
        </div>
      </div>
    </div>
  );
};

export default UserProfileCard;
