import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 

import SponsorshipPage from "./pages/SponsorshipPage.jsx";

import { useMemo } from "react";

import { loadImagesFromDir } from "./utils/loadImagesFromDir.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const sponsors = useMemo(() => loadImagesFromDir('sponsors'), []);

  return (
    <>
      <Router>
        <Header />
        <SponsorshipPage sponsors={sponsors}/>
        <Footer />
      </Router>
    </>
  )
}

export default App
