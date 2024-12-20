import { useState } from "react";
import { Link } from "react-router-dom";
import logobru from "../assets/logobru.png";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {
  const [showLoginText, setShowLoginText] = useState(false);

  const handleIconClick = () => {
    setShowLoginText((prev) => !prev);
  };

  return (
    <div className="bg-pink-300">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src={logobru} alt="Cakenav" className="w-32" />
          <h1 className="text-xl font-bold text-white"></h1>
        </div>
        <div className="hidden md:flex space-x-8">
          <Link
            to="/"
            className="text-white text-base font-semibold hover:text-pink-700 transition duration-300">
            Beranda
          </Link>
          <Link
            to="/tentang"
            className="text-white text-base font-semibold hover:text-pink-700 transition duration-300">
            Tentang
          </Link>
          <Link
            to="/produk"
            className="text-white text-base font-semibold hover:text-pink-700 transition duration-300">
            Produk
          </Link>
          <Link
            to="/layanan"
            className="text-white text-base font-semibold hover:text-pink-700 transition duration-300">
            Layanan
          </Link>
          <Link
            to="/kontak"
            className="text-white text-base font-semibold hover:text-pink-700 transition duration-300">
            Kontak
          </Link>
        </div>
        <div className="flex items-center space-x-4 text-white text-3xl relative">
          <FiAlignJustify
            className="cursor-pointer hover:text-pink-700 transition duration-300"
            onClick={handleIconClick}
          />
          {showLoginText && (
            <Link
              to="/login"
              className="absolute top-3 right-1 text-white px-4 py-2 rounded shadow-lg text-sm font-semibold">
              Login Admin
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
