import { ReactElement } from 'react';
import { Calendar } from '@styled-icons/bootstrap/Calendar';

import * as Styled from './styles';

interface DateInputProps {
  hasGap?: boolean;
}

const DateInput = ({ hasGap }: DateInputProps): ReactElement => {
  return (
    <Styled.Wrapper hasGap={Boolean(hasGap)}>
      <div className="calendar-going">
        <label htmlFor="calendar-going" className="label">
          Data da ida
        </label>
        <input
          id="calendar-going"
          type="text"
          className="input"
          placeholder="Incluir ida"
        />
        <div className="icon">
          <Calendar size={16} />
        </div>
      </div>
      <div className="calendar-back">
        <label htmlFor="calendar-back" className="label">
          Data da volta
        </label>
        <input
          id="calendar-back"
          type="text"
          className="input"
          placeholder="Incluir volta"
        />
        <div className="icon">
          <Calendar size={16} />
        </div>
      </div>
    </Styled.Wrapper>
  );
};

export default DateInput;
