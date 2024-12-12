import { FC } from 'react';
import './tickets.scss';
import { Ticket } from '../ui/ticket/ticket';
import { TTicketProps } from './types';

export const Tickets: FC<TTicketProps> = (props) => {
    return (
        <section className='tickets'>
            {props.tickets.map((ticket, id) => {
                return (
                    <div key={id} >
                        <h2>{ticket.destination}</h2>
                        <Ticket 
                            currency={'RUB'} 
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
                            price={ticket.price} />
                    </div>
                )
            })}
        </section>   
    )
}