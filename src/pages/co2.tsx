import React from 'react';
import { SectionCentralizer, SectionContent, Title } from 'components/core';
import Base from 'templates/Base';

const Co2 = () => {
  return (
    <>
      <Base title="Gipsyy - Compensação CO2">
        <Title>
          Viajamos de ônibus <br />
          com quase zero de emissão de CO2
        </Title>
        <SectionCentralizer>
          <img src="/images/co2-banner.jpg" alt="imagem sustentabilidade" />
        </SectionCentralizer>
        <SectionContent
          title="Metas de desenvolvimento sustentável"
          image={<img src="/images/co2-company.png" alt="imagem Co2" />}
        >
          <p>
            Quando você viaja, costuma se preocupar com a sua pegada ecológica e
            como isso afeta o meio ambiente? Nós também! Por isso, a Gipsyy está
            empenhada em manter as emissões de CO2 igual a zero.
          </p>
          <p>
            Fizemos uma parceiria com a{' '}
            <a
              href="https://www.firstclimate.com/our-carbon-offset-projects/brazil-nut-project-helps-to-avoid-deforestation?lang=en"
              target="_blank"
              rel="noreferrer"
            >
              First Climate
            </a>
            , ajudamos algumas comunidades no Brasil a proteger as suas terras e
            já alcançamos pelo menos cinco dos dezessete objetivos de um
            desenvolvimento sustentável.
          </p>
          <p>
            A Gipsyy acredita na ação climática e no desenvolvimento
            sustentável. Se nós podemos manter as nossas emissões igual a zero,
            você também pode!
          </p>
        </SectionContent>
      </Base>
    </>
  );
};

export default Co2;
