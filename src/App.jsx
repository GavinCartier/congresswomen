import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 

import SponsorshipPage from "./pages/SponsorshipPage.jsx";

import { useMemo } from "react";

import { loadImagesFromDir } from "./utils/loadImagesFromDir.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from "./components/mainpage.jsx";
import Number from "./components/number.jsx"
import SponsorshipOpportunities from "./components/SponsorshipOpportunities/SponsorshipOpportunities.jsx";
import Speakers from "./components/Speakers/Speakers.jsx";
import Sponsors from "./components/Sponsorship/Sponsors.jsx";

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
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App;
