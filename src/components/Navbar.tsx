import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-4 left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl z-50 transition-all duration-300 rounded-full ${isScrolled ? "bg-develup-darker/80 backdrop-blur-md py-3" : "bg-transparent py-4"
        }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold flex items-center">
          <span className="text-gradient">Develupers</span>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/#"
            className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-develup-darker/50"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-develup-darker/50"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-develup-darker/50"
          >
            Services
          </Link>
          <Link
            to="/careers"
            className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-develup-darker/50"
          >
            Careers
          </Link>

          {/* <Link
            to="/contact"
            className="text-white/80 hover:text-white transition-colors px-4 py-2 rounded-full hover:bg-develup-darker/50"
          >
            Contact
          </Link> */}
          <a href="/contact">
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full px-6">
              Contact
            </Button>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[68px] left-1/2 transform -translate-x-1/2 w-11/12 max-w-7xl rounded-2xl bg-develup-darker z-40 flex flex-col">
          <div className="container mx-auto py-6 flex flex-col space-y-4 px-6">
            <Link
              to="/"
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-develup-darker/50"
              onClick={toggleMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/services"
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-develup-darker/50"
              onClick={toggleMobileMenu}
            >
              Services
            </Link>
            <Link
              to="/careers"
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-develup-darker/50"
              onClick={toggleMobileMenu}
            >
              Careers
            </Link>
            <Link
              to="/about"
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-develup-darker/50"
              onClick={toggleMobileMenu}
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-white text-lg py-2 px-4 rounded-full hover:bg-develup-darker/50"
              onClick={toggleMobileMenu}
            >
              Contact
            </Link>
            <Button className="bg-develup-blue hover:bg-develup-blue/80 text-white rounded-full w-full mt-4 py-6">
              Get a Quote
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;