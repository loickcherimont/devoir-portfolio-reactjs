import { Route, Routes } from "react-router";
import Header from "./components/header/Header";
import Home from "./components/pages/Home";
import Services from "./components/pages/Services";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import MentionsLegales from "./components/pages/MentionsLegales";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="nunito-sans--body">
      <Header />

      {/* Routing */}
      <Routes>
        <Route index element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="mentions-legales" element={<MentionsLegales />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
