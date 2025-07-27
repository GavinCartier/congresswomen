import React, { useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 
import SponsorshipPage from "./pages/SponsorshipPage.jsx";
import AwardsPage from "./pages/AwardsPage.jsx"
import MainPage from "./components/mainpage.jsx";

import Number from "./components/number.jsx"
import SponsorshipOpportunities from "./components/SponsorshipOpportunities/SponsorshipOpportunities.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Sponsors from "./components/Sponsorship/Sponsors.jsx";
import { loadImagesFromDir } from "./utils/loadImagesFromDir.js";

function App() {
  const sponsors = useMemo(() => loadImagesFromDir('sponsors'), []);

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <MainPage />
              <Number />
              <SponsorshipOpportunities />
              <Speakers />
              <Sponsors sponsors={sponsors} />
            </>
          }/>

          <Route path="/sponsorships" element = {
            <>
              <SponsorshipPage sponsors={sponsors} // Extract logos from the loaded sponsors
              />
            </>
          }/>
        <Route path="/globalawards" element={<AwardsPage />} />  
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
