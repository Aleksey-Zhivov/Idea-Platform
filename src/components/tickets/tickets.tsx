import { FC } from 'react';
import './tickets.scss';
import { TTicketProps } from './types';
import { Ticket } from '../ticket/ticket';

export const Tickets: FC<TTicketProps> = (props) => {
  return (
    props.tickets.length > 0 ?
    <section className='tickets'>
      {props.tickets.map((ticket, id) => (
          <Ticket 
            currency={props.selectedCurrency}
            ticket={ticket}
            exchangeRates={props.exchangeRates}
            key={id}
          />
      ))}
    </section> :
    <section className='tickets'>
      <span className='tickets__no-tickets'>Увы, мы не смогли найти для Вас билеты. Попробуйте изменить фильтр.</span>
    </section>
  );
};
