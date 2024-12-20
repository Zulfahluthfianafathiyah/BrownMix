import Promo from "../assets/Promo.jpg";
import rate from "../assets/rate.png";

const Riview = () => {
  return (
    <div className="border-b-2">
      <div className="flex flex-col items-center">
        <div className="mx-auto mt-10 mb-10 px-8">
          <h1 className="text-cyan text-3xl text-slate-500 font-Satoshi-Regular mb-8">
            Ulasan terbaru kami
          </h1>
          <div className="max-w-[1240px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="p-5 text-center">
                <img
                  src={Promo}
                  alt="image1"
                  className="rounded-full w-12 h-14 object-cover mx-auto"
                />
                <a href="#" className="text-black font-bold">
                  Zaskia Sasla
                </a>
                <p className="mt-1 text-sm text-slate-500">Ibu Rumah Tangga</p>
              </div>
              <div className="p-4 text-center">
                <img src={rate} alt="rating" className="w-24 mx-auto mb-2" />
                <p className="text-slate-500">
                  Cake ini sangat enak dan enak baik untuk dikonsumsi oleh siapa
                  saja termasuk anak kecil.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="p-5 text-center">
                <img
                  src={Promo}
                  alt="image2"
                  className="rounded-full w-12 h-14 object-cover mx-auto"
                />
                <a href="#" className="text-black font-bold">
                  John Doe
                </a>
                <p className="mt-1 text-sm text-slate-500">Pengusaha</p>
              </div>
              <div className="p-4 text-center">
                <img src={rate} alt="rating" className="w-24 mx-auto mb-2" />
                <p className="text-slate-500">
                  Rasa kue ini luar biasa! Selalu menjadi favorit keluarga kami di
                  setiap acara spesial.
                </p>
              </div>
            </div>
            <div className="max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden hover:animate-pulse">
              <div className="p-5 text-center">
                <img
                  src={Promo}
                  alt="image3"
                  className="rounded-full w-12 h-14 object-cover mx-auto"
                />
                <a href="#" className="text-black font-bold">
                  Anita Lestari
                </a>
                <p className="mt-1 text-sm text-slate-500">Guru</p>
              </div>
              <div className="p-4 text-center">
                <img src={rate} alt="rating" className="w-24 mx-auto mb-2" />
                <p className="text-slate-500">
                  Tekstur dan rasa yang sempurna! Sangat cocok sebagai hadiah atau
                  untuk camilan di sore hari.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riview;
