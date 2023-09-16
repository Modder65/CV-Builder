import { inputGroups, educationFormFields, experienceFormFields } from "./data.jsx";
import { v4 as uuidv4 } from 'uuid';

export function Form({ formState, setFormState, educationEntries, setEducationEntries, experienceEntries, setExperienceEntries }) {
  function handleChange(e) {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  }

  function handleAddEducationEntry() {
    setEducationEntries(prev => [
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
    setExperienceEntries(prev => [
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
              value={formState[inputGroup.name] || ''}
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
              value={formState[inputGroup.name] || ''}
              onChange={handleChange}
            />
          </div>
        ))}
        <button className="add-education-entry" type="button" onClick={handleAddEducationEntry}>Add Education Entry</button>
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
              value={formState[inputGroup.name] || ''}
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
            value={formState.description || ''}
            onChange={handleChange}
          ></textarea>
        </div>
        <button className="add-experience-entry" type="button" onClick={handleAddExperienceEntry}>Add Experience Entry</button>
      </form>
    </div>
  );
}
