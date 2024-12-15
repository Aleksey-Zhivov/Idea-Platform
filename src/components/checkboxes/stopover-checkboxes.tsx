import { ChangeEvent, FC, useEffect, useState } from 'react';
import { TCheckboxContainerProps } from './types';
import { TCheckboxState } from '../sidebar/types';
import { StopoverCheckboxUI } from '../ui/checkbox/stopovers-checkbox-ui';

export const StopoverCheckbox: FC<TCheckboxContainerProps> = (props) => {
  const [checkboxes, setCheckboxes] = useState<TCheckboxState>({
    all: false,
  });

  useEffect(() => {
    if (props.checkboxesArray.length > 0) {
      const initialState = props.checkboxesArray.reduce((state, item) => {
        state[item] = true;
        return state;
      }, {} as TCheckboxState);

      setCheckboxes({
        all: true,
        ...initialState,
      });
    }
  }, [props.checkboxesArray]);

  const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;

    if (checkboxes[name as keyof TCheckboxState] === checked) {
      return;
    }

    if (name === 'all') {
      const updatedCheckboxes = props.checkboxesArray.reduce((state, item) => {
        state[item] = checked;
        return state;
      }, {} as TCheckboxState);

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

  const handleOnlyClick = (box: number) => {
    if (checkboxes.all !== true) {
      const resetAll = { all: true };
      setCheckboxes(resetAll);
    } else {
      handleCheckboxChange({
        target: { name: 'all', checked: false },
      } as ChangeEvent<HTMLInputElement>);
      handleCheckboxChange({
        target: { name: box.toString(), checked: true },
      } as ChangeEvent<HTMLInputElement>);
    }
  };

  useEffect(() => {
    props.onCheckboxChange(checkboxes);
  }, [checkboxes]);

  return (
    <StopoverCheckboxUI
      checkboxes={checkboxes}
      checkboxesArray={props.checkboxesArray}
      onCheckboxChange={handleCheckboxChange}
      ending={props.ending}
      handleOnlyClick={handleOnlyClick}
    />
  );
};
