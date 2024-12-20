import Cakenav from "../assets/Cakenav.png";
import strawberry from "../assets/strawbery.png";


const Hero = () => {
    return (
      <>
        <section className="relative bg-pink-300">
  <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
    <div className="flex-1 flex flex-col justify-center relative mb-6 md:mb-0">
      <img
        src={strawberry}
        alt="Strawberry"
        className="absolute top-0 left-4 w-20 md:w-40"
      />
      <h1 className="text-pink-600 text-4xl md:text-5xl font-bold leading-tight ml-24">
        Ciptakan Kenangan Indah Bersama Kue Kami
      </h1>
      <p className="text-gray-700 text-lg md:text-xl font-sans leading-relaxed mt-4 ml-24">
        Di sini, setiap kue bukan hanya sekadar makanan, tetapi juga cerita. Kami hadir untuk melengkapi
        momen-momen spesial dengan kelezatan dan cinta dalam setiap lapisan.
        Dari ulang tahun hingga perayaan kecil, biarkan kue kami menjadi bagian dari kenangan manis Anda.
      </p>
      <div className="mt-6 ml-24">
        <button className="hover:bg-white text-base bg-white text-black py-3 rounded-full font-semibold px-8">
          Produk
        </button>
      </div>
    </div>
    <div className="flex-1 flex justify-center">
      <img
        src={Cakenav}
        alt="Cakenav"
        className="w-100 h-[550px] object-cover rounded-lg md:flex-row"
      />
    </div>
  </div>
</section>
      </>
    );
  };
  
  export default Hero;

  
  