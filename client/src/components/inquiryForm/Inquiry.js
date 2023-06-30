import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { ADD_INQUIRER } from "../../utils/mutations";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { CacheWriteBehavior } from "@apollo/client/core/QueryInfo";
import iceberg from "../../images/iceberg.jpg";

const InquirerForm = () => {
  const navigate = useNavigate();
  //////
  const [formState, setFormState] = useState({
    first_name: "",
    last_name: "",
    email: "",
    message_title: "",
    message: "",
  });

  const [addInquirer, { error }] = useMutation(ADD_INQUIRER);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    console.log("the name is:", name);
    console.log("the valuse is:", value);
    setFormState({ ...formState, [name]: value });
  };

  //   const handleInputBlur = (event) => {
  //     const { name, value } = event.target;
  //     console.log("the name is:", name);
  //     console.log("the valuse is:", value);
  //   };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addInquirer({
        variables: { input: { ...formState } },
      });
      console.log("the data is", data);
      //   navigate(`/home`);
    } catch (error) {
      console.error(error);
    }

    setFormState({
      first_name: "",
      last_name: "",
      email: "",
      message_title: "",
      message: "",
    });
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <img src={iceberg} alt="" className="img-fluid w-100" />
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="mt-5 mb-5">
              Something splashing about in the pool a little way off, and she
              swam nearer to make out what it was: at first she thought it must
              be a walrus or hippopotamus, but then she remembered how small she
              was now, and she soon made out that it was only a mouse that had
              slipped in like herself.
            </p>
            <h2 className="mb-4">Get In Touch</h2>
            <form
              onSubmit={handleFormSubmit}
              id="contact-form"
              className="contact-form"
              method="post"
            >
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group">
                    <label htmlFor="firstName">
                      Your First Name (required)
                    </label>
                    <input
                      className="form-control form-control-name"
                      name="first_name"
                      id="firstName"
                      type="text"
                      required=""
                      autoComplete="off"
                      value={formState.first_name}
                      onChange={handleInputChange}
                      // onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="lastName">Your Last Name (required)</label>
                    <input
                      className="form-control form-control-name"
                      name="last_name"
                      id="lastName"
                      type="text"
                      required=""
                      autoComplete="off"
                      value={formState.last_name}
                      onChange={handleInputChange}
                      // onBlur={handleInputBlur}
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
                      autoComplete="off"
                      value={formState.email}
                      onChange={handleInputChange}
                      // onBlur={handleInputBlur}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subjectMessage">Message Subject</label>
                    <textarea
                      className="form-control form-control-message"
                      name="message_title"
                      id="subjectMessage"
                      rows={1}
                      required=""
                      autoComplete="off"
                      value={formState.message_title}
                      onChange={handleInputChange}
                      // onBlur={handleInputBlur}
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
                      autoComplete="off"
                      value={formState.message}
                      onChange={handleInputChange}
                      // onBlur={handleInputBlur}
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
    </section>
  );
};

export default InquirerForm;
