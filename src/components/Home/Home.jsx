import React from "react";
import "../Home/Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="items-wrapper">
          <div className="info">
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>
          <div className="form-wrapepr">
            <div className="plan">
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </div>
            <div className="form">
              <Formik
                initialValues={{
                  email: "",
                  password: "",
                  name: "",
                  lastName: "",
                }}
                onSubmit={async (values) => {
                  await new Promise((resolve) => setTimeout(resolve, 500));
                  alert(JSON.stringify(values, null, 2));
                }}
                validationSchema={Yup.object().shape({
                  name: Yup.string().required("First Name cannot be empty"),
                  lastName: Yup.string().required("Last Name cannot be empty"),
                  email: Yup.string().email().required("Required"),
                  password: Yup.string()
                    .min(8, "Password must be at least 8 characters")
                    .matches(
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
                      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
                    )
                    .required("Password cannot be empty"),
                  
                })}
              >
                {({ values, touched, errors, handleChange, handleBlur }) => (
                  <Form>
                    <Field
                      id="name"
                      name="name"
                      placeholder="First Name"
                      type="text"
                      className={
                        errors.name && touched.name
                          ? "text-input error"
                          : "text-input"
                      }
                    />

                    <ErrorMessage
                      name="name"
                      component="div"
                      className="input-feedback"
                    />
                    <Field
                      id="lastName"
                      name="lastName"
                      placeholder="Last Name"
                      type="text"
                      className={
                        errors.lastName && touched.lastName
                          ? "text-input error"
                          : "text-input"
                      }
                    />

                    <ErrorMessage
                      name="lastName"
                      component="div"
                      className="input-feedback"
                    />
                    <Field
                      id="email"
                      name="email"
                      placeholder="Enter your email"
                      type="text"
                      className={
                        errors.email && touched.email
                          ? "text-input error"
                          : "text-input"
                      }
                    />

                    <ErrorMessage
                      name="email"
                      component="div"
                      className="input-feedback"
                    />
                    <Field
                      id="password"
                      name="password"
                      placeholder="Password"
                      type="password"
                      className={
                        errors.password && touched.password
                          ? "text-input error"
                          : "text-input"
                      }
                    />
                    <ErrorMessage
                      name="password"
                      component="div"
                      className="input-feedback"
                    />
                    <button type="submit">CLAIM YOUR FREE TRIAL</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
