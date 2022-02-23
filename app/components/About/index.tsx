import texture from '../../images/Mizan - Group.png';

const About = () => {
  return (
    <div>
      <h1 className="text-xl md:text-4xl font-semibold text-secondary text-center my-5">
        About
      </h1>
      <div className="w-full md:w-3/4 mx-auto flex rounded-lg">
        <div className="hidden md:block w-1/3">
          <div
            style={{
              background:
                'linear-gradient(180deg, rgba(255, 121, 121, 0.95) 0%, rgba(255, 169, 90, 0.83) 100%)',
              height: '100%',
              width: '100%',
            }}
          >
            <img src={texture} className="h-full w-full" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-xs sm:text-base md:text-xl text-center bg-lightBlack p-10 flex items-center justify-center">
          HackCoVIT 2022 is an initiative by VIT University, Bhopal. It is aimed
          at bringing out the best technical solutions for various problems
          faced by the people in the real world. Through this initiative, the
          students across the nation will be able to unlock their real-life
          problem solving skills and come up with the best solutions that will
          largely impact society. This hackathon will allow the students to
          brush up their knowledge and skills. The students participating in the
          hackathon will be appreciated with exciting prizes which will boost up
          their confidence.
        </div>
      </div>
    </div>
  );
};

export default About;
