import { ChangeEvent } from "react";

export type TCheckboxGroupProps = {
    checkboxes: Record<number | string, boolean>;
    checkboxesArray: number[];
    onCheckboxChange: (event: ChangeEvent<HTMLInputElement>) => void;
    ending: Record<number, string>;
    handleOnlyClick: (box: number) => void;
  }