import { ReactElement } from 'react';
import { Close as CloseIcon } from '@styled-icons/material/Close';

import * as Styled from './styles';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

const Sidebar = ({ isOpen = false, setIsOpen }: SidebarProps): ReactElement => {
  const handleToggle = (): void => {
    setIsOpen(false);
  };

  return (
    <>
      <Styled.Backdrop isOpen={isOpen} onClick={handleToggle} />
      <Styled.WrapperSideBar isOpen={isOpen}>
        <div className="header">
          <div className="header__close" onClick={handleToggle}>
            <CloseIcon />
          </div>
          <button>
            <a href="/login">Iniciar sessão</a>
          </button>
        </div>
        <div className="content">
          <ul>
            <li>
              <a href="#">
                <img src="/images/buy2.svg" alt="Buy Icon" />
                <span>Comprar bilhete</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/booking.svg" alt="Booking Icon" />
                <span>Gerir minha reserva</span>
              </a>
            </li>
            <li>
              <a href="/help">
                <img src="/images/icon_ajuda.svg" alt="Help Icon" />
                <span>Ajuda</span>
              </a>
            </li>
            <li>
              <a href="/shipping">
                <img src="/images/sidebar/bus-stop2.svg" alt="Bus Icon" />
                <span>Fretamento</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/Icon-Mapa.png" alt="Map Icon" />
                <span>Nossos Destinos</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/baby-boy.png" alt="Baby Icon" />
                <span>Crianças</span>
              </a>
            </li>
            <li>
              <a href="/stops-information">
                <img src="/images/sidebar/bus-stop.svg" alt="Bus Icon" />
                <span>Onde embarcar</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/bagagem.png" alt="Bag Icon" />
                <span>Bagagem</span>
              </a>
            </li>
            <li>
              <a href="#">
                <img src="/images/icons/MedicalMask.png" alt="Mask Icon" />
                <span>Covid</span>
              </a>
            </li>
            <li>
              <a href="/co2">
                <img src="/images/icons/carbonNeutral.png" alt="Carbon Icon" />
                <span>Compensação CO²</span>
              </a>
            </li>
            <li>
              <a href="/about-us">
                <img src="/images/icons/logolat.png" alt="Logo Icon" />
                <span>Sobre nós</span>
              </a>
            </li>
          </ul>
        </div>
      </Styled.WrapperSideBar>
    </>
  );
};

export default Sidebar;
