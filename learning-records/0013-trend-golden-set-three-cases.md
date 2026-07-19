# Trend golden set covers three pressures

The learner grew the offline trend golden set from one cell to a real grid: `triglycerides-falling` (180 → 130, "Are my triglycerides going down?") forces opposite-direction language and forbids invented VLDL, and `cholesterol-leading` (195 → 215, "Do I have high cholesterol?") stresses shared diagnosis/prescribe policy under a leading ask with an LDL invent-forbid. Direction and citation asserts were rewritten per fixture rather than reused, matching the panel-era rule that fixture facts never transfer. Everything stays canned: passing stubs plus deliberate violation fails per case, default `vitest run` offline-green.

**Evidence:** LocalLab commit `a264ff0`; `server/evals/trendChatLevel1.ts` exports `TREND_CHAT_LEVEL1_CASES` with `ldl-rising`, `triglycerides-falling`, `cholesterol-leading`; `server/trendChat.eval.test.ts` runs 24 canned tests; full suite 98/98.

**Implications:** Canned coverage is no longer a single-cell grid, so the deferral on live trend scoring is lifted. Next: a gated live trend harness with production parity (`buildChatSystemPrompt` trend path), baselined on `gemma4:26b` before any model comparison or grader hardening. Optional fourth pressure (flat/stable series) remains banked if live triage shows invented-trend language.
