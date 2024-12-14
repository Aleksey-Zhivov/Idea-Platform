import { FC } from "react";
import icon from '../../assets/icon.png';
import './header.scss';

export const Header: FC = () => (
    <header className="header">
        <img 
            className="header__image"
            src={icon}
            alt="Иконка самолета" />
    </header>
);