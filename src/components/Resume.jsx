import { useState } from "react";
import "../styles/App.css";
import emailIcon from "../assets/email.svg";
import phoneIcon from "../assets/phone.svg";
import locationIcon from "../assets/location.svg";

function ResumeContainer() {
  return (
    <div className="resume-container">
      <ResumeHeader />
      <ResumeContent />
    </div>
  );
}

function ResumeHeader() {
  return (
    <div className="resume-header">
      <h1>Josephine Meyers</h1>
      <div className="header-info">
        <div>
          <img src={emailIcon} alt="" />
          <span>josephine.meyers@mail.co.uk</span>
        </div>
        <div>
          <img src={phoneIcon} alt="" />
          <span>+44 3245 5521 5521</span>
        </div>
        <div>
          <img src={locationIcon} alt="" />
          <span>London, UK</span>
        </div>
      </div>
    </div>
  );
}

function ResumeContent() {
  return (
    <div className="resume-content">
      <div className="education-info-section">
        <h3>Education</h3>
        <div className="education-info">
          <div className="education-info-group">
            <p className="dates">
              08/2020
              <span> – </span>
              present
            </p>
            <p>New York City, US</p>
          </div>
          <div className="education-info-group">
            <p className="education-info-schoolName">London City University</p>
            <p className="education-info-degree">Bachelors in Economics</p>
          </div>
        </div>
      </div>
      <div className="experience-info-section">
        <h3>Professional Experience</h3>
        <div className="experience-info">
          <div className="experience-info-group">
            <p className="dates">
              08/2020
              <span> – </span>
              present
            </p>
            <p>New York City, US</p>
          </div>
          <div className="experience-info-group">
            <p className="experience-info-companyName">Umbrella Inc.</p>
            <p className="experience-info-positionTitle">UX & UI Designer</p>
            <p className="experience-info-description">
              Designed and prototyped user interface patterns for various
              clients in various industries, ranging from self-service apps
              within the telecommunications-sector to mobile games for IOS and
              Android
            </p>
          </div>
        </div>
        <div className="experience-info">
          <div className="experience-info-group">
            <p className="dates">
              04/2018
              <span> – </span>
              02/2019
            </p>
            <p>Berlin, Germany</p>
          </div>
          <div className="experience-info-group">
            <p className="experience-info-companyName">Black Mesa Labs</p>
            <p className="experience-info-positionTitle">
              UX Research Assistant
            </p>
            <p className="experience-info-description">
              Supported senior researchers on accessibility standards for the
              open web. Created and usability tested wireframes and prototypes.
              Produced interactive documentation for quick onboarding of new
              researchers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResumeContainer;
