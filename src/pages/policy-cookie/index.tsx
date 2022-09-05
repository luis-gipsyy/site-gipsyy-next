import React, { ReactElement } from 'react';

import { Title, SectionContent } from 'components/core';

import Base from 'templates/Base';
import { Container } from 'styles/Grid';

import * as Styled from './styles';

const PolicyCookie = (): ReactElement => {
  return (
    <Base>
      <Styled.Wrapper>
        <Container>
          <Title align="left" size="large" weight="bold" hasPadding>
            Política de Cookies
          </Title>
        </Container>
        <SectionContent textSize="small">
          <p>
            A GOGIPSY utiliza cookies ou tecnologias semelhantes para coletar
            informações sobre o computador ou dispositivo móvel do usuário, com
            a finalidade de garantir o funcionamento adequado da Plataforma e
            melhoria na experiência de navegação. Os cookies servem para
            simplificar a análise do tráfego ou indicar quando um site é
            visitado, permitindo o envio de informações a usuários. Os
            diferentes tipos de cookies estão identificados a seguir:
          </p>

          <p>
            - cookies de preferência: permitem à Plataforma lembrar de certas
            informações para personalizar a sua experiência. Se esses cookies
            forem desativados, a Plataforma pode se tornar menos funcional, mas
            não deve impedi-la de funcionar corretamente.
          </p>

          <p>
            - cookies de segurança: os cookies de segurança são usados para
            autenticar usuários, evitar o uso fraudulento de credenciais de
            login e proteger dados de usuários de acesso não autorizado. Se
            esses cookies estiverem bloqueados ou desativados, a Plataforma não
            funcionará corretamente.
          </p>

          <p>
            - cookies de processamento: os cookies de processamento ajudam nossa
            Plataforma a entregar a funcionalidade que o usuário espera ao
            permitir o acesso a áreas seguras. Se esses cookies estiverem
            bloqueados ou desativados, a Plataforma não funcionará corretamente.
          </p>

          <p>
            - cookies de sessão pública: os cookies de sessão pública permitem
            que a Plataforma colete informações relacionadas com interação do
            usuário com a própria Plataforma, incluindo as páginas visitadas com
            mais frequência e se houve, em algum momento, mensagens de erro.
            Esses cookies são responsáveis por melhorar a Plataforma. Se
            estiverem bloqueados ou desativados, a Plataforma pode tornar-se
            menos funcional, mas não deve impedi-la de funcionar corretamente.
          </p>

          <p>
            - cookies publicitários: os cookies de publicidade são usados por
            partes envolvidas no serviço de publicidade de outras empresas, seja
            em nossa Plataforma ou em divulgações nos sites de terceiros. Estes
            cookies coletam informações sobre as atividades on-line do usuário,
            como anúncios vistos em sites visitados, para extrair inferências
            sobre quais anúncios publicitários podem ser relevantes. Se esses
            cookies forem desativados, a Plataforma pode se tornar menos
            funcional, mas não deve impedi-la de funcionar corretamente.
          </p>

          <p>
            - cookies analíticos: os cookies analíticos coletam informações
            sobre o uso da nossa Plataforma, como a frequência de acesso, e
            servem para melhorar nossos serviços. Se esses cookies estiverem
            desativados, a Plataforma pode tornar-se menos funcional, mas não
            deve impedi-la de funcionar corretamente.
          </p>
        </SectionContent>
      </Styled.Wrapper>
    </Base>
  );
};

export default PolicyCookie;
