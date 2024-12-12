export type TCheckboxContainerProps = {
    checkboxesArray: number[];
    ending: Record<number, string>;
    onCheckboxChange: (updatedCheckboxes: Record<number, boolean>) => void; 
  }