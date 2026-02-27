import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Events from "./pages/Events";
import Conference from "./pages/Conference";
import Contact from "./pages/Contact";
import Schedule from "./pages/Schedule";
import Committee from "./pages/Committee";
import Theme from "./pages/Theme";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/events" element={<Events />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/committee" element={<Committee />} />
          <Route path="/theme" element={<Theme />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}
