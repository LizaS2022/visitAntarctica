import React from "react";
import { useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { VIEW_TRIPS } from "../../utils/queries";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import boat from "../../images/iceberg.jpg";
import crossing from "../../images/iceberg.jpg";
import epic from "../../images/iceberg.jpg";

const Tours = () => {
  const { loading, data } = useQuery(VIEW_TRIPS);
  if (loading) {
    return <p>...loading</p>;
  }
  console.log(data);

  return (
    <section>
      <div className="container">
        <Row xs={1} md={3} className="g-4 justify-content-md-center">
          {data.trips &&
            data.trips.map((trip, index) => (
              <Col key={index}>
                <Card
                  className="mx-auto"
                  style={{ width: "18rem", height: "40rem" }}
                >
                  <Card.Img variant="top" src="{`{trip.image}`}" />
                  <Card.Body>
                    <div className="d-flex justify-content-between">
                      <Card.Title>{trip.title}</Card.Title>
                      <span>{trip.trip_duration} days</span>
                    </div>
                    <Card.Text>{trip.trip_description}</Card.Text>
                    <div className="d-flex justify-content-between">
                      <Button variant="primary">Book Now</Button>
                      <Card.Link
                        style={{ textDecoration: "underline" }}
                        href="#"
                      >
                        Read More
                      </Card.Link>
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

// "holder.js/100px180"
