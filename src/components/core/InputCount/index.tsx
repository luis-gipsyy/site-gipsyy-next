import { ReactElement, useState } from 'react';

import * as Styled from './styles';

interface InputCountProps {
  icon?: React.ReactNode;
  label: string;
  value?: number;
}

const InputCount = ({
  label,
  icon = <img src="/images/search_engine/person.svg" />,
  value = 0,
}: InputCountProps): ReactElement => {
  const [count, setCount] = useState(value);
  const isDisabledRemoveCount = count === 1;

  const handleAddCount = () => setCount(count + 1);
  const handleRemoveCount = () => setCount(count - 1);

  return (
    <Styled.Wrapper>
      <div className="label">
        {icon}
        {label}
      </div>
      <div className="input">
        <button
          className="remove"
          onClick={handleRemoveCount}
          disabled={isDisabledRemoveCount}
        >
          -
        </button>
        <div className="value">{count}</div>
        <button className="add" onClick={handleAddCount}>
          +
        </button>
      </div>
    </Styled.Wrapper>
  );
};

export default InputCount;
