import React from 'react';
import Base from 'templates/Base';
import { PageList, PageBreadcrumbs } from 'components/core';

import childrenData from 'services/children.json';

const Children = () => {
  const { data } = childrenData;

  return (
    <Base title="Gipsyy - Crianças">
      <PageBreadcrumbs pageLocation="/children" pageName="Crianças" />
      <PageList data={data} />
    </Base>
  );
};

export default Children;
