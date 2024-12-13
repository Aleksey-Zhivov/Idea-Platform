import { FC } from 'react';
import { ICurrencySelectorProps } from '../ui/radio/types';
import { CurrencySelectorUI } from '../ui/radio/currency';

export const CurrencySelector: FC<ICurrencySelectorProps> = (props) => {
  return (
    <CurrencySelectorUI
      options={props.options}
      selectedCurrency={props.selectedCurrency}
      onCurrencyChange={props.onCurrencyChange}
    />
  );
};
