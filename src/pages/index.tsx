import { useEffect, useState } from 'react';
import type { NextPage } from 'next';

import Base from 'templates/Base';
import { KnowOurDestiny } from 'components/layout';
import {
  CarouselBanner,
  IconBar,
  TopDestinations,
  MobileApp,
} from 'components/core';
import SearchEngine from 'components/shared/SearchEngine';

import API from 'services/api';

const Home: NextPage = () => {
  const [bannerHero, setBannerHero] = useState<any>([]);
  const [bannerFooter, setBannerFooter] = useState<any>([]);

  const filterBanner = (
    arrayBanner: [
      {
        category: string;
      }
    ],
    filter: string
  ) => {
    return arrayBanner.filter((item: any) => item.category === filter);
  };

  useEffect(() => {
    API.get('/Banner').then((res) => {
      setBannerHero(filterBanner(res.data.data, 'Hero'));
      setBannerFooter(filterBanner(res.data.data, 'Footer'));
    });
  }, []);

  return (
    <Base backgroundColor="secondary">
      <KnowOurDestiny />
      <CarouselBanner content={bannerHero} />
      <SearchEngine />
      <IconBar />
      <TopDestinations />
      <MobileApp />
      <CarouselBanner content={bannerFooter} />
    </Base>
  );
};

export default Home;
