import { FC, useState } from "react";
import { TicketUI } from "../ui/ticket/ticket";
import { TTicketProps } from "./types";
import { format, parse } from "date-fns";
import { ru } from "date-fns/locale/ru";
import TK from '../../assets/TK.png';
import S7 from '../../assets/S7.png';
import SU from '../../assets/SU.png';
import BA from '../../assets/BA.png';


export const Ticket: FC<TTicketProps> = (props) => {
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

    switch (props.ticket.carrier) {
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

    return <TicketUI 
        currency={props.currency} 
        ticket={props.ticket}
        carrierIcon={carrierIcon}
        isModalOpen={isModalOpen}
        exchangeRates={props.exchangeRates}
        currencySymbol={currencySymbol}
        openModal={openModal}
        closeModal={closeModal}
        formatDate={formatDate}/>
}