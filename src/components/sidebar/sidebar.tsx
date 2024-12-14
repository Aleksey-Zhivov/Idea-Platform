import { FC, useState, useMemo } from 'react';
import './sidebar.scss';
import { useCustomSelector } from '../../services/store';
import { TSidebar, TCheckboxState } from './types';
import { Currency, ICurrencyOption } from '../ui/radio/types';
import { CurrencySelector } from '../currency-selector/currensy-selector';
import { StopoverCheckbox } from '../checkboxes/stopover-checkboxes';
import { useEnding } from '../../hooks/useEnding';

export const Sidebar: FC<TSidebar> = (props) => {
    const tickets = useCustomSelector((store) => store.getTickets.response);
    const stopOvers: number[] = useMemo(() => {
        const uniqueStopOvers = new Set<number>();
        tickets.forEach(ticket => uniqueStopOvers.add(ticket.stops));
        return Array.from(uniqueStopOvers);
    }, [tickets]);

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

    const { ending } = useEnding({
        stopOvers,
        checkboxState,
        selectedCurrency,
        onChange: props.onChange,
        getCurrency: props.getCurrency,
      });

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
