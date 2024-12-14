import { FC } from 'react';
import { ICurrencySelectorProps } from './types';
import './currency.scss';

export const CurrencySelectorUI: FC<ICurrencySelectorProps> = (props) => (
  <div className='sidebar__currency-selector'>
    <h4 className='sidebar__currency-selector-title'>Валюта</h4>
    <div className='sidebar__currency-selector-block'>
    {props.options.map(option => (
      <label 
        className='sidebar__currency-selector-block_label' 
        key={option.value}
        data-label={option.label}>
        <input
          type="radio"
          className='sidebar__currency-selector-block_radio'
          name="currency"
          value={option.value}
          checked={props.selectedCurrency === option.value}
          onChange={() => props.onCurrencyChange(option.value)}
          />
        {option.label}
      </label>
    ))}
    </div>
  </div>
);