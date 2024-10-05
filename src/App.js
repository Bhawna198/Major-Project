
import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [isBlackHovered, setIsBlackHovered] = useState(false);
  const [isWhiteHovered, setIsWhiteHovered] = useState(false);

  // Event listener to track scroll position
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Effect to attach and detach the scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Determine opacity and transform based on scroll position
  const whiteSectionStyle = {
    opacity: scrollY < window.innerHeight / 1.5 ? 1 : 0,
    transform: scrollY < window.innerHeight / 1.5 ? "translateY(0)" : "translateY(-20px)",
  };

  const blackSectionStyle = {
    opacity: scrollY > window.innerHeight / 1.5 ? 1 : 0,
    transform: scrollY > window.innerHeight / 1.5 ? "translateY(0)" : "translateY(20px)",
  };

  // Handle hover events to change background of the whole page
  const handleMouseEnterWhite = () => {
    setIsWhiteHovered(true);
    setIsBlackHovered(false);
  };

  const handleMouseEnterBlack = () => {
    setIsWhiteHovered(false);
    setIsBlackHovered(true);
  };

  const handleMouseLeave = () => {
    setIsWhiteHovered(false);
    setIsBlackHovered(false);
  };

  return (
    <div className={`container ${isBlackHovered ? "bg-black" : isWhiteHovered ? "bg-white" : ""}`}>
      {/* Header */}
      <header className="header">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>

      {/* White Section */}
      <div
        className="section white"
        style={whiteSectionStyle}
        onMouseEnter={handleMouseEnterWhite}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="fade-in hover-animate">"The best way to predict the future is to create it."</h1>
        <p className="fade-in hover-animate">– Peter Drucker</p>
      </div>

      {/* Black Section */}
      <div
        className="section black"
        style={blackSectionStyle}
        onMouseEnter={handleMouseEnterBlack}
        onMouseLeave={handleMouseLeave}
      >
        <h1 className="fade-in hover-animate">"Do not wait for the perfect moment, take the moment and make it perfect."</h1>
        <p className="fade-in hover-animate">– Unknown</p>
      </div>

      {/* Footer */}
      <footer className="footer">
        <p>© 2024 MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

