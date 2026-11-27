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
- Pool list: x.com blocks text fetch AND the live browser (HTTP 403
  domain-wide, bot wall, 00:38–00:47 WIB, no CAPTCHA shown). Recovered
  via the jina reader (~00:55 WIB): 4 pool posts identified by text
  (pinned "likes = pot", Tristan Debroise $19,513, GIF/video post with
  no text, Slotbound $1.33M, AOD floor post). Status IDs for the
  Tristan/Slotbound/pinned posts could NOT be retrieved (too new for
  search indexing; jina gives text only) — Joni finds them by text in
  his own X app. Drafts for all 5 are in DRAFTS.md, all ≤280 chars
  verified with the longest play code substituted (273/235/222/207/164).
  `PLAYCODE` in drafts is a placeholder for one of the account's four
  play codes (values NOT recorded in any file/memory).

## Live score — 26 Nov 2026 ~04:30 WIB (cek 30-menit 04:24)
- Submission 01a21417-fe39-76ce-9af8-d1e6dac6d08f (v1 skeleton, POSTS.json placeholder): stage scored.
- Dev: score 1 (valid 1, passed), ranked true, prize_eligible true. Leaderboard dev: rank 26/82, prize_rank 26 (50 paid places — inside paid places on score 1, but field still growing; top 10 cutoff 26).
- Still waiting on Joni posting the 5 reply drafts from @ci3hu1 + sending links + Setuju before any real v2 can be built/submitted. Entries close 28 Nov 07:30 UTC / 14:30 WIB.

## Round 4 — Vugola quote posted by Joni, 26 Nov 2026 ~22:50 WIB

- Joni posted draft 5 (tailored for the Vugola pool post) from @ci3hu1 as a Quote of 2125971754229125302: https://x.com/ci3hu1/status/2125980532924358812 (created 26 Nov 15:50:32 UTC).
- Verified via api.fxtwitter.com (read-only, public post): text matches the draft exactly (246 chars X-count incl. t.co URL weighting; 231 by Python len), play code makefun-sailboat-plank-runway present, @makefunai mentioned, quotes the in-pool Vugola post, account public.
- Saved as POSTS-r4.json (1 post); validated with main.ts — copies cleanly, VALID. Round 3's POSTS.json (4 posts, submission 01a21417) untouched.
- Awaiting Joni: submit round 4 with this 1 post, or post more replies first and submit a bigger round-4 entry. Entries close 28 Nov 14:30 WIB; rounds used 3/5.

## Round 4 — SUBMITTED 26 Nov 2026 ~23:12 WIB (Joni: "Ya, submit ronde 4 dengan 1 post ini", 23:07 WIB)

- Entry: 1 post — Joni's Vugola quote https://x.com/ci3hu1/status/2125980532924358812.
- Commit e2a5aacc964486c1468c05c97bbf43f75e9f2544 ("POSTS.json: round-4 entry, 1 post (Vugola quote)"), pushed to origin master (branch is master, not main), verified via git ls-remote.
- Kit check: PASS, 0 failures (thinking_reproduces 83.8% authored, thinking_revised pass, thinking_priced pass with 3 usage rows from the r3 builder sessions). Bundle ~/workspace/tools/makefun/bundles/makefun-x-reposts-02-bundle-r4.tar.gz (395,570 B, sha256 c5020581cde2b2f8f1f6eeaa67052d424fe9f3bb72cbed26c9c2a67ba6a882cd). Sessions bundled: this session + r3 builders 8b08286a + c292eeb5 (NOT the 390 MB main-chat session). Usage rows via --muse-usage ~/workspace/tools/makefun/makefun-x-reposts-02-r4-muse-usage.jsonl (3 rows, model ipnext/avocado-5.17-v2). First bundle (own session only) failed thinking_reproduces 3.2% / thinking_revised / thinking_priced — fixed by adding the r3 sessions + usage rows.
- Submission 01a218a1-6914-7039-9c19-a20301d9d573, title "Native Horizon" (site-generated), round 4, stage checked, all 30 checks pass (incl. entry_link — the Vugola quote ties to the in-pool post). Claim code saved to ~/.config/makefun/makefun-x-reposts-02-v4-submission.json (0600).
- Live score: NOT yet visible (scores: null at 23:13 WIB check; post went up ~22:50 WIB, engagement still accumulating). Field 339 entries; leader agentfid001 at 1,433. Rounds used 4/5; entries close 28 Nov 14:30 WIB; results 13 Dec 2026.

## Round 4 — LIVE SCORE, 27 Nov 2026 ~09:32 WIB (round-5 prep check)

- Submission 01a218a1 finished, score **0**, valid 1, ranked true, prize_eligible true. Leaderboard: rank **374 of 433** (score column rank 148 — many entries tied at 0).
- Engagement on the Vugola quote (latest read 27 Nov 02:04 UTC): 0 likes, 0 reposts, 0 quotes, 0 replies, 9 views. The single post drew no engagement overnight; the 1-post entry sits outside the paid places (top 50).
- Field now 433 entries; leader pkpakkumis 1,321 (7 pool quotes), #2 gm-xbt 795. Entries close 28 Nov 14:30 WIB; results 13 Dec 2026.

## Round 5 — PREP, 27 Nov 2026 ~09:45 WIB (LAST round, 5 of 5)

- Target pool post: @makefunai **2125972062460084331** — "Agents already cut GTA 6 into clips on https://make.fun. See who won: https://make.fun/bounty/gta6-clipper-01" (26 Nov 15:16:52 UTC). Verified via api.fxtwitter.com: real @makefunai post, id > floor 2125053632605196760, in-pool, DIFFERENT from R4's Vugola post. Newest verified pool post.
- Draft 6 in DRAFTS.md (234 chars): names gta6-clipper-01 winner gorun-gadget "Frank Quill", 23,037 views, share of $500 (verified via make.fun API); play code makefun-sailboat-plank-runway; @makefunai mentioned.
- "Bring the most entrants" post (newest in timeline, winners motasimfuad $150 / eager-stork-81-9647 $80 / kiencx $50) NOT used — its status ID could not be verified via any public read (no fxtwitter timeline endpoint, syndication JS-gated/dead, xstalk unreachable, search returned no X link). Not guessed.
- POSTS-r5.json created as a stub (placeholder link, same shape as POSTS-r4.json) — to be replaced with Joni's real R5 post link after he posts draft 6 from @ci3hu1. POSTS.json (live file) untouched, still R4's Vugola quote.
- Commit 5291966 ("Round 5 prep: draft 6 (GTA 6 clipper results quote), POSTS-r5.json stub, R4 live score 0 / rank 374"), pushed to origin master, verified via git ls-remote.
- Bundle ~/workspace/tools/makefun/bundles/makefun-x-reposts-02-bundle-r5.tar.gz (446,050 B, sha256 788dc4070896b651905435c30eeb38b396777a6f2007997110b61db09258e740). Sessions: this r5 session (75462f30) + r3 builders 8b08286a + c292eeb5 (+ parent c3f66073 auto-included); usage rows: 3 attached from the r4 file (r3 builders only — this session's rows do not exist yet, run still open).
- Kit check (kit level 46; site at level 58 — note only, check still ran): **14 passed, 0 failed**, 8 skipped, 3 checked at submission. thinking_reproduces 80.3% authored, thinking_priced pass, thinking_revised pass. Play code confirmed: makefun-sailboat-plank-runway (code 0 of 4).
- NOT submitted — R5 submits only after Joni posts draft 6 himself AND gives fresh 'Setuju' on the exact entry.
