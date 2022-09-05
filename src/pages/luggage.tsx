import React from 'react';
import Base from 'templates/Base';
import { PageList, PageBreadcrumbs } from 'components/core';

import luggageData from 'services/luggage.json';

const Luggage = () => {
  const { data } = luggageData;

  return (
    <Base title="Gipsyy - Bagagem">
      <PageBreadcrumbs pageLocation="/luggage" pageName="Bagagem" />
      <PageList data={data} />
    </Base>
  );
};

export default Luggage;
