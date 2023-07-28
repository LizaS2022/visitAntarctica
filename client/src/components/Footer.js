import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { ADD_SUBSCRIBER } from "../utils/mutations";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  const [subScribeState, setSubscribe] = useState({
    email: "",
  });

  const [addSubscriber, { error }] = useMutation(ADD_SUBSCRIBER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSubscribe({ ...subScribeState, [name]: value });
    console.log("the name is:", name);
    console.log("the valuse is:", value);
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addSubscriber({
        variables: { input: { ...subScribeState } },
      });
      console.log("the data is", data);
      //   navigate(`/home`);
    } catch (error) {
      console.error(error);
    }

    setSubscribe({
      email: "",
    });
  };
  return (
    <section className="footer-2 section-padding gray-bg pb-5">
      <div className="container">
        <form onSubmit={handleFormSubmit} id="subscription-form" method="post">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="subscribe-footer text-center">
                <div className="form-group mb-0">
                  <h2 className="mb-3">Subscribe Newsletter</h2>
                  <p className="mb-4">
                    Subscribe my Newsletter for new blog posts , tips and info.
                  </p>
                  <p></p>
                  <div className="form-group form-row align-items-center mb-0">
                    <div className="col-sm-9">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={subScribeState.email}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className="col-sm-3">
                      <button type="submit" className="btn btn-dark">
                        Subscribe
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
        <div className="footer-btm mt-5 pt-4 border-top">
          <div className="row">
            <div className="col-lg-12">
              <ul className="list-inline footer-socials-2 text-center">
                <li className="list-inline-item">
                  <Link to="#">Privacy policy</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Support</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">About</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Contact</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Terms</Link>
                </li>
                <li className="list-inline-item">
                  <Link to="#">Category</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="copyright text-center ">
                @ copyright all reserved to visitAntarctica INC-2019
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
