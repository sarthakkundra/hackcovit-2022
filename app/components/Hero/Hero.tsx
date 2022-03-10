import Countdown from '../Countdown/Countdown';

import texture from '../../images/Grain-Texture.png';

const Hero = () => {
  return (
    <>
      <div className="hidden md:flex h-screen w-full justify-between">
        <HeroContent />
        <div
          style={{
            background:
              'linear-gradient(180deg, rgba(255, 121, 121, 0.95) 0%, rgba(255, 169, 90, 0.83) 100%)',
            height: '100%',
            width: '35%',
          }}
        >
          <img src={texture} className="h-full w-full" />
        </div>
      </div>
      <div
        style={{
          background:
            'linear-gradient(180deg, rgba(255, 121, 121, 0.95) 0%, rgba(255, 169, 90, 0.83) 100%)',
        }}
        className="flex md:hidden w-full justify-center text-center"
      >
        <HeroContent />
      </div>
    </>
  );
};

const HeroContent = () => {
  return (
    <div className="p-16 flex justify-center items-center">
      <div>
        <h1 className="text-4xl md:text-7xl font-semibold my-3">
          HackoVIT 2.0
        </h1>
        <h3 className="text-2xl md:text-4xl font-semibold my-3">
          March 22-27, 2022
        </h3>
        <Countdown />
        <a href="https://dare2compete.com/hackathon/hackcovit2022-vellore-institute-of-technology-vit-bhopal-265595?lb=StlAmjn" target="_blank">
        <button className="hidden md:block register_btn">
          <div className="uppercase text-base md:text-xl">Register Now</div>
        </button>
        </a>
        <button className="block md:hidden bg-background px-5 py-4 rounded-full mx-auto">
          <div className="uppercase text-base md:text-xl">Register Now</div>
        </button>
      </div>
    </div>
  );
};

export default Hero;
