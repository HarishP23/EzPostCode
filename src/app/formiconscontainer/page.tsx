import React, { useState } from "react";
import Image from "next/image";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content/pages.css"; // Import CSS styles

const SocialMediaForm = () => {
  const [formData, setFormData] = useState({
    postContent: "",
    tone: "",
    hashtags: 3,
    postLength: "short",
    image: null, // Initially set to null
    platform: "", // Add platform property
  });

  const handleIconClick = (title: string) => {
    // Handle icon click event and update form data based on icon clicked
    if (title === "Instagram") {
      setFormData({
        ...formData,
        platform: "Instagram",
      });
    } else if (title === "LinkedIn") {
      setFormData({
        ...formData,
        platform: "LinkedIn",
      });
    } else if (title === "Threads") {
      setFormData({
        ...formData,
        platform: "Threads",
      });
    } else if (title === "Twitter") {
      setFormData({
        ...formData,
        platform: "Twitter",
      });
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted with data:", formData);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    setFormData({
      ...formData,
      image: file || null, // Update the image value with the selected file or null
    });
  };

  return (
    <div>
      <div className="icons-container ">
        <div className="icons">
          {/* Instagram */}
          <button
            className="icon-button"
            onClick={() => handleIconClick("Instagram")}
          >
            <Image
              src="/instagram.svg"
              alt="Instagram"
              width={50}
              height={50}
            />
          </button>
          {/* LinkedIn */}
          <button
            className="icon-button"
            onClick={() => handleIconClick("LinkedIn")}
          >
            <Image src="/linkedin.svg" alt="LinkedIn" width={50} height={50} />
          </button>
          {/* Threads */}
          <button
            className="icon-button"
            onClick={() => handleIconClick("Threads")}
          >
            <Image src="/threads.svg" alt="Threads" width={50} height={50} />
          </button>
          {/* Twitter */}
          <button
            className="icon-button"
            onClick={() => handleIconClick("Twitter")}
          >
            <Image src="/twitter-x.svg" alt="Twitter" width={67} height={67} />
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          padding: "20px",
        }}
      >
        <Card style={{ width: "40rem", margin: "auto" }}>
          <Card.Header style={{ textAlign: "center" }}>
            <Card.Title as="h1">Social Media Caption Generator</Card.Title>
          </Card.Header>
          <Card.Body>
            <Form id="caption-form" onSubmit={handleSubmit}>
              <Form.Group controlId="post-content">
                <Form.Label>Write a LinkedIn post about...</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3} // Limit the visible rows to 3
                  placeholder="Enter your post content"
                  style={{
                    marginBottom: "15px",
                    width: "100%",
                    color: "black",
                    maxHeight: "4.5em", // Adjust the max height to accommodate 3 lines
                    overflowY: "auto", // Add vertical scrollbar if needed
                  }}
                  name="postContent"
                  value={formData.postContent}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="tone">
                <Form.Label>Tone of voice</Form.Label>
                <Form.Control
                  as="select"
                  style={{ marginBottom: "15px", width: "100%" }}
                  name="tone"
                  value={formData.tone}
                  onChange={handleChange}
                >
                  <option value="professional">Professional 🤓</option>
                  <option value="casual">Casual 😎</option>
                  <option value="excited">Excited 🎉</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="hashtags">
                <Form.Label>Number of hashtags</Form.Label>
                <Form.Control
                  type="number"
                  min="0"
                  max="10"
                  defaultValue="3"
                  style={{
                    marginBottom: "15px",
                    width: "100%",
                    color: "black",
                  }}
                  name="hashtags"
                  value={formData.hashtags}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="post-length">
                <Form.Label>Post length</Form.Label>
                <Form.Control
                  as="select"
                  style={{ marginBottom: "15px", width: "100%" }}
                  name="postLength"
                  value={formData.postLength}
                  onChange={handleChange}
                >
                  <option value="short">Short (0 - 30 words)</option>
                  <option value="medium">Medium (30 - 60 words)</option>
                  <option value="long">Long (60 - 120 words)</option>
                </Form.Control>
              </Form.Group>

              <Form.Group controlId="file-upload">
                <Form.Label>Upload image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/*"
                  style={{ marginBottom: "15px", width: "100%" }}
                  onChange={handleFileChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" style={{ width: "100%" }}>
                Generate LinkedIn Caption
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default SocialMediaForm;
