import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_INQUIRER } from "../../utils/mutations";
import "bootstrap/dist/css/bootstrap.min.css";

const InquirerForm = () => {
  const navigate = useNavigate();
};

return (
  <div>
    <div className="row">
      <div className="col-lg-12">
        <img src="images/contact.jpg" alt="" className="img-fluid w-100" />
      </div>
    </div>
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <p className="mt-5 mb-5">
          Something splashing about in the pool a little way off, and she swam
          nearer to make out what it was: at first she thought it must be a
          walrus or hippopotamus, but then she remembered how small she was now,
          and she soon made out that it was only a mouse that had slipped in
          like herself.
        </p>
        <h2 className="mb-4">Get In Touch</h2>
        <form id="contact-form" className="contact-form">
          <div className="row">
            <div className="col-md-12">
              <div className="form-group">
                <label htmlFor="name">Your Name (required)</label>
                <input
                  className="form-control form-control-name"
                  name="name"
                  id="name"
                  type="text"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email (required)</label>
                <input
                  className="form-control form-control-email"
                  name="email"
                  id="email"
                  type="email"
                  required=""
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message</label>
                <textarea
                  className="form-control form-control-message"
                  name="message"
                  id="message"
                  rows={7}
                  required=""
                  defaultValue={""}
                />
              </div>
              <button
                className="btn btn-primary solid blank mt-3"
                type="submit"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
);
