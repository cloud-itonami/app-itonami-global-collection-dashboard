# app-itonami-global-collection-dashboard

収集状況を見える化する Tauri の itonami dapp（収集状況ダッシュボード）。Ontology Collector（AWAI-3618）配下の現況を、初期は静的スナップショットで一覧表示する。

## ライセンス

**ライセンスは決定待ち（decision pending）です。** 新しい license を追加しません。決定後にここに明記します。

## 構成

Tauri v3（`@tauri-apps/cli 3.0.0-alpha.6`、cargo tauri `=3.0.0-alpha.6`）の現行標準に合わせる:

- `app/package.json` — 前端パッケージ、`npm run tauri dev` / `npm test` を持つ
- `app/src/` — ダッシュボード静的フロントエンド（`index.html`, `app.js`, `style.css`, `data.js`）
- `app/src-tauri/` — Tauri シェル（`tauri.conf.json`, `Cargo.toml`, `build.rs`, `src/lib.rs`, `src/main.rs`, `capabilities/main.json`）
- `data/datalad-pointer.json` — datalad pointer の雛形（GitHub には pointer のみ。データ本体は yataverse.com の awai fs）
- `docs/data-locations.md` — awai fs の CID と場所の記録

`cargo check` は `app/src-tauri` で実行します（CI の `app-host` job と同じ手順）:

```sh
cd app/src-tauri && cargo check
```

## 起動

```sh
cd app
npm install
npm run tauri dev
```

フロントエンドだけの確認（Tauri なしでブラウザで開く）:

```sh
cd app
npm test          # data.js の整合性テスト
open src/index.html
```

## データと保管ポリシー

- データ自体は **yataverse.com の awai fs** を前提に保存する。GitHub には **datalad の pointer のみ** 置き、バイナリ・大物テキストの本文は GitHub に置かない。
- `data/datalad-pointer.json` が pointer の雛形。実際の CID と awai fs の場所が決まったらここに記録する（未確定の場合は `docs/data-locations.md` に理由とともに記す）。
- ダッシュボード初期表示は静的スナップショット（`app/src/data.js`）から読む。自作の説明・表のみで、第三者の本文は新しく増やさない。取得・保存も最小限。

## 現況スナップショット（初期）

| Issue | Item | Linear | 備考 |
| --- | --- | --- | --- |
| AWAI-3618 | 81 Done（2d ago） | — | Ontology Collector 親 |
| AWAI-3317 | 129 Planned | — | PR #17 squash merge `cf85fa9`、verify 9538/9538 fail 0 |
| AWAI-3822 | 133 Planned | — | — |
| AWAI-3823 | 154 Planned | — | — |
| AWAI-3824 | 121 Needs you（3d ago） | In Progress | receipts 最新 `receipts/2026-11-23.edn`: 28 checked、27x2xx 1x4xx 0x5xx、bot-blocked 1 |
| AWAI-4087 | — | — | 次の波（N3 / N8）の scout 状態と blocker、N8 memo 案 |

## CI

- `app` job: `npm ci` + `npm test`
- `app-host` job: `cargo check`（`app/src-tauri`）
