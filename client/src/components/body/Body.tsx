import * as React from "react";
import {homeCenter, homeCenterHeader, homeCenterSpan, mainBlock, homeCenterPhoto} from "../../scss/index.scss";
import photo from '../../img/photo.jpg'

export class Body extends React.Component {
    render() {
        return <div className={mainBlock}>
            <div className={homeCenter}>
                <div className={homeCenterPhoto}>
                    <img src={photo}/>
                </div>
                <div className={homeCenterHeader}>
                    <span>Metelkin Nikita</span>
                </div>
                <div className={homeCenterSpan}>
                    <span>Metelkin Nikita</span>
                </div>
            </div>
        </div>;
    }
}