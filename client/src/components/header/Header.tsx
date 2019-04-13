import * as React from "react";
import {HeaderButton, HeaderButtonProps} from "./HeaderButton";
import {header} from "../../scss/index.scss";

export interface HeaderProps {
    buttons: HeaderButtonProps[];
}

export class Header extends React.Component<HeaderProps, {}> {

    render() {
        let buttons = this.props.buttons.map((button) => {
            return <HeaderButton key={button.id} action={button.action} text={button.text} id={button.id}/>
        });

        return <div className={header}>
            {buttons}
        </div>;
    }
}