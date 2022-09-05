import { BannerHero } from 'components/core';
import SomeDestinations from 'components/shared/SomeDestinations';
import React from 'react';

import Base from 'templates/Base';

const RoadMap = () => {
  return (
    <>
      <Base>
        <BannerHero
          insideContainer={
            <img
              src="images/top-roadmapBR1.jpg"
              alt="background principais rotas"
            />
          }
        ></BannerHero>
        <SomeDestinations />
      </Base>
    </>
  );
};

export default RoadMap;
