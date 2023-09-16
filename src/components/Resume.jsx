import { v4 as uuidv4 } from 'uuid';
import emailIcon from "../assets/imgs/email.svg";
import phoneIcon from "../assets/imgs/phone.svg";
import locationIcon from "../assets/imgs/location.svg";

export function Resume({ formState, educationEntries, experienceEntries }) {
  return (
    <div className="resume-container">
      <ResumeHeader formState={formState}/>
      <ResumeContent formState={formState} educationEntries={educationEntries} experienceEntries={experienceEntries}/>
    </div>
  );
}

function ResumeHeader({ formState }) {
  return (
    <div className="resume-header">
      <h1>{formState.fullName}</h1>
      <div className="resume-contact-info">
        <div className="contact">
          <img src={emailIcon} alt="Email icon" />
          <p>{formState.email}</p>
        </div>
        <div className="contact">
          <img src={phoneIcon} alt="Phone Icon" />
          <p>{formState.phone}</p>
        </div>
        <div className="contact">
          <img src={locationIcon} alt="Location Icon" />
          <p>{formState.location}</p>
        </div>
      </div>
    </div>
  );
}

function ResumeContent({ educationEntries, experienceEntries }) {
  return (
    <div className="resume-content">
      <h2>Education</h2>
      {educationEntries.map((entry) => (
        <div className="education-entry" key={entry.id}>
          <div className="education-entry-info">
            <p className="dates">{`${entry.schoolStartDate} - ${entry.schoolEndDate}`}</p>
            <p>{entry.schoolLocation}</p>
          </div>
          <div className="education-entry-info">
            <p className="education-entry-schoolName">{entry.school}</p>
            <p className="education-entry-degree">{entry.degree}</p>
          </div>
        </div>
      ))}
      <h2>Experience</h2>
      {experienceEntries.map((entry) => (
        <div className="experience-entry" key={entry.id}>
          <div className="experience-entry-info">
            <p className="dates">{`${entry.workStartDate} - ${entry.workEndDate}`}</p>
            <p>{entry.workLocation}</p>
          </div>
          <div className="experience-entry-info">
            <p className="experience-entry-companyName">{entry.companyName}</p>
            <p className="experience-entry-position">{entry.position}</p>
            <p className="experience-entry-description">{entry.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
