import React from "react";

import { Navbar, Home, About, Services, Process, Clients, Contact, Footer } from './components'

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Process />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
