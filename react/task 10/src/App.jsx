import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import Services from "./pages/Services";
import WebDev from "./pages/services/WebDev";
import AppDev from "./pages/services/AppDev";
import UIUX from "./pages/services/UX";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        {/* Nested Routing */}
        <Route path="/services" element={<Services />}>
          <Route path="web" element={<WebDev />} />
          <Route path="app" element={<AppDev />} />
          <Route path="uiux" element={<UIUX />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;