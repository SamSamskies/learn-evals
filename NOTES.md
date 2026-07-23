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
- Lesson 12 done: dual-suite ship gate skill; grader FP at first gate run → harden assert → live all green. See LR-0016.
- Lesson 13 done: dual ship gate pass^3 success on both suites. See LR-0017.
- Lesson 14 = online → offline: error analysis → promote one observed failure pattern into a synthetic Level 1 case. Flat/stable invent-direction is the default candidate if no sharper miss appears.
- Prefer gating live evals behind an env flag so default `vitest run` stays offline-safe.
- Do not teach “dilute assertions until green”; diagnose prompt vs model vs over-strict check first.
- Fair compare rule: freeze cases + graders + two of {model, prompt}; vary exactly one axis.
- Ship gates need calm graders: read transcripts; raise trial budget when flakes appear; gate clears on pass^k not pass@1.
- Suite growth: observe → categorize → synthesize fixture → assert → canned then live; never raw medical production into git.

## Future lessons (post-14) — agentic & trajectory track

Cover later, in this order. Concepts > SaaS; thin local harness (golden JSON + Vitest, optional Ollama judge) is enough. Cloud platforms optional later for non-local products.

1. **Trajectory / process evals** (when chat is multi-step, or just before) — grade steps and tool use, not only final text. Wrong path that lucks into a good answer still fails. Low urgency while Level 1 is single-reply; teach concepts early if needed, full practice when LocalLab has trajectories.
2. **Outcome metrics for agents** (thin add-on with #1) — cost and latency *per resolved task*, not only $/request. Latency already in bake-offs; $/task barely matters on local Ollama until multi-step agents exist.
