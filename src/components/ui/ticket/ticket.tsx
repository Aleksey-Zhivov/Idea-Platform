import { FC } from 'react';
import './ticket.scss';
import { TTicketUIProps } from './types';

export const Ticket: FC<TTicketUIProps> = (props) => {
    let currencySymbol: string;

    switch (props.currency) {
        case 'USD':
            currencySymbol = '$';
            break;
        case 'EUR':
            currencySymbol = '€';
            break;
        case 'RUB':
            currencySymbol = '₽';
            break;
    }

    return (
        <div className='ticket'>
            <div>{props.carrier}</div>
            <button>{props.price} {currencySymbol}</button>
            <div>
                <span>{props.departure_time}</span>
                <span>{props.origin_name}</span>
                <span>{props.arrival_date}</span>
            </div>
            <div>{props.stops} пересадка{props.stops > 1 ? 'и' : ''}</div>
            <div>
                <span>{props.arrival_date}</span>
                <span>{props.destination_name}</span>
                <span>{props.arrival_time}</span>
            </div>
        </div>
    );
};

