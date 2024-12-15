import { ITicket } from "../../models/ticket.model";
import { Currency } from "../ui/currency/types";

export type TTicketProps = {
    currency: Currency;
    ticket: ITicket;
    exchangeRates: number;
}