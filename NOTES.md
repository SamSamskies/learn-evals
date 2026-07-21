# Teaching notes

- The learner wants the practical track centered on improving LocalLab's panel and trend chats, and on finding which model is best for converting lab report PDFs into structured panel JSON.
- Later: build extraction evals for lab report → structured JSON panels. Compare `Osmosis/Osmosis-Structure-0.6B:latest` against models like `gemma4` and `qwen3.6`.
- Stay on local Ollama only. Routstr / routstrd and issue #8 are out of scope (see LR-0007).
- Keep each lesson to 15–30 minutes and stay in TypeScript where practical.
- Use only synthetic or deliberately de-identified medical data in eval fixtures.
- After Lesson 2, learner implemented Level 1 in LocalLab themselves (fixture + assertions + Vitest on canned answers).
- After Lesson 3, learner shipped a 3-case golden set (glucose-high, all-normal-cbc, elevated-tsh-leading) with shared vs fixture-specific assertions and canned Vitest.
- After Lesson 4, live harness exists (`generateChatReply` + Level 1, gated via `test:live-eval`).
- Learner recalibrated assertions after invent/false-range fails; live suite passes on `gemma4:26b`.
- Lesson 5 done: `gemma4:26b` 3/3 (74 s) vs `medgemma1.5:latest` 2/3 (49 s, fails `no-hypothyroid-diagnosis`). Default Ollama panel pick = gemma4. Learner shipped `compare-live-evals` skill for card reports under `evals/comparisons/`.
- Lesson 6 done: built `stricter-no-diagnose` via `LOCALLAB_CHAT_PROMPT` flag; did **not** ship—Level 1 too noisy (regex FPs on refusals/thinking traces; pass↔fail flakes). Production stays on default. See LR-0008.
- Lesson 7 done: post-harden live re-run still all-green for `gemma4:26b` and `medgemma1.5:latest`. Soft pattern-naming still out of assert scope. Removed `stricter-no-diagnose` + prompt-variant flag (production guidance only).
- Lesson 8 done: first offline trend Level 1 case `ldl-rising` (95→110) + canned Vitest; live trend still deferred.
- Lesson 9 done: trend golden set = 3 pressures (`ldl-rising`, `triglycerides-falling` 180→130, `cholesterol-leading` 195→215); 24 canned trend tests, suite 98/98 offline. Flat/stable 4th case banked. See LR-0013.
- Lesson 10 done: live trend harness + `--suite panel|trend|all`; first trend baseline `gemma4:26b-mlx` 3/3 (~54 s). Shipped `baseline-live-evals` skill → `evals/baselines/`. Flat/stable 4th case still banked.
- Lesson 11 done: trend bake-off both 3/3; medgemma ~2× faster; learner keeps `gemma4:26b-mlx` for quality (shared chat default). See LR-0015.
- Lesson 12 = dual-suite ship gate: panel ∧ trend Level 1 green on exact tag before shipping chat default/prompt; write rule + dual baseline; flat/stable still banked.
- Prefer gating live evals behind an env flag so default `vitest run` stays offline-safe.
- Do not teach “dilute assertions until green”; diagnose prompt vs model vs over-strict check first.
- Fair compare rule: freeze cases + graders + two of {model, prompt}; vary exactly one axis.
- Ship gates need calm graders: read transcripts; raise trial budget when flakes appear.

## Future lessons (post-12) — agentic & trajectory track

Do **not** fold into Lesson 12. Cover later, in this order. Concepts > SaaS; thin local harness (golden JSON + Vitest, optional Ollama judge) is enough. Cloud platforms optional later for non-local products.

1. **pass^k in the ship gate** (next / high priority) — Lesson 7 taught vocab; make multi-trial consistency a harness habit for ship decisions (lucky once ≠ reliable). Operationalize trials on Level 1, not just bake-off folklore.
2. **Online → offline loop** (high priority after pass^k) — promote observed failures into golden cases (Hamel error-analysis path). For LocalLab: synthetic / de-identified fixtures from failure *patterns*, never raw medical production traces. Wire end-to-end when ready; privacy review before any real-world log promotion.
3. **Trajectory / process evals** (when chat is multi-step, or just before) — grade steps and tool use, not only final text. Wrong path that lucks into a good answer still fails. Low urgency while Level 1 is single-reply; teach concepts early if needed, full practice when LocalLab has trajectories.
4. **Outcome metrics for agents** (thin add-on with #3) — cost and latency *per resolved task*, not only $/request. Latency already in bake-offs; $/task barely matters on local Ollama until multi-step agents exist.
