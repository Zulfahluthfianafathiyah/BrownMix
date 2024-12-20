import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-pink-300 shadow mt-10" id="social">
      <div className="container mx-auto px-4 py-10 flex flex-col lg:flex-row justify-between items-center">
        <div className="text-center lg:text-left mb-6 lg:mb-0">
          <p className="text-lg text-white">
            &copy; {new Date().getFullYear()} by <span className="font-bold">Zulfah Luthfiana Fathiyah</span>
          </p>
        </div>
        <div className="flex justify-center space-x-8 mb-6 lg:mb-0">
          <ul className="flex space-x-8 text-white">
            <li>
              <a href="#" className="font-medium hover:text-pink-600 transition">Informasi</a>
            </li>
            <li>
              <a href="#" className="font-medium hover:text-pink-600 transition">Layanan</a>
            </li>
            <li>
              <a href="mailto:BakriJambiIndonesia@gmail.com" className="font-medium hover:text-pink-600 transition">BakriJambiIndonesia@gmail.com</a>
            </li>
          </ul>
        </div>
        <div className="flex space-x-6">
          <a href="https://facebook.com" className="text-white hover:text-pink-600 transition">
            <FaFacebook size={24} />
          </a>
          <a href="https://twitter.com" className="text-white hover:text-pink-600 transition">
            <FaTwitter size={24} />
          </a>
          <a href="https://instagram.com" className="text-white hover:text-pink-600 transition">
            <FaInstagram size={24} />
          </a>
        
        </div>
      </div>
    </div>
  );
};

export default Footer;
