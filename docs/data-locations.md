# データの場所（awai fs / pointer）

## ポリシー

データ自体は yataverse.com の awai fs に保存する。GitHub には datalad の pointer
のみ置く（バイナリ・大物テキストの本文は GitHub に置かない）。

## 現在の状態

- awai fs の CID と所在場所は **未確定（決定待ち）**。yataverse.com への書き込みは
  この時点では実行していない。
- GitHub 側の pointer の場所: `data/datalad-pointer.json`
- 初期表示の静的スナップショット: `app/src/data.js`（自作の要約表のみ。第三者の
  本文は含まない）

## awai fs に格納予定のもの

- `receipts/2026-11-23.edn`（AWAI-3824 の receipts 最新）の本体
- ダッシュボード用スナップショットの生成元データ（取得済みのもののみ。最小限）
- スクリーンショット等の生成物（GitHub には置かず、yataverse.com 側に置く）

## CID の記録欄

| 名前 | CID | awai fs の場所 | 備考 |
| --- | --- | --- | --- |
| receipts/2026-11-23.edn | `TBD` | `TBD` | upload 待ち |
| dashboard snapshot | `TBD` | `TBD` | upload 待ち |

CID が確定したらこの表と `data/datalad-pointer.json` の両方を更新する。
