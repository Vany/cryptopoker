import * as React from "react";
import {headerButton, headerButtonIco, headerButtonIcoImg} from "../../scss/index.scss";
import {HomeSvg} from "../svg/HomeSvg";

export interface HeaderButtonProps {
    id: number;
    action: string;
    text: string;
}

export class HeaderButton extends React.Component<HeaderButtonProps, {}> {
    render() {
        return <div key={this.props.id} className={headerButton}>
            {/*<div className={headerButtonGlow}/>*/}
            <div className={headerButtonIco}>
                <HomeSvg className={headerButtonIcoImg}/>
            </div>
            {/*<div className={headerButtonText}>{this.props.text}</div>*/}
        </div>;
    }
}