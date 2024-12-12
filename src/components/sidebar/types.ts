export type TSidebar = {
    onChange: (checkboxesState: TCheckboxState) => void;
}

export type TCheckboxState = Record<number | string, boolean>;
