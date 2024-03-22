import React from "react";
import Image from "next/image";
// import instagramIcon from "../images/instagram.svg";
// import linkedinIcon from "../images/linkedin.svg";
// import threadsIcon from "../images/threads.svg";
// import twitterIcon from "../images/twitter.svg";
import "./content/pages.css";

const IconsContainer = () => {
  const handleIconClick = (title: string) => {
    // Handle icon click event
    console.log(`Clicked on ${title} icon`);
  };

  return (
    <div className="icons-container ">
      <div className="icons">
        <button
          className="icon-button"
          onClick={() => handleIconClick("Instagram")}
        >
          <Image src="/instagram.svg" alt="Instagram" width={50} height={50} />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("LinkedIn")}
        >
          <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("Threads")}
        >
          <Image src="/threads.svg" alt="Threads" width={50} height={50} />
        </button>
        <button
          className="icon-button"
          onClick={() => handleIconClick("Twitter")}
        >
          <Image src="/twitter-x.svg" alt="Twitter" width={67} height={67} />
        </button>
      </div>
    </div>
  );
};

export default IconsContainer;
