import React from "react";
import "../Home/Home.scss";
import SignupForm from "../Signupform";
import InfoSection from "../Infosection";

const Home = () => {
  return (
    <div>
      <section className="home-section">
        <div className="items-wrapper">
          <InfoSection />
          <div className="form-wrapepr">
            <div className="plan">
              <p>
                <span>Try it free 7 days</span> then $20/mo. thereafter
              </p>
            </div>
            <div className="form">
              <SignupForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
