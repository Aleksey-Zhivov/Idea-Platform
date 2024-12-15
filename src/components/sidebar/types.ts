import { Currency } from "../ui/currency/types";

export type TSidebar = {
    onChange: (checkboxesState: TCheckboxState) => void;
    getCurrency: (currency: Currency) => void
}

export type TCheckboxState = Record<number | string, boolean>;
