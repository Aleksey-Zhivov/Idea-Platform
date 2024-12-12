import { FC, useEffect, useState } from 'react';
import './sidebar.scss';
import { useCustomSelector } from '../../services/store';
import { TSidebar, TCheckboxState } from './types';
import { CheckboxContainer } from '../checkboxes/chexkboxes';

export const Sidebar: FC<TSidebar> = ((props) => {
    const tickets = useCustomSelector((store) => store.getTickets.response);
    const stopOvers: number[] = [];
    const [ending, setEnding] = useState<Record<number, string>>({});
    let temp: Record<number, string> = {};
    const [checkboxState, setCheckboxState] = useState<TCheckboxState>({
        0: false,
        1: false,
        2: false,
        3: false,
        all: true,
      });

    tickets.map((ticket) => {
        stopOvers.includes(ticket.stops) ? null : stopOvers.push(ticket.stops);
    });

    const handleCheckboxChange = (updatedCheckboxes: TCheckboxState) => {
        setCheckboxState(updatedCheckboxes);
    };

    useEffect(() => {
        stopOvers.forEach((stops) => {
            if (stops === 0 || (stops >= 5 && stops <= 9)) {
                temp = {...temp, [stops]: 'ок'};
            } else if (stops === 1) {
                temp = {...temp, [stops]: 'ка'};
            } else if (stops >= 2 && stops <= 4) {
                temp = {...temp, [stops]: 'ки'};
            }
            setEnding(temp)
        });

        props.onChange(checkboxState);

    }, [Object.keys(tickets).length, checkboxState]);

    return (
        <section className='sidebar'>
                <CheckboxContainer
                    checkboxesArray={stopOvers}
                    onCheckboxChange={handleCheckboxChange}
                    ending={ending}
                />
        </section>
    )
});