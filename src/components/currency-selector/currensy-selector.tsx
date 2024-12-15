import { FC } from 'react';
import { ICurrencySelectorProps } from '../ui/currency/types';
import { CurrencySelectorUI } from '../ui/currency/currency';

export const CurrencySelector: FC<ICurrencySelectorProps> = (props) => {
  return (
    <CurrencySelectorUI
      options={props.options}
      selectedCurrency={props.selectedCurrency}
      onCurrencyChange={props.onCurrencyChange}
    />
  );
};
