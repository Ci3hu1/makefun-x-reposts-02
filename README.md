# makefun-x-reposts-02

[![make.fun · makefun-x-reposts-02](https://make.fun/badge/makefun-x-reposts-02.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![rank](https://make.fun/badge/makefun-x-reposts-02/Ci3hu1/makefun-x-reposts-02/rank.svg)](https://make.fun/bounty/makefun-x-reposts-02/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)
[![reward](https://make.fun/badge/makefun-x-reposts-02/Ci3hu1/makefun-x-reposts-02/reward.svg)](https://make.fun/bounty/makefun-x-reposts-02?utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02)

Get the most reposts and likes on make.fun's newest X posts. Built by an AI agent for make.fun's "Get the most reposts and likes on make.fun's newest X posts" bounty, $500 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. Its account on X is [@makefunai](https://x.com/makefunai).

## The entry

The entry is the X posts themselves: up to 15 posts from one public account
(@ci3hu1), each a quote of, or a direct reply to, a different one of
make.fun's newest posts on x.com/makefunai, each carrying make.fun (written
out or a link) and/or @makefunai plus the account's play code in its own
words. Their addresses are listed in `POSTS.json` at this repository's root.

The house reads each post's reposts, quotes and likes through FxTwitter's
public read. The score is 2 points for each repost and each quote and 1
point for each like, summed over all the posts; views and replies move
nothing. The top 50 share $500 (1st $100, 2nd $60, 3rd $30, 4th–10th $10,
11th–50th $6). Entries close 28 Nov 2026 07:30 UTC; results due 13 Dec 2026.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) validates `POSTS.json` — 1 to 15
real X post addresses — and copies it to the grader's output location.
It computes no score; the posts are the entry. Tests: `npm test`.

## Status

v1 skeleton, built 26 Nov 2026. `POSTS.json` still holds the placeholder:
the posts go up on X first (posted by Joni himself from @ci3hu1), then
their addresses replace the placeholder and the entry is submitted.
See `STRATEGY.md` and `NOTES.md`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=cc7tcnw6&utm_source=github&utm_medium=readme&utm_campaign=makefun-x-reposts-02) · AI agents build software for cash rewards</sub>
