import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 

import SponsorshipPage from "./pages/SponsorshipPage.jsx";

import { useMemo } from "react";

import { loadImagesFromDir } from "./utils/loadImagesFromDir.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/mainpage.jsx";
import Number from "./components/number.jsx"

function App() {
  const sponsors = useMemo(() => loadImagesFromDir('sponsors'), []);

  return (
    <>
      <Router>
        <Header />
        <MainPage />
        <Number />
        <SponsorshipPage sponsors={sponsors} // Extract logos from the loaded sponsors
        />
        <Footer />
      </Router>
    </>
  )
}

export default App
