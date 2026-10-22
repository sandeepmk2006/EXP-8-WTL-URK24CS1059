import React from "react";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";
import Contact from "./pages/Contact";
import "./App.css";

function NotFound() {
  return (
    <div className="card">
      <h2>Page not found</h2>
      <p className="center">That page does not exist.</p>
      <div className="center">
        <Link className="button" to="/">Back to Home</Link>
      </div>
    </div>
  );
}

function App() {
  return (
    <HashRouter>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/register" element={<Register />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
