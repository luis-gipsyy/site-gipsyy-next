import React from 'react';
import Base from 'templates/Base';
import { PageList, PageBreadcrumbs } from 'components/core';

import ticketData from 'services/ticket.json';

const Ticket = () => {
  const { data } = ticketData;

  return (
    <Base title="Gipsyy - Bilhete">
      <PageBreadcrumbs pageLocation="/ticket" pageName="Bilhete" />
      <PageList hasWeight hasWidth data={data} />
    </Base>
  );
};

export default Ticket;
