import ThemesCarousel from '../ThemesCarousel/ThemesCarousel';

const Themes = () => {
  return (
    <div>
      <h1 className="text-xl md:text-4xl font-semibold text-secondary text-center my-5">
        Themes
      </h1>
      <div className="mx-auto w-full md:w-3/4 my-5">
        <ThemesCarousel />
      </div>
    </div>
  );
};

export default Themes;
