import { useState } from "react";
import "../styles/App.css";
import ResumeContainer from "./Resume.jsx";
import EditSide from "./Form.jsx";

function App() {
  const [fullName, setFullName] = useState("Josephine Meyers");
  const [email, setEmail] = useState("josephine.meyers@mail.co.uk");
  const [phone, setPhone] = useState("+44 3245 5521 5521");
  const [address, setAddress] = useState("London, UK");

  return (
    <div className="app">
      <EditSide
        fullName={fullName}
        setFullName={setFullName}
        email={email}
        setEmail={setEmail}
        phone={phone}
        setPhone={setPhone}
        address={address}
        setAddress={setAddress}
      />
      <ResumeContainer
        fullName={fullName}
        email={email}
        phone={phone}
        address={address}
      />
    </div>
  );
}

export default App;
