import { ITicket } from "../../models/ticket.model"
import { Currency } from "../ui/currency/types";

export type TTicketProps = {
    tickets: ITicket[];
    selectedCurrency: Currency;
    exchangeRates: number;
};