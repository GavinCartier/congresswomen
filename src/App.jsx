import Header from "./components/header.jsx"; 
import Footer from "./components/footer.jsx"; 

import Sponsors from "./components/Sponsorship/Sponsors.jsx";
import { loadImagesFromDir } from "./utils/loadImagesFromDir.js";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const sponsors = loadImagesFromDir('sponsors');

  return (
    <>
      <Router>
        <Header />
        <Sponsors 
          sponsors={sponsors.map(sponsor => sponsor.logo)} // Extract logos from the loaded sponsors
        />
        <Footer />
      </Router>
    </>
  )
}

export default App
