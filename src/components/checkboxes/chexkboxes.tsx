import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TCheckboxContainerProps } from './types';
import { TCheckboxState } from '../sidebar/types';
import { CheckboxGroup } from '../ui/checkbox/checkbox';

export const CheckboxContainer: FC<TCheckboxContainerProps> = (props) => {
  const initialState = props.checkboxesArray.reduce((state, item) => {
    state[item] = true;
    return state;
  }, {} as TCheckboxState);

  const [checkboxes, setCheckboxes] = useState<TCheckboxState>({
    all: true, 
    ...initialState,
  });

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (name === 'all') {
      const updatedCheckboxes = props.checkboxesArray.reduce((state, item) => {
        state[item] = checked;
        return state;
      }, {} as TCheckboxState);

      console.log(updatedCheckboxes);

      setCheckboxes({
        all: checked,
        ...updatedCheckboxes,
      });

    } else {
      const updatedCheckboxes = { ...checkboxes, [name]: checked };
      const allChecked = props.checkboxesArray.every((item) => updatedCheckboxes[item]);
      updatedCheckboxes.all = allChecked;
      setCheckboxes(updatedCheckboxes);
    }
  };

  useEffect(() => {
    props.onCheckboxChange(checkboxes);
  }, [checkboxes]);

  return (
    <CheckboxGroup
      checkboxes={checkboxes}
      checkboxesArray={props.checkboxesArray}
      onCheckboxChange={handleCheckboxChange}
      ending={props.ending}
    />
  );
};
