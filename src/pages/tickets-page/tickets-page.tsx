import { FC, useEffect, useState } from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Tickets } from "../../components/tickets/tickets";
import { useCustomSelector } from "../../services/store";
import './tickets-page.scss';
import { ITicket } from "../../models/ticket.model";
import { Preloader } from "../../components/ui/preloader/preloader";
import { TCheckboxState } from "../../components/sidebar/types";

export const TicketsPage: FC = () => {
    const ticketsFromStore = useCustomSelector((store) => store.getTickets.response);
    const ticketsIsLoading = useCustomSelector((store) => store.getTickets.isLoading);

    const [tickets, setTickets] = useState<ITicket[]>([]);
    const [checkboxesState, setCheckboxesState] = useState<TCheckboxState>({});

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
            <Sidebar onChange={getState} />
            {!ticketsIsLoading ? <Tickets tickets={tickets} /> : <Preloader />}
        </main>
    );
};
