import { ReactElement, useState } from 'react';

import Base from 'templates/Base';

import SignIn from 'pages/login/tabs/sign-in';
import YourReservation from 'pages/login/tabs/your-reservation';
import GetReservation from 'pages/login/tabs/get-reservation';
import { Title } from 'components/core';

import { Container } from 'styles/Grid';
import * as Styled from './styles';

const Login = (): ReactElement => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: 'section-1',
      label: 'Tenho uma conta',
      component: <SignIn />,
    },
    {
      id: 'section-2',
      label: 'Tenho uma reserva',
      component: <YourReservation />,
    },
    {
      id: 'section-3',
      label: 'Perdi a minha reserva',
      component: <GetReservation />,
    },
  ];

  return (
    <Base title="Gipsyy - login">
      <Container style={{ maxWidth: 850, width: '100%' }}>
        <Title size="small" weight="bold" align="left">
          Gerir a sua reserva
        </Title>

        <Styled.Wrapper>
          <div className="form">
            <div className="header">
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
            <div className="content">
              {tabs
                .filter((_tab, index) => index === activeTab)
                .map(({ component }) => (
                  <>{component}</>
                ))}
            </div>
          </div>
        </Styled.Wrapper>
      </Container>
    </Base>
  );
};

export default Login;
