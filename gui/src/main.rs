#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]

mod chat;
mod commands;
mod error;
mod project;
mod prompt;
mod result;
mod setting;
mod state;
mod utils;
mod window;

#[tokio::main]
async fn main() {
    env_logger::init();
    tauri::Builder::default()
        .manage(state::AppState::init().await.unwrap())
        .invoke_handler(tauri::generate_handler![
            commands::all_chats,
            commands::load_chat,
            commands::new_chat,
            commands::delete_chat,
            commands::send_message,
            commands::resend_message,
            commands::set_api_key,
            commands::check_api_key,
            commands::get_settings,
            commands::get_theme,
            commands::set_theme,
            commands::set_proxy,
            commands::get_proxy,
            commands::has_api_key,
            commands::save_as_markdown,
            commands::all_prompts,
            commands::create_prompt,
            commands::update_prompt,
            commands::delete_prompt,
            commands::load_prompt,
            commands::show_window,
            commands::debug_log,
        ])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
