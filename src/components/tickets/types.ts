import { ITicket } from "../../models/ticket.model"
import { Currency } from "../ui/radio/types";

export type TTicketProps = {
    tickets: ITicket[];
    selectedCurrency: Currency;
    exchangeRates: number;
};