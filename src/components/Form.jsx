import {
  inputGroups,
  educationFormFields,
  experienceFormFields,
} from "./data.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";

export function Form({
  formState,
  setFormState,
  setEducationEntries,
  setExperienceEntries,
  setResumeOrientation,
  setFontClass,
}) {
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  }

  function areFieldsFilled(fields) {
    return fields.every((field) => field);
  }

  function handleAddEducationEntry() {
    const { school, degree, schoolStartDate, schoolEndDate, schoolLocation } =
      formState;

    if (
      !areFieldsFilled([
        school,
        degree,
        schoolStartDate,
        schoolEndDate,
        schoolLocation,
      ])
    ) {
      toggleModal("Please fill out all education fields.");
      return;
    }

    setEducationEntries((prev) => [
      ...prev,
      {
        id: uuidv4(),
        schoolStartDate: formState.schoolStartDate,
        schoolEndDate: formState.schoolEndDate,
        schoolLocation: formState.schoolLocation,
        school: formState.school,
        degree: formState.degree,
      },
    ]);
  }

  function handleAddExperienceEntry() {
    const {
      companyName,
      position,
      workStartDate,
      workEndDate,
      workLocation,
      description,
    } = formState;

    if (
      !areFieldsFilled([
        companyName,
        position,
        workStartDate,
        workEndDate,
        workLocation,
        description,
      ])
    ) {
      toggleModal("Please fill out all experience fields.");
      return;
    }

    setExperienceEntries((prev) => [
      ...prev,
      {
        id: uuidv4(),
        workStartDate: formState.workStartDate,
        workEndDate: formState.workEndDate,
        workLocation: formState.workLocation,
        companyName: formState.companyName,
        position: formState.position,
        description: formState.description,
      },
    ]);
  }

  function toggleModal(message = "") {
    setModalMessage(message);
    setShowModal((prev) => !prev);
  }

  return (
    <div className="form-container">
      <h2>Personal Information</h2>
      <form className="personal-details-form">
        {inputGroups.map((inputGroup) => (
          <div className="input-group" key={inputGroup.id}>
            <label htmlFor={inputGroup.name}>{inputGroup.labelText}</label>
            <input
              id={inputGroup.name}
              name={inputGroup.name}
              type={inputGroup.type}
              placeholder={inputGroup.placeholder}
              value={formState[inputGroup.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
      </form>

      <h2>Education</h2>
      <form className="education-form">
        {educationFormFields.map((inputGroup) => (
          <div className="input-group" key={inputGroup.id}>
            <label htmlFor={inputGroup.name}>{inputGroup.labelText}</label>
            <input
              id={inputGroup.name}
              name={inputGroup.name}
              type={inputGroup.type}
              placeholder={inputGroup.placeholder}
              value={formState[inputGroup.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <button
          className="add-education-entry"
          type="button"
          onClick={handleAddEducationEntry}
        >
          Add Education Entry
        </button>
      </form>

      <h2>Experience</h2>
      <form className="experience-form">
        {experienceFormFields.map((inputGroup) => (
          <div className="input-group" key={inputGroup.id}>
            <label htmlFor={inputGroup.name}>{inputGroup.labelText}</label>
            <input
              id={inputGroup.name}
              name={inputGroup.name}
              type={inputGroup.type}
              placeholder={inputGroup.placeholder}
              value={formState[inputGroup.name] || ""}
              onChange={handleChange}
            />
          </div>
        ))}
        <div className="input-group">
          <label htmlFor="description">Job Description:</label>
          <textarea
            name="description"
            id="description"
            cols="30"
            rows="10"
            value={formState.description || ""}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          className="add-experience-entry"
          type="button"
          onClick={handleAddExperienceEntry}
        >
          Add Experience Entry
        </button>
      </form>
      <h2>Layout</h2>
      <FormLayoutSection setResumeOrientation={setResumeOrientation} />
      <h2>Fonts</h2>
      <FormFontSection setFontClass={setFontClass} />
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <div className="modal-header">
              <span className="close-btn" onClick={() => toggleModal()}>
                ×
              </span>
            </div>
            <div className="modal-body">
              <p>{modalMessage}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function FormLayoutSection({ setResumeOrientation }) {
  function handleTopLayout() {
    setResumeOrientation("top");
  }

  function handleLeftLayout() {
    setResumeOrientation("left");
  }

  function handleRightLayout() {
    setResumeOrientation("right");
  }

  return (
    <div className="layout-choices">
      <button onClick={handleTopLayout}>
        <div className="top-choice choice"></div>
        Top
      </button>
      <button onClick={handleLeftLayout}>
        <div className="left-choice choice"></div>
        Left
      </button>
      <button onClick={handleRightLayout}>
        <div className="right-choice choice"></div>
        Right
      </button>
    </div>
  );
}

function FormFontSection({ setFontClass }) {
  function handleRobotoFont() {
    setFontClass("font-robot");
  }

  function handleNunitoFont() {
    setFontClass("font-nunito");
  }

  function handleTinosFont() {
    setFontClass("font-tinos");
  }

  return (
    <div className="font-choices">
      <button onClick={handleRobotoFont}>
        <div className="roboto-choice choice">Aa</div>
        Roboto
      </button>
      <button onClick={handleNunitoFont}>
        <div className="nunito-choice choice">Aa</div>
        Nunito
      </button>
      <button onClick={handleTinosFont}>
        <div className="tinos-choice choice">Aa</div>
        Tinos
      </button>
    </div>
  );
}

function Modal({ onClose }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <h2>Notice</h2>
          <div className="close-btn" onClick={onClose}>
            &times;
          </div>
        </div>
        <p>Please fill in all fields before adding an entry.</p>
      </div>
    </div>
  );
}
