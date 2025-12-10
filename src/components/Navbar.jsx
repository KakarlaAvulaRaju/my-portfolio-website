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
      <header className="fixed top-0 w-full z-50 bg-white bg-opacity-95 backdrop-blur-lg shadow-md border-b border-blue-100">
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-900 to-blue-500 flex items-center justify-center text-white font-bold text-xl">
              RK
            </div>
            <div>
              <h1 className="text-xl font-bold text-blue-900">Raju <span className="text-blue-500">Kakarla</span></h1>
              <p className="text-xs text-blue-500">Full Stack Developer</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navitems.map((item) => (
              <Link
                key={item.id}
                to={item.text}
                smooth={true}
                duration={500}
                offset={-70}
                activeClass="active"
                className="text-blue-900 font-semibold cursor-pointer px-3 py-2 rounded-lg border border-blue-100 transition-all duration-700 ease-in-out"
                style={{
                  boxShadow: '0 0 0 1px #3B82F6, 0 0 12px 1px #3B82F6AA',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                  e.currentTarget.style.backgroundSize = '200% auto';
                  e.currentTarget.style.backgroundPosition = 'right center';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.boxShadow = '0 0 20px #eee';
                  e.currentTarget.style.borderRadius = '10px';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundImage = '';
                  e.currentTarget.style.backgroundSize = '';
                  e.currentTarget.style.backgroundPosition = '';
                  e.currentTarget.style.color = '#1E3A8A';
                  e.currentTarget.style.boxShadow = '';
                  e.currentTarget.style.borderRadius = '';
                }}
              >
                {item.text}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden" onClick={handleMenu}>
            {menu ? (
              <IoCloseSharp size={28} className="text-blue-900" />
            ) : (
              <AiOutlineMenu size={28} className="text-blue-900" />
            )}
          </div>
        </nav>
      </header>

      {/* Mobile Menu */}
      {menu && (
        <div className="fixed top-0 left-0 w-full h-screen bg-white bg-opacity-95 backdrop-blur-lg flex flex-col items-center justify-center z-40">
          <button onClick={handleMenu} className="absolute top-5 right-5">
            <IoCloseSharp size={32} className="text-blue-900" />
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
                  className="text-blue-900 font-semibold cursor-pointer px-4 py-3 rounded-lg border border-blue-100 transition-all duration-700 ease-in-out block"
                  style={{
                    boxShadow: '0 0 0 2px #3B82F6, 0 0 12px 2px #3B82F6AA',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #1E3A8A 0%, #3B82F6 51%, #1E3A8A 100%)';
                    e.currentTarget.style.backgroundSize = '200% auto';
                    e.currentTarget.style.backgroundPosition = 'right center';
                    e.currentTarget.style.color = '#fff';
                    e.currentTarget.style.boxShadow = '0 0 20px #eee';
                    e.currentTarget.style.borderRadius = '10px';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.backgroundImage = '';
                    e.currentTarget.style.backgroundSize = '';
                    e.currentTarget.style.backgroundPosition = '';
                    e.currentTarget.style.color = '#1E3A8A';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.borderRadius = '';
                  }}
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
