import React from 'react';
import AccordionDropdown from 'components/core/AccordionDropdown';
import Base from 'templates/Base';
import { Title } from 'components/core';

const Faqs = () => {
  return (
    <>
      <Base title="Gipsyy - Perguntas Frequentes">
        <Title size="3rem" weight="normal">
          Perguntas Frequentes
        </Title>
        <AccordionDropdown />
      </Base>
    </>
  );
};

export default Faqs;
