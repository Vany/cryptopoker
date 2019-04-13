#[macro_use]
extern crate lazy_static;

use std::sync::Mutex;
use fluence::sdk::*;
use log::info;
use serde_json::{Value};
use serde::{Deserialize, Serialize};

pub struct Game {
    pub players_num: i8
}

impl Game {
    fn new() -> Game {
        Game{players_num:0}
    }
}

lazy_static! {
    static ref GAME: Mutex<Game> = Mutex::new(Game::new());
}

unsafe fn init() {
    let mut G = GAME.lock().expect("Lock Game");
    G.players_num = 3;
    logger::WasmLogger::init_with_level(log::Level::Info).unwrap();
    info!("new session of poker table started");
}

#[derive(Serialize, Deserialize)]
pub struct Request {
    pub method: String,
}

#[invocation_handler(init_fn=init)]
fn dispatch(input: String) -> String {
    let value: Value = serde_json::from_str(input.as_str()).expect("Cnt' parse json");
    let request: Request = serde_json::from_value(value.clone()).expect("Can't parse json into Request");

    let G = GAME.lock().expect("Lock Game");

    let ret: &str = match request.method.as_ref() {
        "GetPlayerNum" => {
            //let pnum = G.players_num;
            //serde_json::to_string(&pnum).expect("omfg").as_ref()
            ""
        },
        "GetQueue" => {
            "[]"
        },
        "SendTo" => {
            "\"OK\""
        },
        "CheckInbox" => {
            "[]"
        },
        _ => "{\"error\":true}"
  };

  ret.to_string()
}
