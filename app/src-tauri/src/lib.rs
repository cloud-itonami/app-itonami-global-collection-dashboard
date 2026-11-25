// 収集状況ダッシュボード: 静的スナップショット表示のみ。外部通信はしない。
#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
