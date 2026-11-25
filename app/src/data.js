// 静的スナップショット（自作の要約のみ。第三者の本文は含まない）。
// データ本体は yataverse.com の awai fs、GitHub には data/datalad-pointer.json の pointer のみ。
export const snapshot = {
  updatedAt: "2026-11-25",
  note: "初期は静的スナップショット。ライセンスは決定待ち（README 参照）。",
  issues: [
    {
      id: "AWAI-3618",
      title: "収集状況 Tauri dapp（Ontology Collector 親）",
      item: { count: 81, state: "Done", updated: "2d ago" },
      linear: { state: "—", updated: "—" },
      note: "親 issue。ダッシュボードの対象全体。",
    },
    {
      id: "AWAI-3317",
      title: "子 issue（完了済み）",
      item: { count: 129, state: "Planned", updated: "—" },
      linear: { state: "—", updated: "—" },
      note: "PR #17 squash merge cf85fa9、verify 9538/9538 fail 0。",
    },
    {
      id: "AWAI-3822",
      title: "子 issue",
      item: { count: 133, state: "Planned", updated: "—" },
      linear: { state: "—", updated: "—" },
      note: "",
    },
    {
      id: "AWAI-3823",
      title: "子 issue",
      item: { count: 154, state: "Planned", updated: "—" },
      linear: { state: "—", updated: "—" },
      note: "",
    },
    {
      id: "AWAI-3824",
      title: "子 issue（receipts）",
      item: { count: 121, state: "Needs you", updated: "3d ago" },
      linear: { state: "In Progress", updated: "3d ago" },
      note: "receipts/2026-11-23.edn 最新: 28 checked、27x2xx 1x4xx 0x5xx、bot-blocked 1。",
    },
    {
      id: "AWAI-4087",
      title: "次の波 scout（N3 / N8）",
      item: { count: null, state: "—", updated: "—" },
      linear: { state: "—", updated: "—" },
      note: "scout 状態と blocker、N8 memo 案を確認中。",
    },
  ],
  receipts: {
    file: "receipts/2026-11-23.edn",
    checked: 28,
    ok2xx: 27,
    client4xx: 1,
    server5xx: 0,
    botBlocked: 1,
    cid: "TBD",
    awaiPath: "TBD",
  },
};
