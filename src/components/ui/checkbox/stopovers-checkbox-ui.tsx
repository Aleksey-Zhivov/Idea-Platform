import { FC } from "react";
import { TCheckboxGroupProps } from "./types";
import "./stopovers-checkbox-ui.scss";

export const StopoverCheckboxUI: FC<TCheckboxGroupProps> = (props) => {
  return (
    <div className="sidebar__stopover-checkboxes">
      <h4 className="sidebar__stopover-checkboxes-title">Количество пересадок</h4>
      <div className="sidebar__stopover-checkboxes-wrapper">
        <label
          className={`sidebar__stopover-checkboxes-block_label ${
            props.checkboxes.all ? "checked" : ""
          }`}
        >
          <input
            type="checkbox"
            className="sidebar__stopover-checkboxes-block_checkbox"
            name="all"
            checked={props.checkboxes.all}
            onChange={props.onCheckboxChange}
          />
          Все
        </label>
      </div>
      {props.checkboxesArray.sort().map((box) => (
        <div
          key={box}
          className="sidebar__stopover-checkboxes-wrapper">
          <label
            className={`sidebar__stopover-checkboxes-block_label ${
              props.checkboxes[box] ? "checked" : ""
            }`}
          >
            <div className="sidebar__stopover-checkboxes-block_current">
              <input
                type="checkbox"
                className="sidebar__stopover-checkboxes-block_current-checkbox"
                name={box.toString()}
                checked={props.checkboxes[box] || false}
                onChange={props.onCheckboxChange}
              />
              {box === 0 ? "Без" : box} пересад{props.ending[box]}
              <span 
                className="sidebar__stopover-checkboxes-block_current-only"
                onClick={() => props.handleOnlyClick(box)} >только</span>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};

//из-за того, что есть ограничения в виде адаптации под IE11, 
//приходится использовать управление классами при помощи JS. 
//если бы таких ограничений не было, то все можно было бы сделать легко с помощью :has().
