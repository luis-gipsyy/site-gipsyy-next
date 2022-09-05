import React from 'react';
import { Container } from 'styles/Grid';
import { Questions } from './questions';
import * as Styled from './styles';

const AccordionDropdown = () => {
  const [items, setItems] = React.useState([]);
  const [click, setClick] = React.useState(false);

  const getItems = () =>
    new Promise((resolve) => setTimeout(() => resolve(Questions), 1000));

  React.useEffect(() => {
    getItems().then((result) => setItems(result));
  }, []);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }

    setClick(index);
  };
  return (
    <Container>
      <Styled.Wrapper>
        {items.map((item, index) => {
          return (
            <>
              <div
                className="question"
                onClick={() => toggle(index)}
                key={index}
              >
                <p dangerouslySetInnerHTML={{ __html: item.question }}></p>
                <span>
                  {click === index ? (
                    <img src="/images/icons/chevron-up.svg" alt="imagem seta" />
                  ) : (
                    <img
                      src="/images/icons/chevron-down.svg"
                      alt="imagem seta"
                    />
                  )}
                </span>
              </div>
              {click === index ? (
                <div className="answer">
                  <p dangerouslySetInnerHTML={{ __html: item.answer }}></p>
                </div>
              ) : null}
            </>
          );
        })}
      </Styled.Wrapper>
    </Container>
  );
};

export default AccordionDropdown;
