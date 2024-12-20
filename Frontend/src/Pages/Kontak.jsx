import { useState } from "react";
import NavHeader from "../Components/NavHeader";
import map from "../assets/map.png";
import call from "../assets/call.png";
import mail from "../assets/mail.png";
import koki from "../assets/koki.png";
import Footer from "../Components/Footer";
import axios from "axios";

const Kontak = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    pesan: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const dataToSend = {
      ...formData,
      tanggal_kirim: new Date(),
    };
  
    try {
      await axios.post("http://localhost:3001/api/kritik_saran", dataToSend);
      alert("Pesan berhasil dikirim!");
      setFormData({ username: "", email: "", pesan: "" }); 
    } catch (error) {
      if (error.response) {
        alert(`Error: ${error.response.data.message || 'Terjadi kesalahan'}`);
        console.error("Response error:", error.response.data);
      } else if (error.request) {
        alert("Error: Tidak ada respons dari server");
        console.error("Request error:", error.request);
      } else {
        alert("Error: " + error.message);
        console.error("General error:", error.message);
      }
    }
  };
  

  return (
    <>
      <NavHeader nav="Kontak" page="Beranda" pagenav1=">" page2="Kontak" />
      <div className="flex items-center p-5 space-x-20 mx-20">
        <div className="flex-1 w-64 h-auto">
          <h1 className="text-2xl text-pink-400 font-semibold font-satoshi-light">Lets Get In Touch</h1>
          <p className="text-secondary text-lg font-light font-satoshi-light mr-5">
            jika mengalami kendala pada website dapat menghungi kami langsung
          </p>
          <div className="flex flex-row text-sm font-light font-satoshi-light text-primary items-center mt-4">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2">
                <img src={map} alt="map" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">
                  Jalan Jendral Sudirman Thehok - Jambi 36138
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={call} alt="call" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">+62 822821789</p>
              </div>
              <div className="flex items-center space-x-2">
                <img src={mail} alt="mail" className="w-6 h-6" />
                <p className="text-secondary text-lg font-light font-satoshi-light">zulfahluthfiana@mail.com</p>
              </div>
              <div className="mt-4">
                <img src={koki} alt="koki" className="w-60 h-64" />
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 w-64 h-70 p-4 bg-pink-300 rounded-lg shadow-md">
          <h2 className="text-lg font-semibold mb-4 text-white">Kritik dan Saran</h2>
          <p className="text-sm mb-4 text-white">Berikan pendapatmu mengenai toko ini</p>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masukkan username"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Masukkan email"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
            </div>
            <div>
              <label htmlFor="pesan" className="block text-sm font-medium text-gray-700">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows="4"
                value={formData.pesan}
                onChange={handleChange}
                placeholder="Tulis pesan Anda"
                className="mt-1 w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-slate-50"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full bg-white text-black p-2 rounded-md hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-white"
            >
              Kirim
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Kontak;
