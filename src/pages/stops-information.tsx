import React from 'react';
import { BannerHero } from 'components/core';
import StopsFind from 'components/shared/StopsFind';
import Base from 'templates/Base';

const StopsInformation = () => {
  return (
    <>
      <Base title="Gipsyy - Onde embarcar?">
        <BannerHero
          image="/images/stops-info-banner.png"
          height="300px"
          justify="flex-start"
          align="flex-start"
          fontSize="4rem"
          color="#0B4178"
        >
          <h1>Onde embarcar</h1>
        </BannerHero>
        <StopsFind />
      </Base>
    </>
  );
};

export default StopsInformation;
