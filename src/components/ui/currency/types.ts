export type Currency = 'USD' | 'EUR' | 'RUB';

export interface ICurrencyOption {
  value: Currency;
  label: string;
};

export interface ICurrencySelectorProps {
  options: ICurrencyOption[];
  selectedCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
};