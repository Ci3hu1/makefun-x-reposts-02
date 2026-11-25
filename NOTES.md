# Build log — makefun-x-reposts-02

## 26 Nov 2026 ~00:35 WIB — v1 skeleton (this run, cek 30-menit 00:24 WIB)

Found in the 30-min check: 7 new slugs; 3 carbon-forge one-liners skipped
per the $5 rule (potUsd $2.00 each); news-image-20261126 opens 07:00 WIB
today ($100); best-national-statistics-site-20261126-0539 opens 12:39 WIB
($50); best-household-budget-site-20261126-1457 opens 21:57 WIB ($50).
This bounty is the one actionable now: $500, 50 paid places, free, 1 entry
(shirleyy21, score 0), deadline 28 Nov 2026 07:30 UTC (14:30 WIB).

### What was written (own composition, in this session)

- `main.ts` — Node 22+, stdlib only. Validates `POSTS.json` (object with
  `posts`: 1–15 X post addresses, `https://x.com/` or `twitter.com`,
  `/status/<digits>` or `/i/web/status/<digits>`), copies it byte-for-byte
  to `$MAKEFUN_OUTPUT_DIR/POSTS.json` (or `/output/POSTS.json`, else
  `./out/POSTS.json`), mode 0644, non-zero exit with a specific message
  on any failure. No score is computed — the posts are the entry.
- `POSTS.json` — placeholder only (`https://x.com/<handle>/status/<id>`).
  The gate refuses it as it stands, on purpose: it is replaced with
  Joni's real post addresses once he posts them.
- `tests/test_main.mjs` — `node --test` suite: valid copy byte-identical
  + mode 0644, determinism, malformed JSON refused, placeholder refused,
  >15 posts refused, non-X url refused, missing file refused,
  twitter.com address passes.
- `STRATEGY.md` — scoring (2x repost + 2x quote + 1x like), approach
  (one post per pool post, each written for the post it answers, ask for
  reposts in own words, all from @ci3hu1, public until results 13 Dec),
  no bought/botted/self-made engagement.
- `README.md` — three live badges, bounty link, run instructions,
  current status. `package.json`, `.gitignore`, MIT `LICENSE`.

### Tests

26 Nov 2026, Node v24.22.1, `npm test`: 8 passed, 0 failed.
Local run: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
against a valid fixture copies correctly; against the repo's own
placeholder POSTS.json it exits non-zero as designed (placeholder refused).

### Bounty facts (for the record)

- Bounty: https://make.fun/bounty/makefun-x-reposts-02 ($500: 1st $100,
  2nd $60, 3rd $30, 4th–10th $10, 11th–50th $6; free entry)
- Pool: @makefunai posts with id >= 2125053632605196760 (floor post:
  "MADE WITH AI: Mike Houser built AOD: Age of Dragon with Claude…")
- Play codes: fetched via GET /api/competitions/makefun-x-reposts-02/play-code
  (4 codes, any one passes; values NOT recorded here — they go in the
  post texts Joni posts).
- Quota checked 26 Nov 00:33 WIB: can_submit true, day-cap 6 left,
  0 entries made, no entry fee.
- Entries close 28 Nov 2026 07:30 UTC (14:30 WIB); results due 13 Dec 2026.

### Status

- v1 skeleton committed and pushed to origin main (repo created after the
  opening, 25 Nov 07:30 UTC).
- NOT submitted — submission needs (1) Joni to post the drafted replies
  from @ci3hu1 and hand back the post links, (2) POSTS.json filled in,
  (3) bundle + kit check, (4) his 'Setuju' on the exact entry.
- Pool list still being read (x.com is blocked for text fetch; live-browser
  read of https://x.com/makefunai delegated) — drafts for the remaining
  pool posts follow once the list is in.
