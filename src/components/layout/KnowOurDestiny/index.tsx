import Link from 'next/link';

import * as Style from './styles';

const KnowOurDestiny = () => {
  return (
    <Style.WrapperKnowOurDestiny>
      <h1 className="title">
        Passagem de ônibus barata e online para todo o Brasil.
      </h1>
      <Link href="/">
        <a className="know_text">Conheça nossos destinos!</a>
      </Link>
    </Style.WrapperKnowOurDestiny>
  );
};

export default KnowOurDestiny;
