import { Link, useLocation, useNavigate } from "react-router-dom";
import NavHeader from "../Components/NavHeader";
import Footer from "../Components/Footer";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dataProduct } from "../Redux/action/productAction";

const Produk = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const { product } = useSelector((state) => state.productReducer);
  console.log("product", product);

  useEffect(() => {
    if (location.pathname.includes("/produk")) {
      dispatch(dataProduct());
    }
  }, [location, dispatch, navigate]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCards = product.filter((item) =>
    item.nama.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const noDataMessage = "Data produk tidak ditemukan";

  return (
    <>
      <NavHeader nav="Produk" page="Beranda" pagenav1=">" page2="Produk" />
      <div className="container mx-auto p-6">
        <div className="flex justify-center mb-8">
          <input
            type="text"
            placeholder="Cari Produk..."
            value={searchTerm}
            onChange={handleSearchChange}
            className="w-80 p-2 border border-pink-400 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredCards.length > 0 ? (
            filteredCards.map((card) => (
              <div
                key={card.id}
                className="bg-white rounded-lg  transition-shadow duration-200"
              >
                <div className="p-5 flex justify-center">
                  <Link to={`/produk/${card.id}`}>
                    <img
                      src={card.gambar}
                      alt={card.nama}
                      className="w-72 h-60 object-cover rounded-md"
                    />
                  </Link>
                </div>
                <div className="p-4 text-center">
                  <h3 className="uppercase tracking-wide text-sm text-slate-600 font-semibold mb-2">
                    {card.nama}
                  </h3>
                  <div className="flex justify-center mb-2">
                    <span className="text-yellow-500 text-sm">
                      {card.rating}
                    </span>
                  </div>
                  <div className="text-slate-700 font-semibold mb-2">
                    {card.harga}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center font-semibold text-lg text-gray-500">
              {searchTerm !== "" ? noDataMessage : "Tidak ada produk untuk ditampilkan"}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Produk;
