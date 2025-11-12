import React, { useState } from "react";
import { Link } from "react-scroll";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navitems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/5 border-b border-white/10">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center text-white font-bold text-xl">
                RK
              </div>
              <div>
                <h1 className="text-xl font-bold text-white">Raju <span className="text-emerald-400">Kakarla</span></h1>
                <p className="text-xs text-gray-300">Full Stack Developer</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navitems.map((item) => (
                <Link
                  key={item.id}
                  to={item.text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 font-medium cursor-pointer"
                >
                  {item.text}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden" onClick={handleMenu}>
              {menu ? (
                <IoCloseSharp size={28} className="text-white" />
              ) : (
                <AiOutlineMenu size={28} className="text-white" />
              )}
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-slate-900/95 backdrop-blur-md flex flex-col items-center justify-center z-40">
          <button onClick={handleMenu} className="absolute top-5 right-5">
            <IoCloseSharp size={32} className="text-white" />
          </button>
          <ul className="space-y-8 text-xl font-semibold">
            {navitems.map((item) => (
              <li key={item.id} className="text-center">
                <Link
                  to={item.text}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  activeClass="active"
                  onClick={handleMenu}
                  className="text-gray-300 hover:text-emerald-400 transition-colors duration-300 cursor-pointer block py-2"
                >
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Navbar;
