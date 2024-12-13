import { FC, useEffect, useState } from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Tickets } from "../../components/tickets/tickets";
import { useCustomSelector } from "../../services/store";
import './tickets-page.scss';
import { ITicket } from "../../models/ticket.model";
import { Preloader } from "../../components/ui/preloader/preloader";
import { TCheckboxState } from "../../components/sidebar/types";
import { Currency } from "../../components/ui/radio/types";

export const TicketsPage: FC = () => {
    const ticketsFromStore = useCustomSelector((store) => store.getTickets.response);
    const ticketsIsLoading = useCustomSelector((store) => store.getTickets.isLoading);

    const [tickets, setTickets] = useState<ITicket[]>([]);
    const [checkboxesState, setCheckboxesState] = useState<TCheckboxState>({});
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('RUB');
    const [exchangeRates] = useState<Record<Currency, number>>({
        USD: 0.0096,
        EUR: 0.0091,
        RUB: 1,
    });

    const getCurrency = (currency: Currency) => {
        return setSelectedCurrency(currency);
    };

    const getState = (state: TCheckboxState) => {
        setCheckboxesState(state);
    };

    useEffect(() => {
        if (checkboxesState.all) {
            setTickets(ticketsFromStore);
        } else {
            const filteredTickets = ticketsFromStore.filter((ticket) => {
                const ticketType = ticket.stops; 
                return checkboxesState[ticketType];
            });

            setTickets(filteredTickets);
        }
    }, [checkboxesState, ticketsFromStore]);

    return (
        <main className="tickets-page">
            <Sidebar 
                onChange={getState} 
                getCurrency={getCurrency}/>
            {!ticketsIsLoading ? <Tickets 
                tickets={tickets}
                selectedCurrency={selectedCurrency} 
                exchangeRates={exchangeRates[selectedCurrency]} /> : <Preloader />}
        </main>
    );
};
