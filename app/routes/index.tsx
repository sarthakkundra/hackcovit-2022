import Hero from '~/components/Hero/Hero';
import Themes from '~/components/Themes/Themes';

import styles from '~/styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <>
      <Hero />
      <Themes />
    </>
  );
}
