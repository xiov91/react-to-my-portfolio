import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import About from './components/About';
import Nav from './components/Nav';
import ContactForm from './components/Contact';

const App = () => {
  const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
    <Nav
    contactSelected={contactSelected}
    setContactSelected={setContactSelected}
  ></Nav>
    <main>
      {!contactSelected ? (
        <>
        <About></About>
        </>
      ) : (
        <ContactForm></ContactForm> 
      )}
        </main>
        </div>
  );
}

export default App;