import React from "react";
import instagramIcon from "../images/instagram.svg";
import linkedinIcon from "../images/linkedin.svg";
import threadsIcon from "../images/threads.svg";
import twitterIcon from "../images/twitter.svg";

const IconsContainer = () => {
  const handleIconClick = (title: string) => {
    // Handle icon click event
    console.log(`Clicked on ${title} icon`);
  };

  return (
    <div className="icons-container">
      <div className="icons">
        <button
          className="icon-button"
          onClick={() => handleIconClick("Instagram")}
        >
          <img src={instagramIcon} alt="Instagram" />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("LinkedIn")}
        >
          <img src={linkedinIcon} alt="LinkedIn" />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("Threads")}
        >
          <img src={threadsIcon} alt="Threads" />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("Twitter")}
        >
          <img style={{ width: "61%" }} src={twitterIcon} alt="Twitter" />
        </button>
      </div>
    </div>
  );
};

export default IconsContainer;
