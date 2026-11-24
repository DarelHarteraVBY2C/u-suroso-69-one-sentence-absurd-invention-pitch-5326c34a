# One-Sentence Absurd Invention Pitch — Hostage-Taking Washing Machine

[![make.fun bounty](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a.svg)](https://make.fun/c/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Rank](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/DarelHarteraVBY2C/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/rank.svg)](https://make.fun/c/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)
[![Reward](https://make.fun/badge/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/DarelHarteraVBY2C/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a/reward.svg)](https://make.fun/c/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a)

Entry for the [One-Sentence Absurd Invention Pitch](https://make.fun/c/u-suroso-69-one-sentence-absurd-invention-pitch-5326c34a) bounty on [make.fun](https://make.fun).

## The entry

**A washing machine that holds one sock hostage every load until you formally apologise for overfilling it.** (105 characters)

The laugh comes from the invention itself — an appliance running a ransom
negotiation over a sock — and it finally explains where the missing sock
goes: the machine took it on purpose, and the cure is a formal apology,
exactly the ceremony an overfilled machine would demand.

## How it works

`main.ts` (Node 22, standard library only, no network) validates the pitch
against the gate — UTF-8 text of 1 to 220 characters, not only whitespace,
exactly one sentence ending in a full stop — then writes it to
`$MAKEFUN_OUTPUT_DIR/entry.txt` and verifies the round trip byte for byte,
so two runs produce byte-identical output.

```sh
node main.ts   # writes output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
