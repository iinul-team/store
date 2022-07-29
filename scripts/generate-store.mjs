#!/usr/bin/env zx
console.log(process.env.AIRTABLE_API_KEY);
// Get the store packs from airtable
let resp = await fetch(
  "https://api.airtable.com/v0/appPeKJE2w7yfGZyJ/Nos%20Histoires",
  {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  }
).then((r) => r.json());

console.log(resp);
// filters only the one that have been confirmed
const currated = resp.records.filter((e) => !!e.is_confirmed);

// publish json
await fs.remove("./build");
await fs.ensureDir("./build");
await fs.writeJSON("build/store.json", currated);
