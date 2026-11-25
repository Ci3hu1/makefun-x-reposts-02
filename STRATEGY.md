# Strategy — Get the most reposts and likes on make.fun's newest X posts

## The bounty in one line

$500 over 50 paid places (1st $100, 2nd $60, 3rd $30, 4th–10th $10,
11th–50th $6). Free entry. Entries close 28 Nov 2026 07:30 UTC (14:30 WIB);
results due 13 Dec 2026. One entry so far (shirleyy21, score 0 at discovery
26 Nov 00:24 WIB) — a small, nearly empty table.

Bounty page: https://make.fun/bounty/makefun-x-reposts-02

## What actually ranks

Places rank on one number only, read by the house from X at the deadline:

    score = sum over your posts of (2 x reposts + 2 x quotes + 1 x likes)

Views and replies move nothing. The program in this repo scores nothing —
it only hands the house the list of posts (`POSTS.json`). The posts are
the entry.

## The approach

- **One post per make.fun post, up to 15.** Each of Joni's posts quotes,
  or replies directly to, a different post of make.fun's pool
  (@makefunai posts with id >= 2125053632605196760). A plain repost, a
  post that only links make.fun's post, or a reply under someone else's
  reply is tied to nothing and is refused.
- **Each post written for the pool post it answers.** No template pasted
  under every post: one concrete hook per post, taken from what that
  make.fun post actually says (a number, a name, a specific scene). A
  familiar-but-generic line is what loses in a big field; the specific
  detail is the edge (Joni, 24 Nov 2026).
- **Ask for the counted engagement, in own words.** Reposts and quotes
  count double, so each post invites a repost/quote with a take attached
  ("quote this with the bounty you'd make") rather than only a like.
- **Every post carries make.fun (written out or a link) and/or @makefunai
  plus one of the account's play codes, in its own words.** On a reply
  the "Replying to @makefunai" X adds does not count — the tag must be
  in the reply text itself.
- **All posts from @ci3hu1, public, posted by Joni himself** (Muse does
  not touch his X account since 20 Nov 2026), at/after the opening
  (25 Nov 07:30 UTC) and before the deadline. Posts stay up and the
  account stays public until the results are out — a post gone at the
  deadline's reading adds 0.
- **No bought, botted or self-made engagement.** Never repost, quote or
  like our own posts from our own or coordinated accounts — that
  disqualifies the entry outright. Engagement must be organic.

## What this repo does

- `main.ts` (Node 22, stdlib only): validates `POSTS.json` (1–15 real
  X post addresses) and copies it to the grader's output location,
  mode 0644. It computes no score.
- `POSTS.json`: the list of Joni's post addresses. Placeholder until he
  posts; replaced with the real addresses (copy-link from each post)
  before submit.
- `tests/`: `node --test` suite for the copy + validation behaviour.

## Status

- v1 skeleton built 26 Nov 2026 ~00:35 WIB (this run). Kit check and
  submit are NOT done: they wait for Joni to post the drafted replies
  from @ci3hu1 and hand back the post links, then POSTS.json is filled
  in, the bundle is made, the kit check is run, and the exact entry is
  presented for his 'Setuju' before any submit.
- Quota checked 26 Nov 00:33 WIB: can_submit true, day-cap 6 left,
  0 entries made, no entry fee.
