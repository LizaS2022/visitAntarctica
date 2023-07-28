import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const AboutUs = () => {
  return (
    <>
      <Container id="AboutUs" className="my-5">
        <Row className="mx-5">
          <Col>
            <h2>About Us</h2>
            <p>
              Welcome to Visit Antarctica, your dedicated travel specialist for
              journeys to the end of the Earth. As one of the leading Antarctic
              travel agencies, we pride ourselves on delivering immersive,
              responsible, and extraordinary polar experiences. Founded in 2010,
              our mission has always been to create and provide authentic,
              life-changing journeys that allow our guests to truly connect with
              the last great wilderness on earth - Antarctica.
            </p>
            <p>
              Our specialty lies in curating a variety of Antarctic adventures
              to suit all types of explorers. Whether you wish to cruise the
              serene waters of the Antarctic Peninsula, experience the unique
              wildlife of South Georgia, or push the boundaries of adventure by
              crossing the Antarctic Circle or skiing the last degree, we have a
              trip for you.
            </p>
            <p>
              We understand that traveling to such a remote and delicate
              environment is no small decision, and as such, we are committed to
              providing the highest level of service, safety, and expertise. Our
              dedicated team of polar travel specialists is always ready to
              guide you through every step of the journey, ensuring that you
              have a safe, comfortable, and unforgettable Antarctic experience.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
