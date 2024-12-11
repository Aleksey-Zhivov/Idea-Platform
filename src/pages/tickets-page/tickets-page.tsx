import { FC, useEffect } from "react";
import { Sidebar } from "../../components/sidebar/sidebar";
import { Tickets } from "../../components/tickets/tickets";
import { useCustomDispatch } from "../../services/store";
import { fetchTickets } from "../../services/getTicketsSlice";
import './tickets-page.scss';

export const TicketsPage: FC = () => {
    const dispatch = useCustomDispatch();

    useEffect(() => {
        dispatch(fetchTickets());
    },[]);

    return (
        <main className="tickets-page">
            <Sidebar />
            <Tickets />
        </main>
    )
}