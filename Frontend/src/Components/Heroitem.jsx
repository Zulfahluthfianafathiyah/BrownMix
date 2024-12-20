import cake2 from "../assets/cake2.jpeg";
import cake6 from "../assets/cake6.jpeg";
import cake7 from "../assets/cake7.jpeg";



const HeroItem = () => {
  return (
    <div className="border">
      <div className="flex flex-col items-center mx-auto mb-8 mt-20">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex-1 bg-[#F8F8F8] p-6 flex items-center">
            <div className="flex-1">
              <h2 className="text-5xl font-bold text-slate-700 mb-4">
              Cake Coklat Glass
              </h2>
              <p className="text-lg text-slate-500 mb-2">100% Halal</p>
              <p className="text-lg text-slate-500 mb-2">Stay Healt</p>
              <p className="text-lg text-slate-500 mb-2">Bersama Brownmix</p>
              <button className="bg-pink-500 text-white px-6 py-2 rounded-full mt-4">
                view
              </button>
            </div>
            <div className="w-28 h-28ml-6">
              <img
                src={cake6}
                alt="Strawberry Cake"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-6">
            <div className="bg-[#F8F8F8] p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-700 mb-2">Tiramisu </h2>
                <h2 className="text-xl font-bold text-slate-700">Cake Roll</h2>
              </div>
              <div className="w-28 h-28 ml-4">
                <img
                  src={cake7}
                  alt="Cookies"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
            <div className="bg-[#F8F8F8] p-4 flex items-center">
              <div className="flex-1">
                <h2 className="text-xl font-bold text-slate-700 mb-2">Redvelved</h2>
                <button className="bg-pink-500 text-white px-4 py-2 rounded-full mt-2">
                  view
                </button>
              </div>
              <div className="w-28 h-28 ml-4">
                <img
                  src={cake2}
                  alt="Strawberry Layer Cake"
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroItem;
