import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ContactForm from "./Components/ContactForm";
import Contact from "./Components/Contact";
// import { v4 as uuid } from "uuid";

import "./App.css";

function App() {
  const [contacts, setContacts] = useState([
    { name: "Kofi", number: "0244262575", location: "Togo" },
    { name: "Akwasi", number: "024378999", location: "Ghana" },
    { name: "Kwame", number: "055571234", location: "Guinea" },
  ]);
  const addContact = (name, location, number) => {
    setContacts([...contacts, { name, number, location }]);
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <ContactForm addContact={addContact} />
        </div>

        <div className="col-md-6">
          <Contact contacts={contacts} />
        </div>
      </div>
    </div>
  );
}

export default App;
