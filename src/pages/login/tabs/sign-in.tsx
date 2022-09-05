import { ReactElement } from 'react';
import { Smartphone } from '@styled-icons/remix-line/Smartphone';

import { Button, Input } from 'components/core';

const SignIn = (): ReactElement => (
  <>
    <div className="form">
      <header className="form__header">
        <h1>Iniciar sessão para gerir reserva</h1>

        <Button label="Cadastrar" variant="secondary" />
      </header>

      <div className="form__content">
        <Input label="Endereço de E-mail" name="email" variant="secondary" />
        <Input
          label="Palavra-chave"
          name="password"
          type="password"
          variant="secondary"
        />
      </div>
      <div className="form__submit">
        <a href="#">Esqueci minha senha</a>

        <Button label="Iniciar Sessão" />
      </div>
    </div>
    <div className="footer">
      <div>
        <Smartphone size={20} />
        <a href="#">Iniciar sessão com celular</a>
      </div>
    </div>
  </>
);

export default SignIn;
