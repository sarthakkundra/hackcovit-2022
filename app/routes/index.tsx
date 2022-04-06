import About from '~/components/About';
import Hero from '~/components/Hero';
import Prizes from '~/components/Prizes';
import Themes from '~/components/Themes';
import Timeline from '~/components/Timeline';

import styles from '~/styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <>
      <div className="h-12 fixed top-0 w-full bg-primary text-center text-black font-semibold md:flex items-center justify-center text-sm md:text-lg">
        Round One result has been announced.&nbsp;
        <a
          className="underline block"
          href="public/RESULT-ROUND-ONE.pdf"
          download
        >
          Check out the list here!
        </a>
      </div>
      <Hero />
      <About />
      <div className="w-10/12 mx-auto">
        <Timeline />
        <Prizes />
        <Themes />
      </div>
    </>
  );
}
