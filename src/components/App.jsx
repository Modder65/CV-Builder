import { useState } from "react";
import "../styles/App.css";
import { Resume } from "./Resume.jsx";
import { Form } from "./Form.jsx";

function App() {
  const [formState, setFormState] = useState({
    fullName: "Name Here",
    email: "Email Here",
    phone: "Phone Number Here",
    location: "Location Here",
    description: "",
  });

  const [educationEntries, setEducationEntries] = useState([]);
  const [experienceEntries, setExperienceEntries] = useState([]);

  const [resumeOrientation, setResumeOrientation] = useState("top");
  const [fontClass, setFontClass] = useState("");


  return (
    <div className="app">
      <Form
        formState={formState}
        setFormState={setFormState}
        educationEntries={educationEntries}
        setEducationEntries={setEducationEntries}
        experienceEntries={experienceEntries}
        setExperienceEntries={setExperienceEntries}
        resumeOrientation={resumeOrientation}
        setResumeOrientation={setResumeOrientation}
        fontClass={fontClass}
        setFontClass={setFontClass}
      />

      <Resume
        formState={formState}
        educationEntries={educationEntries}
        experienceEntries={experienceEntries}
        resumeOrientation={resumeOrientation}
        fontClass={fontClass}
      />
    </div>
  );
}

export default App;
