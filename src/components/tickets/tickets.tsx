import { FC } from 'react';
import './tickets.scss';
import { Ticket } from '../ui/ticket/ticket';
import { TTicketProps } from './types';

export const Tickets: FC<TTicketProps> = (props) => {
  return (
    props.tickets.length > 0 ?
    <section className='tickets'>
      {props.tickets.map((ticket, id) => (
          <Ticket 
            currency={props.selectedCurrency}
            price={parseFloat((ticket.price * props.exchangeRates).toFixed(2))}
            origin={ticket.origin} 
            origin_name={ticket.origin_name} 
            destination={ticket.destination} 
            destination_name={ticket.destination_name} 
            departure_date={ticket.departure_date} 
            departure_time={ticket.departure_time} 
            arrival_date={ticket.arrival_date} 
            arrival_time={ticket.arrival_time} 
            carrier={ticket.carrier} 
            stops={ticket.stops} 
            key={id}
          />
      ))}
    </section> :
    <section className='tickets'>
      <span className='tickets__no-tickets'>Увы, мы не смогли найти для Вас билеты. Попробуйте изменить фильтр.</span>
    </section>
  );
};
