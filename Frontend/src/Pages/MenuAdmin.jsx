
import NavHeader from "../Components/NavHeader";
import { Link } from "react-router-dom";

const MenuAdmin = () => {
  return (
    <>
      <NavHeader nav="MenuAdmin" page="Admin" pagenav1=">" page2="HalamanAdmin" />
      <div className="container mx-auto px-4 py-10">
        <h1 className="text-4xl font-bold text-center mb-6 text-pink-500">
          Halaman Admin
        </h1>
        <p className="text-gray-600 text-center mb-10">
          Selamat datang di halaman Admin. Kelola data dan konfigurasi di sini.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-6">
          {/* Tombol Tambah Produk */}
          <Link
            to="/addproduk"
            className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-medium text-center shadow-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            Tambah Produk
          </Link>

          {/* Tombol Lihat Produk */}
          <Link
            to="/hasil"
            className="w-full sm:w-auto px-6 py-3 bg-pink-500 text-white rounded-lg text-lg font-medium text-center shadow-md hover:bg-pink-600focus:outline-none focus:ring-2 focus:ring-pink-300 transition-all"
          >
            Lihat Produk
          </Link>
        </div>
      </div>
    </>
  );
};

export default MenuAdmin;
