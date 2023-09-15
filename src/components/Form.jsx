import { useState } from "react";
import "../styles/App.css";
import { templateEducationEntries, templateExperienceEntries } from "./data.js";
import fileIcon from "../assets/imgs/file.svg";
import editIcon from "../assets/imgs/edit.svg";
import trashIcon from "../assets/imgs/trash.svg";
import trashIconGrey from "../assets/imgs/trashgrey.svg";
import educationIcon from "../assets/imgs/education.svg";
import experienceIcon from "../assets/imgs/experience.svg";
import expandMoreIcon from "../assets/imgs/expandMore.svg";
import revealedIcon from "../assets/imgs/revealed.svg";
import hiddenIcon from "../assets/imgs/hidden.svg";
import addIcon from "../assets/imgs/add.svg";

function EditSide({
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  templateOrientation,
  setTemplateOrientation,
}) {
  const [showFormContainer, setShowFormContainer] = useState(true);

  return (
    <div className="edit-side">
      <Sidebar setShowFormContainer={setShowFormContainer} />
      <FormContainer
        showFormContainer={showFormContainer}
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
        templateOrientation={templateOrientation}
        setTemplateOrientation={setTemplateOrientation}
      />
    </div>
  );
}

function Sidebar({ setShowFormContainer }) {
  const buttons = [
    {
      icon: fileIcon,
      text: "Content",
      action: () => setShowFormContainer(true),
    },
    {
      icon: editIcon,
      text: "Customize",
      action: () => setShowFormContainer(false),
    },
  ];

  return (
    <div className="sidebar">
      {buttons.map((btn, index) => (
        <button key={index} onClick={btn.action}>
          <img src={btn.icon} alt="" />
          <p>{btn.text}</p>
        </button>
      ))}
    </div>
  );
}

function PersonalDetailsForm({
  showFormContainer,
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
}) {
  function handleFullName(e) {
    setFullName(e.target.value);
    if (fullName === "") return;
  }

  function handleEmail(e) {
    setEmail(e.target.value);
    if (email === "") return;
  }

  function handlePhone(e) {
    setPhone(e.target.value);
    if (phone === "") return;
  }

  function handleAddress(e) {
    setAddress(e.target.value);
    if (address === "") return;
  }

  return (
    <form
      action=""
      className={`personal-details ${showFormContainer ? "" : "hidden"}`}
    >
      <h2>Personal Details</h2>
      <div className="input-group">
        <label htmlFor="full-name">
          <span className="label-text">Full Name</span>
        </label>
        <input
          type="text"
          id="full-name"
          placeholder="First and last name"
          value={fullName}
          onChange={handleFullName}
        />
      </div>
      <div className="input-group">
        <label htmlFor="email">
          <span className="label-text">Email</span>
          <span className="recommended-text">&nbsp;&nbsp;recommended</span>
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={handleEmail}
        />
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
          value={phone}
          onChange={handlePhone}
        />
      </div>
      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
          <span className="recommended-text">&nbsp;&nbsp;recommended</span>
        </label>
        <input
          type="text"
          id="address"
          placeholder="City, Country"
          value={address}
          onChange={handleAddress}
        />
      </div>
    </form>
  );
}

function CustomizeSection({ templateOrientation, setTemplateOrientation }) {
  function handleOrientation(orientation) {
    setTemplateOrientation(orientation);
  }

  return (
    <div className="customize">
      <div className="customize-layout">
        <h2>Layout</h2>
        <div className="col-buttons">
          <button>
            <div
              className="top-visual visual"
              onClick={() => handleOrientation("top")}
            ></div>
            Top
          </button>
          <button>
            <div
              className="left-visual visual"
              onClick={() => handleOrientation("left")}
            ></div>
            Left
          </button>
          <button>
            <div
              className="right-visual visual"
              onClick={() => handleOrientation("right")}
            ></div>
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
  );
}

function TemplateLoader() {
  return (
    <div className="template-loader">
      <button className="clear-resume">
        <img src={trashIcon} alt="" />
        Clear Resume
      </button>
      <button className="load-example">Load Example</button>
    </div>
  );
}

function FormContainer({
  showFormContainer,
  fullName,
  setFullName,
  email,
  setEmail,
  phone,
  setPhone,
  address,
  setAddress,
  templateOrientation,
  setTemplateOrientation,
}) {
  const [educationEntries, setEducationEntries] = useState(
    templateEducationEntries
  );
  const [experienceEntries, setExperienceEntries] = useState(
    templateExperienceEntries
  );

  const [sectionStates, setSectionStates] = useState({
    Education: { showContent: false, rotateIcon: false },
    Experience: { showContent: false, rotateIcon: false },
  });

  const [showEducationEntryForm, setShowEducationEntryForm] = useState(true);

  const toggleReveal = (section, id, event) => {
    event.stopPropagation();
    const updateEntries =
      section === "education" ? setEducationEntries : setExperienceEntries;
    updateEntries((prev) =>
      prev.map((entry) =>
        entry.id === id ? { ...entry, revealed: !entry.revealed } : entry
      )
    );
  };

  const toggleSection = (sectionTitle) => {
    setSectionStates((prev) => ({
      ...prev,
      [sectionTitle]: {
        showContent: !prev[sectionTitle].showContent,
        rotateIcon: !prev[sectionTitle].rotateIcon,
      },
      ...(sectionTitle === "Education"
        ? { Experience: { showContent: false, rotateIcon: false } }
        : { Education: { showContent: false, rotateIcon: false } }),
    }));
  };

  const toggleEntryForm = (event) => {
    event.stopPropagation();
    setShowEducationEntryForm((prev) => !prev);
  };

  const sectionData = [
    {
      title: "Education",
      icon: educationIcon,
      entries: educationEntries,
      ...sectionStates.Education,
    },
    {
      title: "Experience",
      icon: experienceIcon,
      entries: experienceEntries,
      ...sectionStates.Experience,
    },
  ];

  return (
    <div className="form-container">
      <TemplateLoader />
      {showFormContainer ? (
        <PersonalDetailsForm
          showFormContainer={showFormContainer}
          fullName={fullName}
          setFullName={setFullName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          address={address}
          setAddress={setAddress}
        />
      ) : (
        <CustomizeSection
          templateOrientation={templateOrientation}
          setTemplateOrientation={setTemplateOrientation}
        />
      )}
      {sectionData.map((section, index) => (
        <Section
          key={index}
          section={section}
          toggleReveal={toggleReveal}
          showFormContainer={showFormContainer}
          toggleSection={toggleSection}
          toggleEntryForm={toggleEntryForm}
          showEducationEntryForm={showEducationEntryForm}
        />
      ))}
    </div>
  );
}

function Section({
  section,
  toggleReveal,
  showFormContainer,
  toggleSection,
  toggleEntryForm,
  showEducationEntryForm,
}) {
  return (
    <div
      className={`add-${section.title.toLowerCase()}-section ${
        showFormContainer ? "" : "hidden"
      }`}
      onClick={() => toggleSection(section.title)}
    >
      <div className="expand-section-container">
        <button
          className="expand-section"
          onClick={(e) => {
            e.stopPropagation();
            toggleSection(section.title);
          }}
        >
          <div className="expand-section-header">
            <img src={section.icon} alt="" />
            <h2>{section.title}</h2>
          </div>
        </button>
        <img
          src={expandMoreIcon}
          alt=""
          className={section.rotateIcon ? "rotate-180" : ""}
        />
      </div>
      <div className={`section-content ${section.showContent ? "show" : ""}`}>
        <div className="forms-container">
          <EducationEntryForm showEducationEntryForm={showEducationEntryForm} />
          {section.entries.map((entry) => (
            <CollapsedFormEntry
              key={entry.id}
              entry={entry}
              showEducationEntryForm={showEducationEntryForm}
              onIconClick={(event) =>
                toggleReveal(section.title.toLowerCase(), entry.id, event)
              }
            />
          ))}
        </div>
        <button
          className={`create-form ${showEducationEntryForm ? "" : "hidden"}`}
          onClick={toggleEntryForm}
        >
          <div className="create-form-content">
            <img src={addIcon} alt="" />
            <p>{section.title}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function CollapsedFormEntry({ entry, onIconClick, showEducationEntryForm }) {
  return (
    <button
      className={`collapsed-form ${showEducationEntryForm ? "" : "hidden"}`}
      key={entry.id}
    >
      <p className="collapsed-form-title">{entry.title}</p>
      <img
        src={entry.revealed ? revealedIcon : hiddenIcon}
        alt=""
        onClick={onIconClick}
      />
    </button>
  );
}

function EducationEntryForm({ showEducationEntryForm }) {
  return (
    <form
      action=""
      className={`education-entry-form ${
        showEducationEntryForm ? "hidden" : ""
      }`}
    >
      <div className="input-group">
        <label htmlFor="school">
          <span className="label-text">School</span>
        </label>
        <input
          type="text"
          id="school"
          placeholder="Enter school / university"
        />
      </div>
      <div className="input-group">
        <label htmlFor="degree">
          <span className="label-text">Degree</span>
        </label>
        <input
          type="text"
          id="degree"
          placeholder="Enter Degree / Field Of Study"
        />
      </div>
      <div className="input-group-date">
        <div className="start-date">
          <label htmlFor="startdate">
            <span className="label-text">Start Date</span>
          </label>
          <input type="text" id="startdate" placeholder="Enter Start Date" />
        </div>
        <div className="end-date">
          <label htmlFor="enddate">
            <span className="label-text">End Date</span>
          </label>
          <input type="text" id="enddate" placeholder="Enter End Date" />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="location">
          <span className="label-text">Location</span>
          <span className="recommended-text">&nbsp;&nbsp;optional</span>
        </label>
        <input type="text" id="location" placeholder="Enter Location" />
      </div>
      <div className="entry-form-buttons">
        <div>
          <button className="delete-button">
            <img src={trashIconGrey} alt="" />
            Delete
          </button>
        </div>
        <div>
          <button className="cancel-button">Cancel</button>
          <button className="save-button">Save</button>
        </div>
      </div>
    </form>
  );
}

export default EditSide;
