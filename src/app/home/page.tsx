// pages/home.tsx
"use client";
import React from "react";
import Navbar from "../navbar/page"; // Assuming the Navbar component is in the same directory
import IconsContainer from "../hero/page";
import Form from "../form/page";
import SocialMediaForm from "../formiconscontainer/page";
import TabsDemo from "../tabs/page";

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* <SocialMediaForm /> */}
      <TabsDemo />
      {/* <IconsContainer />
      <Form /> */}
      {/* Add your content here */}
    </div>
  );
};

export default Home;
