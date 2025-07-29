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

import FormfacadeEmbed from "@formfacade/embed-react";



<FormfacadeEmbed

formFacadeURL="https://formfacade.com/include/105375484473876485167/form/1FAIpQLSfUoGErrb0mzYkx2_MzEsxP7Vf0vKEIOzlpRYHZ6ovW1jChrQ/classic.js/?div=ff-compose"

onSubmitForm={() => console.log('Form submitted')}

/>

function App() {
  const sponsors = useMemo(() => loadImagesFromDir('sponsors'), []);
  const speakers = useMemo(() => loadImagesFromDir('speakers'), []);

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
              <Speakers speakers={speakers.map((speaker, index) => ({
                image: speaker.logo,
                name: `Speaker ${index+1}`
              }))}/>
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
