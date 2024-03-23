import React from "react";
import { Card, Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./content/pages.css";

const CaptionForm = () => {
  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    // Add your form submission logic here
  };

  return (
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
          <Card.Title as="h1">Twitter Caption Generator</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form id="caption-form" onSubmit={handleSubmit}>
            <Form.Group controlId="post-content">
              <Form.Label className="  text-slate-900 font-bold text-xl">Write a Twitter post about...</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="Enter your post content"
                style={{ marginBottom: "15px", width: "100%", color: "black" }}
              />
            </Form.Group>

            <Form.Group controlId="tone">
              <Form.Label className="  text-slate-900 font-bold text-xl">Tone of voice</Form.Label>
              <Form.Control
                as="select"
                style={{ marginBottom: "15px", width: "100%" }}
              >
                <option value="humorous">Humorous 😆</option>
                <option value="sarcastic">Sarcastic 🙃</option>
                <option value="controversial">Controversial 🤔</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="hashtags">
              <Form.Label className="  text-slate-900 font-bold text-xl">Number of hashtags</Form.Label>
              <Form.Control
                type="number"
                min="0"
                max="10"
                defaultValue="3"
                style={{ marginBottom: "15px", width: "100%", color: "black" }}
              />
            </Form.Group>

            <Form.Group controlId="post-length">
              <Form.Label className="  text-slate-900 font-bold text-xl">Post length</Form.Label>
              <Form.Control
                as="select"
                style={{ marginBottom: "15px", width: "100%" }}
              >
                <option value="short">Short (0 - 30 words)</option>
                <option value="medium">Medium (30 - 60 words)</option>
                <option value="long">Long (60 - 120 words)</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="file-upload">
              <Form.Label className="  text-slate-900 font-bold text-xl">Upload image</Form.Label>
              <Form.Control
                type="file"
                accept="image/*"
                style={{ marginBottom: "15px", width: "100%" }}
              />
            </Form.Group>

            <Button variant="primary" type="submit" style={{ width: "100%" }}>
              Generate Twitter Caption
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CaptionForm;
