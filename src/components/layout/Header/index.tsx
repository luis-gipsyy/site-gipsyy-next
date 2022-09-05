import { useState } from 'react';
import Link from 'next/link';

import UserMenu from 'components/shared/UserMenu';
import SideBar from 'components/layout/Header/sidebar';

import * as Style from './styles';
import { Container } from 'styles/Grid';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Style.WrapperHeader>
      <Container>
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <div className="main-menu">
          <div className="main-menu__left">
            <button onClick={() => setIsOpen(!isOpen)} type="button">
              <span />
              <span />
              <span />
            </button>
          </div>

          <div className="main-menu__center">
            <a href="/">
              <img
                src="/images/logos/gipsyy-original-logo.png"
                alt="Gipsyy logo"
                className="logo"
              />
            </a>
            {/* <Link to={AppViews.HOME}>
              {process.env.REACT_APP_INSTANCE_TYPE ===
                GipsyInstanceType.BRAZIL && (
                <img
                  src={logoImgBR}
                  alt="Gipsyy logo"
                  className={styles.logo}
                />
              )}
              {process.env.REACT_APP_INSTANCE_TYPE ===
                GipsyInstanceType.PORTUGAL && (
                <img src={logoImg} alt="Gipsyy logo" className={styles.logo} />
              )}
            </Link> */}
          </div>

          <div className="main-menu__right">
            <UserMenu />
            <span className="help">
              <Link href="/help" passHref>
                Ajuda
              </Link>
            </span>
          </div>
        </div>
      </Container>
    </Style.WrapperHeader>
  );
};

export default Header;
