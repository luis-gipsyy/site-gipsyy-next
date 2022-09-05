import React from 'react';
import * as Styled from './styles';

const ToggleSwitch = () => {
  const [checked, setChecked] = React.useState(false);

  const handleCheck = () => {
    setChecked((prevState) => !prevState);
  };

  return (
    <Styled.Wrapper>
      {/* <h1>{checked ? 'Checado' : 'Não checado'}</h1> */}
      <span>Ida e Volta</span>
      <input
        type="checkbox"
        id="switch"
        checked={checked}
        onClick={handleCheck}
      />
      <label for="switch">Toggle</label>
    </Styled.Wrapper>
  );
};

export default ToggleSwitch;
