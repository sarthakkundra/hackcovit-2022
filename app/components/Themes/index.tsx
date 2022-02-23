import ThemesCarousel from '../ThemesCarousel';

const Themes = () => {
  return (
    <div className="w-screen">
      <h1 className="text-xl md:text-4xl font-semibold text-secondary text-center my-5">
        Themes
      </h1>
      <div className="mx-auto w-11/12 md:w-3/4 my-5">
        <ThemesCarousel />
      </div>
    </div>
  );
};

export default Themes;
