import { useState } from "react";
import "../styles/App.css";
import { templateEducationEntries, templateExperienceEntries } from "./data.js";
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

function PersonalDetailsForm({ showFormContainer }) {
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
        <input type="tel" id="phone-number" placeholder="Enter phone number" />
      </div>
      <div className="input-group">
        <label htmlFor="address">
          <span className="label-text">Address</span>
          <span className="recommended-text">&nbsp;&nbsp;recommended</span>
        </label>
        <input type="text" id="address" placeholder="City, Country" />
      </div>
    </form>
  );
}

function CustomizeSection() {
  return (
    <div className="customize">
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

function FormContainer({ showFormContainer }) {
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
        <PersonalDetailsForm showFormContainer={showFormContainer} />
      ) : (
        <CustomizeSection />
      )}
      {sectionData.map((section, index) => (
        <Section
          key={index}
          section={section}
          toggleReveal={toggleReveal}
          showFormContainer={showFormContainer}
          toggleSection={toggleSection}
        />
      ))}
    </div>
  );
}

function Section({ section, toggleReveal, showFormContainer, toggleSection }) {
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
          {section.entries.map((entry) => (
            <CollapsedFormEntry
              key={entry.id}
              entry={entry}
              onIconClick={(event) =>
                toggleReveal(section.title.toLowerCase(), entry.id, event)
              }
            />
          ))}
        </div>
        <button className="create-form">
          <div className="create-form-content">
            <img src={addIcon} alt="" />
            <p>{section.title}</p>
          </div>
        </button>
      </div>
    </div>
  );
}

function CollapsedFormEntry({ entry, onIconClick }) {
  return (
    <button className="collapsed-form" key={entry.id}>
      <p className="collapsed-form-title">{entry.title}</p>
      <img
        src={entry.revealed ? revealedIcon : hiddenIcon}
        alt=""
        onClick={onIconClick}
      />
    </button>
  );
}

export default EditSide;
