import { FC, useEffect, useState, useMemo } from 'react';
import './sidebar.scss';
import { useCustomSelector } from '../../services/store';
import { TSidebar, TCheckboxState } from './types';
import { Currency, ICurrencyOption } from '../ui/radio/types';
import { CurrencySelector } from '../currency-selector/currensy-selector';
import { StopoverCheckbox } from '../checkboxes/stopover-checkboxes';

export const Sidebar: FC<TSidebar> = (props) => {
    const tickets = useCustomSelector((store) => store.getTickets.response);
    const stopOvers: number[] = useMemo(() => {
        const uniqueStopOvers = new Set<number>();
        tickets.forEach(ticket => uniqueStopOvers.add(ticket.stops));
        return Array.from(uniqueStopOvers);
    }, [tickets]);

    const [ending, setEnding] = useState<Record<number, string>>({});
    const [selectedCurrency, setSelectedCurrency] = useState<Currency>('RUB');
    const [checkboxState, setCheckboxState] = useState<TCheckboxState>(() => {
        const initialState: TCheckboxState = { all: false };
        stopOvers.forEach(stops => initialState[stops] = true);
        return initialState;
    });

    const handleCheckboxChange = (updatedCheckboxes: TCheckboxState) => {
        setCheckboxState(updatedCheckboxes);
    };

    const handleCurrencyChange = (currency: Currency) => {
        setSelectedCurrency(currency);
    };

    useEffect(() => {
        const temp: Record<number, string> = {};
        stopOvers.forEach((stops) => {
            if (stops === 0 || (stops >= 5 && stops <= 9)) {
            temp[stops] = 'ок';
            } else if (stops === 1) {
            temp[stops] = 'ка';
            } else if (stops >= 2 && stops <= 4) {
            temp[stops] = 'ки';
            }
        });
        setEnding(temp);
        props.onChange(checkboxState);
        props.getCurrency(selectedCurrency);
    }, [stopOvers, checkboxState, selectedCurrency]);

    const currencyOptions: ICurrencyOption[] = [
        { value: 'RUB', label: 'RUB' },
        { value: 'USD', label: 'USD' },
        { value: 'EUR', label: 'EUR' },
    ];

    return (
        <section className='sidebar'>
            <CurrencySelector
                options={currencyOptions}
                selectedCurrency={selectedCurrency}
                onCurrencyChange={handleCurrencyChange}
            />
            <StopoverCheckbox
                checkboxesArray={stopOvers}
                onCheckboxChange={handleCheckboxChange}
                ending={ending}
            />
        </section>
    );
};
