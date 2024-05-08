import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative flex">
      <div className="w-1/2 bg-white">
        <div className="absolute top-1/2 left-[4%] transform -translate-y-1/2 text-left text-gray-800 font-bold px-8">
          <div className="text-3xl md:text-5xl lg:text-5xl">Craving for</div>
          <div className="text-4xl md:text-6xl lg:text-6xl mt-4">Healthy Food?</div>
          <div className="mt-8 text-base md:text-lg lg:text-xl text-gray-600">
            Here is what you always need. View our food collection<br></br> and order yummy and healthy food within minutes.
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-8 flex justify-end">
        <img src={hero} className="w-full h-auto object-cover" />
      </div>
    </div>
  );
};

export default Hero;
