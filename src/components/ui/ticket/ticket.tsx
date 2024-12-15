import { FC } from 'react';
import './ticket.scss';
import { TTicketUIProps } from './types';

import stopoverIcon from '../../../assets/stopover.svg';
import { Modal } from '../../modal/modal';

export const TicketUI: FC<TTicketUIProps> = (props) => (
    <>
        <div className='ticket'>
            <div className='ticket__buy'>
                <img className='ticket__buy-carrier' src={props.carrierIcon} alt="иконка перевозчика" />
                <button className='ticket__buy-button' onClick={props.openModal}>Купить<br/>за {(props.ticket.price * props.exchangeRates).toLocaleString('ru-RU')} {props.currencySymbol}</button>
            </div>
            <div className='ticket__information'>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.ticket.departure_time}</span>
                    <span className='ticket__information-destinations_place'>{props.ticket.origin}, {props.ticket.origin_name}</span>
                    <span className='ticket__information-destinations_date'>{props.formatDate(props.ticket.departure_date)}</span>
                </div>
                <div className='ticket__information-stopover'>
                    <div 
                        className='ticket__information-stopover_text'>
                            {
                                props.ticket.stops === 0 ? 'Без' : props.ticket.stops
                            } пересад{
//не знаю будет ли кто читать комменты, но тут можно было бы унифицировать кастомный
//хук useEnding и использовать его, но, так сказать, для разнообразия будет так
                                props.ticket.stops === 0 ? 'ок' : props.ticket.stops === 1 ? 'ка' : 'ки'}
                    </div>
                    <img className="ticket__information-stopover_icon" src={stopoverIcon} alt="иконка самолета для информации о пересадках" />
                </div>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.ticket.arrival_time}</span>
                    <span className='ticket__information-destinations_place'>{props.ticket.destination}, {props.ticket.destination_name}</span>
                    <span className='ticket__information-destinations_date'>{props.formatDate(props.ticket.arrival_date)}, </span>
                </div>
            </div>
        </div>
        <Modal key={props.isModalOpen ? 'open' : 'closed'} isOpen={props.isModalOpen} onClose={props.closeModal}>
            <h2>Ура, купили!</h2>
            <p>Ваш билет успешно приобретён.</p>
        </Modal>
    </>

);
