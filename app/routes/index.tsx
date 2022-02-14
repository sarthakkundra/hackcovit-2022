import React from 'react';
import Hero from '~/components/Hero/Hero';
import Prizes from '~/components/Prizes';
import Themes from '~/components/Themes/Themes';
import Timeline from '~/components/Timeline';

import styles from '~/styles/index.css';

export function links() {
  return [{ rel: 'stylesheet', href: styles }];
}

export default function Index() {
  return (
    <>
      <Hero />
      <div className="w-10/12 mx-auto">
      <Timeline />
      <Prizes />
      <Themes />
      </div>
    </>
  );
}
