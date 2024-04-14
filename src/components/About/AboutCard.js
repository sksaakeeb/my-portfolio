import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="purple">Sk Sakib </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently pursuing B.Tech in Computer Science.
            <br />
            I love to develop cross-platform (Android, iOS) apps.
            <br />
            <br />
            Apart from coding, some other activities that I love to do -
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> New ideas innovation
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "We are living in the illusion!"{" "}
          </p>
          <footer className="blockquote-footer">Sk Sakib</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
