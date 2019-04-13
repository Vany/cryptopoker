import * as React from "react";
import {Header} from "./header/Header";
import {Body} from "./body/Body";
import {app} from "../scss/index.scss";

let buttons = [
    {id:1, action: 'home', text: 'Home'},
    {id:2, action: 'projects', text: 'Projects'},
    {id:3, action: 'contacts', text: 'Contacts'},
    {id:4, action: 'contacts', text: 'Contacts'},
    {id:5, action: 'contacts', text: 'Contacts'},
];

export class App extends React.Component {
    render() {
        return <div className={app}>
            <Header buttons={buttons}/>
            {/*<br/>*/}
            <Body/>
        </div>;
    }
}