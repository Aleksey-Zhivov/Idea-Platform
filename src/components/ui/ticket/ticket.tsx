import { FC } from 'react';
import './ticket.scss';
import { TTicketUIProps } from './types';
import TK from '../../../assets/TK.png';
import S7 from '../../../assets/S7.png';
import SU from '../../../assets/SU.png';
import BA from '../../../assets/BA.png';
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';

export const Ticket: FC<TTicketUIProps> = (props) => {
    let currencySymbol: string;
    let carrierIcon : string = '';

    const formatDate = (input: string) => {
        const date = parse(input, 'dd.MM.yy', new Date()); // Парсим строку в дату
        return format(date, 'dd.MM.yyyy, eee', { locale: ru }); // Форматируем дату
    };

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

    switch (props.carrier) {
        case 'TK':
            carrierIcon = TK;
                break;
        case 'S7':
            carrierIcon = S7;
                break;
        case 'SU':
            carrierIcon = SU;
                break;
        case 'BA':
            carrierIcon = BA;
                break;
    }

    return (
        <div className='ticket'>
            <div className='ticket__buy'>
                <img className='ticket__buy-carrier' src={carrierIcon} alt="иконка перевозчика" />
                <button className='ticket__buy-button'>Купить<br/>за {props.price.toLocaleString('ru-RU')} {currencySymbol}</button>
            </div>
            <div className='ticket__information'>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.departure_time}</span>
                    <span className='ticket__information-destinations_place'>{props.origin}, {props.origin_name}</span>
                    <span className='ticket__information-destinations_date'>{formatDate(props.departure_date)}</span>
                </div>
                <div 
                    className='ticket__information-stopover'>
                        {
                            props.stops === 0 ? 'Без' : props.stops
                        } пересад{
//не знаю будет ли кто читать комменты, но тут можно было бы унифицировать кастомный
//хук useEnding и использовать его, но, так сказать, для разнообразия будет так
                            props.stops === 0 ? 'ок' : props.stops === 1 ? 'ка' : 'ки'}
                        </div>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.arrival_time}</span>
                    <span className='ticket__information-destinations_place'>{props.destination}, {props.destination_name}</span>
                    <span className='ticket__information-destinations_date'>{formatDate(props.arrival_date)}, </span>
                </div>
            </div>
        </div>
    );
};

