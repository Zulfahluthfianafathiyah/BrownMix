import NavHeader from "../Components/NavHeader";
import image5 from "../assets/image5.png";
import Footer from "../Components/Footer";
import styles from "../style";
import promo from "../assets/promo.png";

const Layanan = () => {
  return (
    <>
    
      <NavHeader nav="Layanan" page="Beranda" pagenav1=">" page2="Layanan" />
      <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
        <div className="flex flex-col md:flex-row gap-6">
            <div className="flex-1">
            </div>
            <div className="w-80 h-28ml-6">
              <img
                src={image5}
                alt="Strawberry Cake"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          <div className="flex-1 flex flex-col gap-6">
          <div className="col-span-1">
            <h1 className="text-3xl font-medium mb-2">
              <span className="font-bold text-pink-300 underline">Hadir untuk Pelanggan</span>
            </h1>
            <p className="text-base">Brownmix selalu mengutamakan kepuasan pelanggan 
              dengan menghadirkan keramahan dan kenyamanan 
              di setiap layanan yang diberikan. </p>
          </div>
            <div className="b p-4 flex items-center">
            <div className="col-span-1">
            <h1 className="text-3xl font-medium mb-2">
              <span className="font-bold text-pink-300 underline">Halal & BPOM </span>
            </h1>
            <p className="text-base">Seluruh Produk Brownmix telah mendapatkan sertifikasi halal
              dari Majelis Ulama Indonesia (MUI) dan terdaftar di BPOM. Dengan komitmen penuh 
              terhadap kualitas, keamanan, dan kehalalan, kami memastikan setiap roti yang 
              kami sajikan tidak hanya lezat,tetapi juga aman dan sesuai dengan standar
               kesehatan dan syariat Islam</p>
          </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
          <div className="col-span-1">
            <h1 className="text-3xl font-medium mb-2">
              <span className="font-bold text-pink-300 underline">Kesehatan </span>
            </h1>
            <p className="text-base">Semua produk yang kami jual menggunakan bahan-bahan pilihan dengan
               kandungan gula yang rendah, 
               sehingga baik untuk dikonsumsi oleh semua 
               kalangan, termasuk anak-anak dan orang tua </p>
          </div>
            <div className=" p-4 flex items-center">
            <div className="col-span-1">
            <h1 className="text-3xl font-medium mb-2">
              <span className="font-bold text-pink-300 underline">Jam Operasional </span>
            </h1>
            <p className="text-base"> Buka Setiap Hari 
              Pukul 10.00 - 20.00 WIB </p>
          </div>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mb-16">
        <div className="fto grid grid-cols-1 md:grid-cols-2 items-center gap-16 pt-8">
  <div className="box">
    <h1 className="text-4xl lg:text-5xl font-medium mb-4">
      <span className="font-bold text-slate-500 underline">
        Promo And GiveAway
      </span>
    </h1>
    <p className="text-base leading-relaxed">
      Dapatkan kesempatan untuk menikmati promo dan GiveAway menarik setiap harinya 
      hanya di Brownmix! Kami selalu hadir dengan penawaran spesial yang pastinya 
      sayang untuk dilewatkan, terutama di setiap Live kami. Jangan lewatkan 
      kesempatan untuk mendapatkan produk berkualitas dengan harga spesial dan berbagai hadiah menarik! 
      Ikuti kami di @brownmix dan jadilah yang pertama mengetahui semua penawaran eksklusif serta 
      kejutan lainnya. Ayo, segera follow dan rasakan pengalaman berbelanja yang menyenangkan bersama Brownmix!
    </p>
  </div>
  <div className="box text-center">
    <img
      src={promo}
      alt="Promo Image"
      className="lg:w-[500px] w-[400px] h-auto mx-auto "
    />
  </div>
</div>
</div>
      </section>
      <div className="div" style={{ marginBottom: "20px" }}>
      <h1
  className="text-cyan text-3xl text-slate-500 font-Satoshi-Regular mb-8"
  style={{textAlign: "center",margin: "0 auto", }} > Maps Lokasi Toko </h1>
</div>
<div style={{ display: "flex", justifyContent: "center" }}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.203062887181!2d103.57374427350298!3d-1.630409136095975!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e2587355e722aed%3A0x1a8f093998a661df!2sBrownMix%20Factory!5e0!3m2!1sid!2sid!4v1734253282533!5m2!1sid!2sid"
    width="1200"
    height="300"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
      <Footer />
    </>
  );
};

export default Layanan;
