import React from 'react';
import {
  StackedCarousel,
  ResponsiveContainer,
  StackedCarouselSlideProps,
  ResponsiveContainerProps,
} from 'react-stacked-center-carousel';
import { BsFillCaretRightFill } from 'react-icons/bs';
import { BsFillCaretLeftFill } from 'react-icons/bs';

import environment from '../../images/environment.svg';
import healthcare from '../../images/healthcare.svg';
import infosec from '../../images/infosec.svg';
import agriculture from '../../images/agriculture.svg';
import education from '../../images/education.svg';

const data = [
  {
    image: environment,
    title: 'Environment',
    description:
      'Build something around the theme of environment that helps in solving a real world problem.',
  },
  {
    image: healthcare,
    title: 'Healthcare',
    description:
      'Build something around the theme of health care that helps in solving a real world problem.',
  },
  {
    image: infosec,
    title: 'Information Security',
    description:
      'Build something around the theme of Information Security that helps in solving a real world problem.',
  },
  {
    image: agriculture,
    title: 'Agriculture',
    description:
      'Build something around the theme of agriculture that helps in solving a real world problem.',
  },
  {
    image: education,
    title: 'Education',
    description:
      'Build something around the theme of education that helps in solving a real world problem.',
  },
];

export default function ThemesCarousel() {
  const ref = React.useRef<ResponsiveContainerProps>();

  return (
    <div className="w-full relative flex items-center">
      {/* @ts-ignore */}
      <div onClick={() => ref.current.goBack()}>
        <BsFillCaretLeftFill className="cursor-pointer text-primary text-4xl" />
      </div>
      <ResponsiveContainer
        // @ts-ignore
        carouselRef={ref}
        render={(parentWidth, carouselRef) => {
          let currentVisibleSlide = 3;
          let slideWidth = 500;
          if (parentWidth <= 480) {
            currentVisibleSlide = 1;
            slideWidth = 300;
          }
          return (
            <StackedCarousel
              ref={carouselRef}
              data={data}
              carouselWidth={parentWidth}
              slideWidth={slideWidth}
              slideComponent={Slide}
              maxVisibleSlide={3}
              currentVisibleSlide={currentVisibleSlide}
              useGrabCursor={true}
            />
          );
        }}
      />
      {/* @ts-ignore */}
      <div onClick={() => ref.current.goNext()}>
        <BsFillCaretRightFill className="cursor-pointer text-primary text-4xl" />
      </div>
    </div>
  );
}

const Slide = React.memo(function (props: StackedCarouselSlideProps) {
  const { data, dataIndex } = props;
  const { image, title, description } = data[dataIndex];

  return (
    <div
      className="flex p-4 md:p-10"
      style={{
        width: '100%',
        height: 300,
        background: '#1b1b1b',
        border: '2px solid',
        borderImage: 'linear-gradient(180deg, #FFA95A 0%, #FF7979 100%) 30%',
      }}
    >
      <div className="h-full flex flex-col items-start justify-center">
        <h1 className="text-md md:text-2xl font-semibold my-2">{title}</h1>
        <p className="text-xs md:text-sm font-semibold my-2">{description}</p>
      </div>
      <img src={image} className="w-1/2" />
    </div>
  );
});