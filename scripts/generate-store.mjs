#!/usr/bin/env zx

let resp = await fetch(
  "https://api.airtable.com/v0/appPeKJE2w7yfGZyJ/Nos%20Histoires",
  {
    headers: {
      Authorization: `Bearer ${process.env.AIRTABLE_API_KEY}`,
    },
  }
).then((r) => JSON.json());

const currated = resp.filter((e) => !!e.is_confirmed);
await fs.writeJSON("build/store.json", currated);
