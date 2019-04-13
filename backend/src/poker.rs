use fluence::sdk::*;
use log::info;
use serde_json::{Value};
use serde::{Deserialize, Serialize};

fn init() {
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
  
    let ret = match request.method.as_ref() {
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
