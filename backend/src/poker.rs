use fluence::sdk::*;

#[invocation_handler]
fn entry(name: String) -> String {
    format!("Hello, world! From user {}", name)
}
