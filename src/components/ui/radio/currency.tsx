import { FC } from 'react';
import { ICurrencySelectorProps } from './types';

export const CurrencySelectorUI: FC<ICurrencySelectorProps> = (props) => {
  return (
    <div>
      {props.options.map(option => (
        <label key={option.value}>
          <input
            type="radio"
            name="currency"
            value={option.value}
            checked={props.selectedCurrency === option.value}
            onChange={() => props.onCurrencyChange(option.value)}
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};