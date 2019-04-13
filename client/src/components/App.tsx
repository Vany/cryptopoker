import * as React from "react";
import {chat, chatInput, chatWin, mainBlock, nameInput} from "../scss/index.scss";
import * as fluence from "fluence";
import {Result} from "fluence/dist/Result";
import {randomBytes} from "crypto";
import {encode} from "punycode";
import {AppSession} from "fluence/dist/AppSession";
// import Web3 from "web3";


export class App extends React.Component {
    // res:string;
    // componentDidMount(): void {
    //     // let web3=new Web3(null);
    //     // let acc=web3.eth.accounts.create();
    //     // console.log(acc);
    //     let connection=fluence.directConnect("localhost",30000, "0", "fwafwafwaa");
    //     let req={
    //         method:"GetPlayerNum"
    //     };
    //     connection.request(JSON.stringify(req)).result().then((res:Result)=>{
    //         console.log('dwadwawa');
    //         alert(res.asString());
    //         this.res=res.asString();
    //     });
    // }

    render() {
        // let id=randomBytes(10).toString("base64");
        // let connection=fluence.directConnect("localhost",30000, "0", "session");
        let req={
            method:"GetPlayerNum"
        };
        // connection.request(JSON.stringify(req)).result().then((res:Result)=>{
        //     console.log('dwadwawa');
        //     console.log(res.asString());
        // });
        // console.log("Fwafwa");
        // console.log("dwaaw");

        let contract = "0xeFF91455de6D4CF57C141bD8bF819E5f873c1A01";                         // Fluence contract address
        let appId = "73";                                                                      // Deployed database id
        let ethereumUrl = "http://data.fluence.one:8545";                                    // Ethereum light node URL

// Connect to your app
        fluence.connect(contract, appId, ethereumUrl).then((s:AppSession) => {
            console.log("Session created");
            let session = s;
// Send a request
//             session.request(req);

// Send a request, and read its result
            session.request(JSON.stringify(req)).result().then((r:Result) => {
                console.log("Result: ", JSON.parse(r.asString()));
            });
        });

        return <div className={mainBlock}>
            <div className={nameInput}>
                <input type="text"/>
            </div>
            <div className={chat}>
                <div className={chatWin}>

                </div>
                <div className={chatInput}>
                    <input type="text"/>
                </div>
            </div>
        </div>;
    }
}