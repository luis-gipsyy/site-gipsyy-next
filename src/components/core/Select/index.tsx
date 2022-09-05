import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface SelectProps {
  label: string;
  name: string;
  value?: string;
  icon?: React.ReactNode;
  onChange?: React.ChangeEventHandler;
  onBlur?: React.FocusEventHandler;
  error?: string;
  children?: React.ReactNode;
  defaultValue?: string;
}

const Select = ({
  label,
  name,
  value,
  onChange,
  onBlur,
  children,
  defaultValue,
  icon = <img src="/images/icons/Icon_Partid.svg" />,
  error,
}: SelectProps): ReactElement => {
  return (
    <Styled.Wrapper>
      <label htmlFor={name}>{label}</label>
      <select
        id={name}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onBlur={onBlur}
      >
        <option value="">Selecione</option>
        {children}
      </select>
      <div className="icon">{icon}</div>
      {error && <p className="error">{error}</p>}
    </Styled.Wrapper>
  );
};

export default Select;
