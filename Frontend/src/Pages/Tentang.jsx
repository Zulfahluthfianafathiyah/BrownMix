import NavHeader from "../Components/NavHeader";
import rumah from "../assets/rumah.jpeg";
import karyawan1 from "../assets/karyawan1.jpeg";
import CEK4 from "../assets/CEK4.jpeg";
import karyawan3 from "../assets/karyawan3.jpeg";
import karyawan6 from "../assets/karyawan6.jpeg";
import karyawan5 from "../assets/karyawan5.jpeg";
import CEK3 from "../assets/CEK3.jpeg";
import Footer from "../Components/Footer";

const Tentang = () => {
  return (
    <>
      <NavHeader nav="Tentang" page="Beranda" pagenav1=">" page2="Tentang" />

      <div className="container mx-auto px-4 mb-16">
        <div className="fto grid grid-cols-1 md:grid-cols-2 items-center gap-16 pt-8">
          <div className="box">
            <img
              src={rumah}
              alt="Foto Image 9"
              className="lg:w-[500px] w-[200px] h-auto md:ml-auto md:mr-0 mx-auto"
            />
          </div>
          <div className="box">
            <h1 className="text-4xl lg:text-5xl font-medium mb-4">
              <span className="font-bold text-slate-500 underline">
                Rumah Produksi
              </span>
            </h1>
            <p className="text-base leading-relaxed">
            Brownmix adalah toko roti yang berdiri sejak tahun 2018 dan menjadi pelopor di Jambi 
            sebagai toko roti pertama yang selalu menghadirkan inovasi roti terbaru, mengikuti tren 
            seperti di luar negeri. Meskipun selalu up-to-date dengan berbagai jenis roti modern,
             Brownmix tetap mempertahankan komitmen untuk menyajikan roti yang sehat dan berkualitas.
              Setiap gigitan dari roti Brownmix tidak hanya memanjakan lidah, tetapi juga mendukung 
              gaya hidup sehat untuk keluarga tercinta. Nikmati kelezatan roti berkualitas tinggi
             dan sehat hanya di Brownmix, di mana inovasi dan kesehatan berjalan seiring untuk kebahagiaan keluarga Anda.
             </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {[karyawan1, CEK4, karyawan3, karyawan5, karyawan6, CEK3].map((img, index) => (
            <div key={index} className="w-full h-96 relative">
              <img
                src={img}
                alt={`Image`}
                className="w-full h-full object-cover "
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-3 rounded-b-lg">
                <p className="text-lg">{`Aktivitas Toko Brownmix`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Tentang;
