import React, { useState } from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { VIEW_TRIPS } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./tour.css";
import boat from "../../images/boat.jpg";
import crossing from "../../images/crossing.jpg";
import epic from "../../images/epic.jpg";

const images = [boat, crossing, epic];

const ReadMore = ({ children, maxCharacterCount = 100 }) => {
  const text = children;
  const [isTrunctated, setIsTruncated] = useState(true);
  const resultString = isTrunctated ? text.slice(0, maxCharacterCount) : text;

  function toggleIsTruncated() {
    setIsTruncated(!isTrunctated);
  }

  return (
    <p>
      {resultString}
      <span
        onClick={toggleIsTruncated}
        style={{ color: "blue", cursor: "pointer" }}
      >
        {isTrunctated ? "... Read more" : " Show less"}
      </span>
    </p>
  );
};

const Tours = () => {
  const { loading, error, data } = useQuery(VIEW_TRIPS);
  if (loading) {
    return <p>...loading</p>;
  }
  console.log(data);
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  return (
    <section>
      <div className="container">
        <Row xs={1} md={2} lg={3} className="g-4 justify-content-md-center">
          {data.trips &&
            data.trips.map((trip, index) => (
              <Col key={index}>
                <Card
                  className="mx-auto"
                  style={{ width: "18rem", minHeight: "40rem" }}
                >
                  <Card.Img
                    className="card-img"
                    variant="top"
                    src={images[index]}
                  />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{trip.title}</Card.Title>
                      <span>{trip.trip_duration} days</span>
                    </div>
                    <Card.Text>
                      <ReadMore maxCharacterCount={100}>
                        {trip.trip_description}
                      </ReadMore>
                    </Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary">Book Now</Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>
      </div>
    </section>
  );
};

export default Tours;

// holder.js/100px180
