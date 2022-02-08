import texture from '../../images/Grain-Texture.png';
import Countdown from '../Countdown/Countdown';

const Hero = () => {
  return (
    <div className="h-screen w-full flex justify-between">
      <div className="p-16 flex justify-center items-center">
        <div>
          <h1 className="text-7xl font-semibold my-3">HackoVIT 2.0</h1>
          <h3 className="text-4xl font-semibold my-3">March 22-27, 2022</h3>
          <Countdown />
          <button
            style={{
              border: '2px solid',
              // borderImage:
              //   'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
            }}
            className="rounded-full px-5 py-3 uppercase my-5 text-xl"
          >
            Register Now
          </button>
        </div>
      </div>
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
  );
};

export default Hero;
