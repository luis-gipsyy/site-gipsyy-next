import React, { ReactElement } from 'react';

import * as Styled from './styles';

interface InputProps {
  icon?: ReactElement;
  label: string;
  type?: string;
  name: string;
  value?: string;
  variant?: 'primary' | 'secondary';
  placeholder?: string;
  error?: boolean;
  onBlur?: () => void;
  onChange?: () => void;
  defaultValue?: string;
  required?: boolean;
  disabled?: boolean;
}

const Input = ({
  label,
  type,
  name,
  value,
  placeholder,
  onBlur,
  error,
  onChange,
  defaultValue,
  required,
  disabled,
  icon,
  variant = 'primary',
}: InputProps): ReactElement => {
  const isVariantPrimary = variant === 'primary';

  return (
    <Styled.Wrapper variant={variant}>
      {isVariantPrimary && (
        <label className="label" htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <input
        className="input"
        type={type}
        id={name}
        name={name}
        value={value}
        defaultValue={defaultValue}
        placeholder={placeholder || ' '}
        onChange={onChange}
        onBlur={onBlur}
        disabled={disabled}
        required={required}
      />
      {!isVariantPrimary && (
        <label className="label" htmlFor={name}>
          {label} {required && <span>*</span>}
        </label>
      )}
      <div className="icon">{icon}</div>
      {error && <p className="error">{error}</p>}
    </Styled.Wrapper>
  );
};

export default Input;
