import { snapshot } from "./data.js";

function el(tag, attrs, text) {
  const n = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs || {})) n.setAttribute(k, v);
  if (text !== undefined) n.textContent = text;
  return n;
}

const panel = document.getElementById("panel");
if (!panel) throw new Error("#panel is missing");

panel.replaceChildren(
  el("p", { class: "muted" }, `snapshot: ${snapshot.updatedAt} — ${snapshot.note}`),
  summarySection(),
  issuesSection(),
);

function summarySection() {
  const cards = el("div", { class: "cards" });
  const r = snapshot.receipts;
  cards.append(
    card("receipts  checked", `${r.checked}`, `${r.file} (${r.ok2xx}×2xx ${r.client4xx}×4xx ${r.server5xx}×5xx)`),
    card("bot-blocked", `${r.botBlocked}`, "glitched / denied 等"),
    card("Issues", `${snapshot.issues.length}`, "AWAI-3618 と子 issue 一覧"),
    card("storage", "awai fs", "yataverse.com • pointer のみ GitHub"),
  );
  return cards;
  function card(label, big, sub) {
    const c = el("div", { class: "card" });
    c.append(el("h3", {}, label), el("p", { class: "big" }, big), el("p", { class: "muted" }, sub));
    return c;
  }
}

function issuesSection() {
  const h = el("h2", {}, "AWAI 状況一覧");
  const head = ["Issue", "Item (count/state/updated)", "Linear State / Updated", "備考"];
  const table = el("table");
  const headRow = el("tr");
  for (const c of head) headRow.append(el("th", { scope: "col" }, c));
  const thead = el("thead");
  thead.append(headRow);
  table.append(thead);
  const body = el("tbody");
  for (const i of snapshot.issues) {
    const tr = el("tr");
    tr.append(
      el("td", {}, i.id),
      el("td", {}, i.item.count == null ? i.item.state : `${i.item.count} ${i.item.state} (${i.item.updated})`),
      el("td", {}, `${i.linear.state} / ${i.linear.updated}`),
      el("td", {}, i.note),
    );
    body.append(tr);
  }
  table.append(body);
  const wrap = el("div", { class: "table-scroll" });
  wrap.append(table);
  const section = el("section");
  section.append(h, wrap);
  return section;
}
