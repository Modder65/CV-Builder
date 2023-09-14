import { useState } from "react";
import "../styles/App.css";
import fileIcon from "../assets/imgs/file.svg";
import editIcon from "../assets/imgs/edit.svg";
import trashIcon from "../assets/imgs/trash.svg";
import educationIcon from "../assets/imgs/education.svg";
import experienceIcon from "../assets/imgs/experience.svg";
import expandMoreIcon from "../assets/imgs/expandMore.svg";
import revealedIcon from "../assets/imgs/revealed.svg";
import hiddenIcon from "../assets/imgs/hidden.svg";
import addIcon from "../assets/imgs/add.svg";

function EditSide() {
  const [showFormContainer, setShowFormContainer] = useState(true);

  return (
    <div className="edit-side">
      <Sidebar setShowFormContainer={setShowFormContainer} />
      <FormContainer showFormContainer={showFormContainer} />
    </div>
  );
}

function Sidebar({ setShowFormContainer }) {
  return (
    <div className="sidebar">
      <button onClick={() => setShowFormContainer(true)}>
        <img src={fileIcon} alt="" />
        <p>Content</p>
      </button>
      <button onClick={() => setShowFormContainer(false)}>
        <img src={editIcon} alt="" />
        <p>Customize</p>
      </button>
    </div>
  );
}

function FormContainer({ showFormContainer }) {
  const [dropMenu, setDropMenu] = useState(false);

  return (
    <div className="form-container">
      <div className="template-loader">
        <button className="clear-resume">
          <img src={trashIcon} alt="" />
          Clear Resume
        </button>
        <button className="load-example">Load Example</button>
      </div>
      <form
        action=""
        className={`personal-details ${showFormContainer ? "" : "hidden"}`}
      >
        <h2>Personal Details</h2>
        <div className="input-group">
          <label htmlFor="full-name">
            <span className="label-text">Full Name</span>
          </label>
          <input type="text" id="full-name" placeholder="First and last name" />
        </div>
        <div className="input-group">
          <label htmlFor="email">
            <span className="label-text">Email</span>
            <span className="recommended-text">&nbsp;&nbsp;recommended</span>
          </label>
          <input type="email" id="email" placeholder="Enter email" />
        </div>
        <div className="input-group">
          <label htmlFor="phone-number">
            <span className="label-text">Phone Number</span>
            <span className="recommended-text">&nbsp;&nbsp;recommended</span>
          </label>
          <input
            type="tel"
            id="phone-number"
            placeholder="Enter phone number"
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">
            <span className="label-text">Address</span>
            <span className="recommended-text">&nbsp;&nbsp;recommended</span>
          </label>
          <input type="text" id="address" placeholder="City, Country" />
        </div>
      </form>
      <div
        className={`add-education-section ${showFormContainer ? "" : "hidden"}`}
        onClick={() => setDropMenu(true)}
      >
        <div className="expand-section-container">
          <button className="expand-section">
            <div className="expand-section-header">
              <img src={educationIcon} alt="" />
              <h2>Education</h2>
            </div>
          </button>
          <img src={expandMoreIcon} alt="" />
        </div>
        <div className={`section-content ${dropMenu ? "" : "hidden"}`}>
          <div className="forms-container">
            <button className="collapsed-form">
              <p className="collapsed-form-title">London City Univserity</p>
              <img src={revealedIcon} alt="" />
            </button>
            <button className="collapsed-form">
              <p className="collapsed-form-title">Hidden University</p>
              <img src={hiddenIcon} alt="" />
            </button>
          </div>
          <button className="create-form">
            <div className="create-form-content">
              <img src={addIcon} alt="" />
              <p>Education</p>
            </div>
          </button>
        </div>
      </div>
      <div
        className={`add-experience-section ${
          showFormContainer ? "" : "hidden"
        }`}
        onClick={() => setDropMenu(true)}
      >
        <div className="expand-section-container">
          <button className="expand-section">
            <div className="expand-section-header">
              <img src={educationIcon} alt="" />
              <h2>Education</h2>
            </div>
          </button>
          <img src={expandMoreIcon} alt="" />
        </div>
        <div className={`section-content ${dropMenu ? "" : "hidden"}`}>
          <div className="forms-container">
            <button className="collapsed-form">
              <p className="collapsed-form-title">Umbrella Inc.</p>
              <img src={revealedIcon} alt="" />
            </button>
            <button className="collapsed-form">
              <p className="collapsed-form-title">Black Mesa Labs</p>
              <img src={revealedIcon} alt="" />
            </button>
          </div>
          <button className="create-form">
            <div className="create-form-content">
              <img src={addIcon} alt="" />
              <p>Experience</p>
            </div>
          </button>
        </div>
      </div>
      <div className={`customize ${showFormContainer ? "hidden" : ""}`}>
        <div className="customize-layout">
          <h2>Layout</h2>
          <div className="col-buttons">
            <button>
              <div className="top-visual visual"></div>
              Top
            </button>
            <button>
              <div className="left-visual visual"></div>
              Left
            </button>
            <button>
              <div className="right-visual visual"></div>
              Right
            </button>
          </div>
        </div>
        <div className="customize-color">
          <h2>Color</h2>
          <label className="accent-color">
            Accent Color
            <input type="color" value="#0e374e" />
          </label>
        </div>
        <div className="customize-font">
          <h2>Fonts</h2>
          <div className="font-select">
            <button className="sertif-btn">
              <span className="font-test">Aa</span>
              Serif
            </button>
            <button>
              <span className="font-test">Aa</span>
              Sans
            </button>
            <button>
              <span className="font-test">Aa</span>
              Mono
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditSide;
