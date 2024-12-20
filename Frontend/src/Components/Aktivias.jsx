import karyawan1 from "../assets/karyawan1.jpeg";
import karyawan2 from "../assets/karyawan2.jpeg";
import karyawan3 from "../assets/karyawan3.jpeg";




const Aktivitas = () => {
  return (
    <div className="">
        <div className="flex flex-col items-center">
        <div className="mx-auto mt-10 mb-10 px-8">
      <h1 className="text-cyan text-3xl text-pink-300 font-Satoshi-Regular mb-8">
        Aktivitas
      </h1>
    
        <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[karyawan1, karyawan2, karyawan3].map((img, index) => (
            <div key={index} className="w-96 h-96 relative">
              <img
                src={img}
                alt={`Image`}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-center py-3 rounded-b-lg">
                <p className="text-lg">{`Akrivitas Toko BrownMix`}</p>
              </div>
            </div>
          ))}
        </div>
    </div>
    </div>
    </div>
  );
};

export default Aktivitas;
