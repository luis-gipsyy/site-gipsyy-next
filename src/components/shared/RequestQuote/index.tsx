import { ReactElement, useState } from 'react';
import { Container } from 'styles/Grid';

import TripDetails from './tabs/trip-details';

import * as Styled from './styles';

const Login = (): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'section-1',
      label: 'Detalhes da viagem',
      component: <TripDetails />,
    },
    {
      id: 'section-2',
      label: 'Tenho uma reserva',
      // component: ,
    },
    {
      id: 'section-3',
      label: 'Perdi a minha reserva',
      // component: ,
    },
  ];

  return (
    <Styled.Wrapper>
      <Container>
        <div className="tabs__content">
          <div className="tabs">
            {tabs.map(({ label, id }, index) => (
              <h1
                key={id}
                className={index === activeTab ? 'active' : ''}
                onClick={() => setActiveTab(index)}
              >
                {label}
              </h1>
            ))}
          </div>
          <div>
            {tabs
              .filter((_tab, index) => index === activeTab)
              .map(({ component }) => (
                <>{component}</>
              ))}
          </div>
        </div>
      </Container>
    </Styled.Wrapper>
  );
};

export default Login;
