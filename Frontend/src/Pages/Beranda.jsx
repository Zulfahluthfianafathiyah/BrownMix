import Hero from "../components/Hero";
import HeroItem from "../Components/Heroitem";
import Riview from "../Components/Riview";
import Aktivitas from "../Components/Aktivias";
import Footer from "../Components/Footer";



const Beranda = () => {
  return (
    <div className="">
      <Hero />
      <HeroItem/>
      <Riview />
      <Aktivitas/> 
      <Footer/>
    </div>
  );
};

export default Beranda;