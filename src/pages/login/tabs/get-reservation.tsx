import { ReactElement } from 'react';

import { Button, Input } from 'components/core';

const GetReservation = (): ReactElement => {
  return (
    <div className="form">
      <div className="form__content">
        <Input label="Endereço de E-mail" name="email" variant="secondary" />
        <div className="form__group">
          <Input label="Origem" name="going" variant="secondary" />
          <Input label="Destino" name="destiny" variant="secondary" />
        </div>
        <Input label="Data de partida" name="date-going" variant="secondary" />
      </div>
      <span>
        Endereço de email para onde a confirmação de E-Mail foi enviado
      </span>
      <div className="form__submit">
        <Button label="Iniciar Sessão" />
      </div>
    </div>
  );
};

export default GetReservation;
