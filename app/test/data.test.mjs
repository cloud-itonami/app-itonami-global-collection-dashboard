import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const app = join(dirname(fileURLToPath(import.meta.url)), "..");

test("data.js の snapshot は AWAI 状況一覧を網羅する", async () => {
  const { snapshot } = await import("../src/data.js");
  assert.equal(snapshot.issues.length, 6);
  const ids = snapshot.issues.map((i) => i.id);
  for (const id of ["AWAI-3618", "AWAI-3317", "AWAI-3822", "AWAI-3823", "AWAI-3824", "AWAI-4087"]) {
    assert.ok(ids.includes(id), `issues に ${id} が含まれる`);
  }
  const p = snapshot.receipts;
  assert.equal(p.file, "receipts/2026-11-23.edn");
  assert.equal(p.checked, 28);
  assert.equal(p.ok2xx + p.client4xx + p.server5xx, p.checked);
  assert.equal(p.botBlocked, 1);
});

test("datalad pointer の雛形がある（GitHub には pointer のみ）", async () => {
  const raw = JSON.parse(
    await readFile(join(app, "..", "data", "datalad-pointer.json"), "utf8"),
  );
  assert.equal(raw.schema, "datalad-pointer.v1");
  assert.equal(raw.storage.filesystem, "awai fs");
  assert.ok(Array.isArray(raw.pointers) && raw.pointers.length >= 1);
  for (const p of raw.pointers) {
    assert.ok("cid" in p && "awaiPath" in p, "pointer に cid と awai の場所を持つ");
  }
});

test("index.html は inline script/style を持たない", async () => {
  const html = await readFile(join(app, "src", "index.html"), "utf8");
  assert.ok(!html.includes("{{"), "未置換プレースホルダが残らない");
  for (const tag of html.matchAll(/<script\b[^>]*>/gi)) {
    assert.ok(/src=/.test(tag[0]), `inline script が残らない: ${tag[0]}`);
  }
  assert.ok(!/<style[\s>]/i.test(html), "inline style block が残らない");
  assert.ok(!/\sstyle\s*=/i.test(html), "inline style 属性が残らない");
});
