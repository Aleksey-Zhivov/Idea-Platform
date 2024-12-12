import { FC } from 'react';
import './ticket.scss';
import { TTicketUIProps } from './types';

export const Ticket: FC<TTicketUIProps> = (props) => (
    <div className='ticket'>
        <div>{props.carrier}</div>
        <button>{props.price}{props.currency}</button>
        <div>
            <span>{props.departure_time}</span>
            <span>{props.origin_name}</span>
            <span>{props.departure_time}</span>
        </div>
        <div>{props.stops}</div>
        <div>
            <span>{props.arrival_date}</span>
            <span>{props.destination_name}</span>
            <span>{props.arrival_time}</span>
        </div>
    </div>
);
