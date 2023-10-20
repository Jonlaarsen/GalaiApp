import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Menu from "./pages/Menu";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Hamburger from "./components/Hamburger";
import Navbar from "./components/Navbar";
import { useState, useRef, useEffect } from "react";
import About from "./pages/About";
import Book from "./pages/Book";
import Business from "./pages/Business";

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

function App() {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
  return (
    <div>
      <div ref={node}>
        <Hamburger open={open} setOpen={setOpen} />
        <Navbar open={open} setOpen={setOpen} />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Meny" element={<Menu />} />
        <Route path="/About" element={<About />} />
        <Route path="/Boka-bord" element={<Book />} />
        <Route path="/Business" element={<Business />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
