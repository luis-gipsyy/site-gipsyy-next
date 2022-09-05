import React from 'react';

import { Button, Input } from 'components/core';

const YourReservation = () => {
  return (
    <>
      <div className="form">
        <header className="form__header">
          <h1>Inserir a sua reserva e E-Mail para ver a sua reserva</h1>
        </header>

        <div className="form__content">
          <Input
            label="Identificador da reserva"
            name="YourReservation"
            variant="secondary"
          />
          <Input
            label="Endereço de E-Mail"
            name="email"
            type="email"
            variant="secondary"
          />
        </div>
        <span>
          Endereço de email para onde a confirmação de E-Mail foi enviado
        </span>
        <div className="form__submit">
          <Button label="Iniciar Sessão" />
        </div>
      </div>
    </>
  );
};

export default YourReservation;
