import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Impact from "./components/Impact";
import Catalogue from "./components/Catalogue";
import APropos from "./components/APropos";
import Actualites from "./components/Actualites";
import FaireUnDon from "./components/FaireUnDon";
import EnSavoirPlus from "./components/EnSavoirPlus";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <Impact /> {/* Ajout de Impact */}
              </div>
            }
          />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/a-propos" element={<APropos />} />
          <Route path="/actualites" element={<Actualites />} />
          <Route path="/faire-un-don" element={<FaireUnDon />} />
          <Route path="/en-savoir-plus" element={<EnSavoirPlus />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
