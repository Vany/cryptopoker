import * as React from "react";
import {footer, footer_triangle, footerGit} from "../../scss/index.scss";

export class Footer extends React.Component {
    render() {
        return <div className={footer}>
            <div className={footer_triangle}/>
            <img alt={"github"} className={footerGit} src={'/src/img/github.png'}/>
        </div>;
    }
}