import { DateInput, Input, InputCount } from 'components/core';
import ToggleSwitch from 'components/core/ToggleSwitch';
import React from 'react';
import SectionMap from '../../SectionMap';
import * as Styled from '../styles';

const TripDetails = () => {
  return (
    <Styled.Wrapper>
      <div className="content">
        <div className="calendar__container">
          <DateInput hasGap />
        </div>
        <div className="destination__container">
          <Input
            icon={<img src="/images/search_engine/geo-blue.svg" />}
            name="leave"
            label="Local de Partida"
          />
        </div>
        <div className="destination__container">
          <Input
            icon={<img src="/images/search_engine/geo-alt-blue.svg" />}
            name="destiny"
            label="Local de Destino"
          />
        </div>

        <div className="passenger__container">
          <div className="passenger__title">
            <img src="/images/icons/passenger.svg" alt="icone passageiro" />
            <span>Passageiros</span>
          </div>
          <div className="count__content">
            <p>Adultos</p>
            <div>
              <InputCount label="Adultos" />
            </div>
          </div>
          <div className="count__content">
            <p>Crianças</p>
            <div>
              <InputCount label="Crianças" />
            </div>
          </div>
        </div>

        <div className="toggle__container">
          <ToggleSwitch />
        </div>

        <div className="map__container">
          <SectionMap />
        </div>

        <div className="footer">
          <div className="footer__content">
            <div className="route">
              <img src="/images/icons/time.svg" alt="icone relógio" />
              <p>Tempo</p>
            </div>
            <div className="route">
              <img src="/images/icons/destiny.svg" alt="icone destino" />
              <p>Distância</p>
            </div>
          </div>

          <div className="btn__container">
            <button className="btn__footer">
              Seguinte
              <img src="/images/icons/arrow-next-white.svg" alt="icone seta" />
            </button>
          </div>
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default TripDetails;
