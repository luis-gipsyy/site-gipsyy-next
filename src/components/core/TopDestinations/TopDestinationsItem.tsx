import { ReactElement } from 'react';

import * as Styled from './styles'

import { formatMoneyValue } from 'helpers/formatFunctions';

const TopDestinationsItem = (): ReactElement => {
  return (
    <Styled.WrapperCard>
      <img
        className="card__image"
        src="https://gipsyy-gds-prod-br.s3.sa-east-1.amazonaws.com/topdestination/Desk_2fd8e679-666b-468f-863d-7ae497deec0f"
        alt="foto"
      />

      <div className="card__price">
        <span>A partir de</span>
        {formatMoneyValue(200)}
      </div>
      <div className="card__info">
        <div className="destiny">
          <img src="/images/icons/Icon_Partid.svg" alt="Partid Icon" />
          <p>SAO PAULO - SP</p>
        </div>

        <div className="derpature">
          <img src="/images/icons/Vector.svg" alt="Vector Icon" />
          <p>Brasília - DF</p>
        </div>
      </div>
    </Styled.WrapperCard>
  );
};

export default TopDestinationsItem;
