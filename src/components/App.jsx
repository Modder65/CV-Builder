import { useState } from "react";
import "../styles/App.css";
import ResumeContainer from "./Resume.jsx";
import EditSide from "./Form.jsx";

function App() {
  return (
    <div className="app">
      <EditSide />
      <ResumeContainer />
    </div>
  );
}

export default App;
