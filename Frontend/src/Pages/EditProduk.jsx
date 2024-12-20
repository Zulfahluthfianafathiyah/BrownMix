import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import NavHeader from "../Components/NavHeader";


const EditProduk = () => {
  const { id } = useParams(); 
  const [nama, setNama] = useState("");
  const [harga, setHarga] = useState("");
  const [gambar, setGambar] = useState("");
  const [varianRasa, setVarianRasa] = useState("");
  const [bentuk, setBentuk] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();


  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/api/product/${id}`);
        const product = response.data.product;

        setNama(product.nama);
        setHarga(product.harga);
        setGambar(product.gambar);
        setVarianRasa(product.varian_rasa);
        setBentuk(product.bentuk);
        setDeskripsi(product.deskripsi);
      } catch (error) {
        console.error("Error fetching product:", error.message);
        alert("Gagal mengambil data produk!");
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!nama || !harga || !gambar || !varianRasa || !bentuk || !deskripsi) {
      alert("Harap isi semua kolom!");
      return;
    }

    try {
      const response = await axios.put(`http://localhost:3001/api/product/${id}`, {
        nama,
        harga,
        gambar,
        varian_rasa: varianRasa,
        bentuk,
        deskripsi,
      });

      alert("Produk berhasil diperbarui!");
      console.log(response.data);
      navigate("/produk"); 
    } catch (error) {
      console.error("Error updating product:", error.message);
      alert("Gagal memperbarui produk!");
    }
  };

  return (
    <>
     <NavHeader nav="MenuAdmin" page="Admin" pagenav1=">" page2="Edit Produk" />
    <div className="flex justify-center items-center min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-lg w-full bg-white rounded-lg shadow-md p-6">
        <h2 className="text-xl font-semibold text-pink-600 text-center mb-4">Edit Produk</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="nama" className="block text-sm font-medium text-gray-700 mb-2">
              Nama Produk
            </label>
            <input
              type="text"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              placeholder="Masukkan nama produk"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="harga" className="block text-sm font-medium text-gray-700 mb-2">
              Harga Produk
            </label>
            <input
              type="number"
              id="harga"
              value={harga}
              onChange={(e) => setHarga(e.target.value)}
              placeholder="Masukkan harga produk"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="gambar" className="block text-sm font-medium text-gray-700 mb-2">
              Gambar Produk (URL)
            </label>
            <input
              type="text"
              id="gambar"
              value={gambar}
              onChange={(e) => setGambar(e.target.value)}
              placeholder="Masukkan URL gambar produk"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="varianRasa" className="block text-sm font-medium text-gray-700 mb-2">
              Varian Rasa
            </label>
            <input
              type="text"
              id="varianRasa"
              value={varianRasa}
              onChange={(e) => setVarianRasa(e.target.value)}
              placeholder="Masukkan varian rasa"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="bentuk" className="block text-sm font-medium text-gray-700 mb-2">
              Bentuk
            </label>
            <input
              type="text"
              id="bentuk"
              value={bentuk}
              onChange={(e) => setBentuk(e.target.value)}
              placeholder="Masukkan bentuk produk"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="deskripsi" className="block text-sm font-medium text-gray-700 mb-2">
              Deskripsi
            </label>
            <textarea
              id="deskripsi"
              rows="3"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
              placeholder="Masukkan deskripsi produk"
              className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all duration-200"
          >
            Simpan Perubahan
          </button>
        </form>
      </div>
    </div>
    </>
  );
};

export default EditProduk;
