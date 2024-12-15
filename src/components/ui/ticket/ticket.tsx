import { FC, useState } from 'react';
import './ticket.scss';
import { TTicketUIProps } from './types';
import TK from '../../../assets/TK.png';
import S7 from '../../../assets/S7.png';
import SU from '../../../assets/SU.png';
import BA from '../../../assets/BA.png';
import stopoverIcon from '../../../assets/stopover.svg';
import { format, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Modal } from '../../modal/modal';

export const Ticket: FC<TTicketUIProps> = (props) => {
    const [isModalOpen, setModalOpen] = useState(false);

    const lockBodyScroll = () => {
        document.body.classList.add('fixed');
    };

    const unlockBodyScroll = () => {
        document.body.classList.remove('fixed');
    };

    const openModal = () => {
        lockBodyScroll();
        setModalOpen(true);
    
    };
    
    const closeModal = () => {
        unlockBodyScroll();
        setModalOpen(false);
    };

    let currencySymbol: string;
    let carrierIcon : string = '';

    const formatDate = (input: string) => {
        const date = parse(input, 'dd.MM.yy', new Date()); 
        return format(date, 'dd.MM.yyyy, eee', { locale: ru }); 
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
                <button className='ticket__buy-button' onClick={openModal}>Купить<br/>за {props.price.toLocaleString('ru-RU')} {currencySymbol}</button>
            </div>
            <div className='ticket__information'>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.departure_time}</span>
                    <span className='ticket__information-destinations_place'>{props.origin}, {props.origin_name}</span>
                    <span className='ticket__information-destinations_date'>{formatDate(props.departure_date)}</span>
                </div>
                <div className='ticket__information-stopover'>
                    <div 
                        className='ticket__information-stopover_text'>
                            {
                                props.stops === 0 ? 'Без' : props.stops
                            } пересад{
    //не знаю будет ли кто читать комменты, но тут можно было бы унифицировать кастомный
    //хук useEnding и использовать его, но, так сказать, для разнообразия будет так
                                props.stops === 0 ? 'ок' : props.stops === 1 ? 'ка' : 'ки'}
                    </div>
                    <img className="ticket__information-stopover_icon" src={stopoverIcon} alt="иконка самолета для информации о пересадках" />
                </div>
                <div className='ticket__information-destinations'>
                    <span className='ticket__information-destinations_time'>{props.arrival_time}</span>
                    <span className='ticket__information-destinations_place'>{props.destination}, {props.destination_name}</span>
                    <span className='ticket__information-destinations_date'>{formatDate(props.arrival_date)}, </span>
                </div>
            </div>
            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>Ура, купили!</h2>
                <p>Ваш билет успешно приобретён.</p>
            </Modal>
        </div>
    );
};

