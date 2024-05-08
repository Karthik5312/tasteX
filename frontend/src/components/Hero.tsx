import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div className="relative flex">
      <div className="w-1/2 bg-white">
        <div className="absolute top-1/2 left-[4%] transform -translate-y-1/2 text-left text-black font-bold px-8">
          <div className="text-5xl">Craving for</div>
          <div className="text-6xl mt-4">Healthy Food?</div>
          <div className="mt-8 text-lg text-gray-600">
            Here is what you always need. View our food collection<br></br> and order yummy and healthy food within minutes.
          </div>
        </div>
      </div>
      <div className="w-1/2 pl-8 flex justify-end"> {/* Added flex justify-end to push the image to the right */}
        <img src={hero} className="max-w-full max-h-[600px] object-cover" /> {/* Adjusted width with max-w-full */}
      </div>
    </div>
  );
};













export default Hero;
