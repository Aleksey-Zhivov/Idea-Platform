import { FC } from 'react';
import { TCheckboxGroupProps } from './type';

export const CheckboxGroup: FC<TCheckboxGroupProps> = ( props) => {
  return (
    <div>
      <label>
        <input
          type="checkbox"
          name="all"
          checked={props.checkboxes.all}
          onChange={props.onCheckboxChange}
        />
        Все
      </label>

      {props.checkboxesArray.sort().map((box) => (
        <label key={box}>
          <input
            type="checkbox"
            name={box.toString()}
            checked={(props.checkboxes[box]) || false}
            onChange={props.onCheckboxChange}
          />
          {box === 0 ? 'Без' : box} пересад{props.ending[box]}
        </label>
      ))}
    </div>
  );
};
