import React from "react";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as Yup from "yup";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEye,
  faEyeSlash,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";

const SignupForm = () => {
  return (
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
        email: Yup.string()
          .email("Looks like this is not an email")
          .required("Required"),
        password: Yup.string()
          .min(8, "Password must be at least 8 characters")
          .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            "Password Requred Special character and cemal case"
          )
          .required("Password cannot be empty"),
      })}
    >
      {({ values, touched, errors, handleChange, handleBlur }) => (
        <Form>
          <div className="field-wrapper">
            <Field
              id="name"
              name="name"
              placeholder="First Name"
              type="text"
              className={
                errors.name && touched.name ? "text-input error" : "text-input"
              }
            />
            {errors.name && touched.name && (
              <FontAwesomeIcon className="err" icon={faCircleExclamation} />
            )}
          </div>
          <ErrorMessage
            name="name"
            component="div"
            className="input-feedback"
          />
          <div className="field-wrapper">
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
            {errors.lastName && touched.lastName && (
              <FontAwesomeIcon className="err" icon={faCircleExclamation} />
            )}
          </div>

          <ErrorMessage
            name="lastName"
            component="div"
            className="input-feedback"
          />
          <div className="field-wrapper">
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
            {errors.email && touched.email && (
              <FontAwesomeIcon className="err" icon={faCircleExclamation} />
            )}
          </div>
          <ErrorMessage
            name="email"
            component="div"
            className="input-feedback"
          />
          <div className="field-wrapper">
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
            {errors.password && touched.password && (
              <FontAwesomeIcon className="err" icon={faCircleExclamation} />
            )}
          </div>
          <ErrorMessage
            name="password"
            component="div"
            className="input-feedback"
          />
          <button type="submit">CLAIM YOUR FREE TRIAL</button>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
