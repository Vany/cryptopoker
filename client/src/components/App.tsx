import * as React from "react";
import {chat, chatInput, chatWin, mainBlock, nameInput} from "../scss/index.scss";

export class App extends React.Component {
    render() {
        return <div className={mainBlock}>
            <div className={nameInput}>
                <input/>
            </div>
            <div className={chat}>
                <div className={chatWin}>

                </div>
                <div className={chatInput}>
                    <input/>
                </div>
            </div>
        </div>;
    }
}