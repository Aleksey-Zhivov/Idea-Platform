import { ReactNode } from "react";
import { ITicket } from "../../../models/ticket.model";
import { Currency } from "../currency/types";

export type TTicketUIProps = {
    currency: Currency;
    ticket: ITicket;
    isModalOpen: boolean;
    carrierIcon: string;
    currencySymbol: string;
    exchangeRates: number;
    openModal: () => void;
    closeModal: () => void;
    formatDate: (input: string) => ReactNode;
}