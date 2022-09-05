import { ReactElement } from 'react';

import Base from 'templates/Base';
import { Title, SectionContent } from 'components/core';

import * as Styled from './styles';
import { Container } from 'styles/Grid';

const PrivacyPolicy = (): ReactElement => {
  return (
    <Base>
      <Styled.Wrapper>
        <Container>
          <Title align="left" size="large" weight="bold" hasPadding>
            POLÍTICA DE PRIVACIDADE
          </Title>
        </Container>
        <SectionContent textSize="small">
          <p>
            Ao acessar a Plataforma, o Cliente está ciente da possibilidade de
            acesso aos seus dados pessoais. A GOGIPSY entende a importância
            disso e trabalha para que o Cliente mantenha o controle dessas
            informações. O uso dos dados dos Clientes é realizado em
            conformidade com os regulamentos nacionais e internacionais de
            proteção de dados, conforme aplicável.
          </p>

          <p>
            A GOGIPSY não se responsabiliza pelo uso de dados do Cliente que
            porventura acesse links de terceiros pela Plataforma. Este documento
            é parte integrante dos Termos de Uso da Plataforma, que contém uma
            visão geral dos Serviços oferecidos pela GOGIPSY e, sem prejuízo de
            outras definições atribuídas nesta Política, as definições que são
            contempladas nos Termos de Uso da Plataforma aplicam-se a esta
            Política. Pedimos que leia com atenção esta Política de Privacidade
            (“Política”) e, ao final, marque no campo específico para informar
            sua concordância livre, informada e inequívoca ao conteúdo aqui
            descrito e aos meios utilizados pela Plataforma para o tratamento de
            seus dados pessoais. Vale lembrar que esse consentimento pode ser
            revogado a qualquer momento por você, mediante envio de notificação
            à (favor inserir endereço de contato).
          </p>

          <p>
            Essa Política não se aplica aos serviços oferecidos por terceiros,
            portanto, caso algum conteúdo apresentado na Plataforma encaminhe o
            Cliente, através de link externo, a outros websites, recomendamos
            que o Cliente analise cautelosamente as políticas de privacidade
            destes.
          </p>
        </SectionContent>
        <SectionContent
          title="CONTROLE DOS DADOS"
          textSize="small"
          titleSize="small"
          titleNoMargin
        >
          <p>
            A GoGipsy do Brasil Tecnologia e Viagens Ltda., sociedade unipessoal
            empresária limitada, devidamente constituída de acordo com as leis
            do Brasil, inscrita no CNPJ/ME sob o nº 37.813.735/0001-44, com sede
            na cidade do Rio de Janeiro, Estado do Rio de Janeiro, na Avenida
            das Américas Nº 8.585, sala 468, Barra da Tijuca, CEP 22793-081,
            possui um encarregado pela gestão dos dados de usuários (DPO),
            disponível para esclarecimentos ou pedidos relacionados a essas
            informações. Caso pretenda remover, corrigir, atualizar ou apagar o
            conteúdo coletado, os Clientes deverão entrar em contato pelo e-mail
            privacidade@gipsyy.com.br.
          </p>

          <p>
            A alteração será realizada o mais breve possível, em tempo razoável.
          </p>
        </SectionContent>
        <SectionContent
          title="NATUREZA OPCIONAL DE CONCESSÃO DOS DADOS"
          textSize="small"
          titleSize="small"
          titleNoMargin
        >
          <p>
            O usuário é livre para fornecer dados pessoais ao solicitar os
            serviços oferecidos pela GOGIPSY. A não concessão dos dados pode
            impossibilitar a obtenção do serviço solicitado.
          </p>
        </SectionContent>
        <SectionContent
          title="INFORMATIVOS E MARKETING"
          textSize="small"
          titleSize="small"
          titleNoMargin
        >
          <p>
            Ao se cadastrar na Plataforma, o Cliente está ciente que poderá
            receber mensagens por e-mail e/ou SMS sobre a GOGIPSY, inclusive de
            conteúdo promocional, divulgações e ofertas de seus Serviços. Caso
            deseje, o Cliente poderá modificar essas opções a qualquer momento
            em seu Cadastro, nos próprios e- mails recebidos ou enviando uma
            mensagem diretamente ao endereço de contato (favor inserir endereço
            de contato). No entanto, mesmo se o Cliente optar por não receber os
            e-mails e/ou SMS anteriores, a GOGIPSY ainda poderá enviar e-mails
            e/ou SMS administrativos (por exemplo, em conexão com uma
            solicitação de redefinição de senha, uma verificação por e-mail ou
            um e-mail e/ou SMS relacionado ao serviço escolhido) necessário para
            facilitar o uso da Plataforma.
          </p>
        </SectionContent>
        <SectionContent
          title="TIPOS DE DADOS PROCESSADOS"
          textSize="small"
          titleSize="small"
          titleNoMargin
        >
          <p>
            Dados de navegação: durante o funcionamento normal da Plataforma,
            certos dados pessoais podem vir a ser coletados por conta da
            utilização normal, pelos usuários, de protocolos de comunicação da
            Internet. Essas informações podem incluir endereços de IP ou nomes
            de domínio dos computadores usados por quem navega na Plataforma e
            são adquiridas somente para obter estatísticas anônimas sobre o uso
            de forma a melhorar continuamente o acesso e conteúdo da Plataforma.
          </p>

          <p>
            Tais informações são excluídas após o processamento e podem ser
            usadas p ara determinar responsabilidades em caso de crimes
            cibernéticos. Dados fornecidos voluntariamente pelos usuários da
            GOGIPSY: o Cliente poderá optar por se cadastrar na Plataforma e
            informar, explícita e voluntariamente, seu nome completo, endereço,
            número de telefone celular, dados de documento de identidade e
            idade, assim como pelo menos um método de pagamento válido.
          </p>

          <p>
            Outras informações pessoais poderão ser coletadas durante o uso dos
            Serviços oferecidos pela Plataforma, como por exemplo, origem,
            destino, data e hora da viagem.
          </p>

          <p>
            Como se vê, a GOGIPSY coleta o mínimo possível de dados, a fim de
            manter a funcionalidade da Plataforma e a qualidade da prestação de
            seus Serviços.
          </p>
        </SectionContent>
      </Styled.Wrapper>
    </Base>
  );
};

export default PrivacyPolicy;
