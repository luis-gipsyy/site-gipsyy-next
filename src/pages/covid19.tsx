import React from 'react';
import Base from 'templates/Base';
import { PageList, PageBreadcrumbs } from 'components/core';

import covidData from 'services/covid19.json';

const Covid19 = () => {
  const { data } = covidData;

  return (
    <Base title="Gipsyy - Pandemia">
      <PageBreadcrumbs pageLocation="/covid19" pageName="Covid" />
      <PageList data={data} />
    </Base>
  );
};

export default Covid19;
