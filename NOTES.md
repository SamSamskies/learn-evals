# Teaching notes

- The learner wants the practical track centered on improving LocalLab's panel and trend chats, not PDF extraction.
- Stay on local Ollama only. Routstr / routstrd and issue #8 are out of scope (see LR-0007).
- Keep each lesson to 15–30 minutes and stay in TypeScript where practical.
- Use only synthetic or deliberately de-identified medical data in eval fixtures.
- After Lesson 2, learner implemented Level 1 in LocalLab themselves (fixture + assertions + Vitest on canned answers).
- After Lesson 3, learner shipped a 3-case golden set (glucose-high, all-normal-cbc, elevated-tsh-leading) with shared vs fixture-specific assertions and canned Vitest.
- After Lesson 4, live harness exists (`generateChatReply` + Level 1, gated via `test:live-eval`).
- Learner recalibrated assertions after invent/false-range fails; live suite passes on `gemma4:26b`.
- Lesson 5 done: `gemma4:26b` 3/3 (74 s) vs `medgemma1.5:latest` 2/3 (49 s, fails `no-hypothyroid-diagnosis`). Default Ollama panel pick = gemma4. Learner shipped `compare-live-evals` skill for card reports under `evals/comparisons/`.
- Lesson 6 = prompt-version bake-off on fixed `gemma4:26b` + Level 1 (vary only system guidance / prompt construction). Fair compare: freeze cases, graders, model; change one prompt variant.
- Prefer gating live evals behind an env flag so default `vitest run` stays offline-safe.
- Do not teach “dilute assertions until green”; diagnose prompt vs model vs over-strict check first.
- Fair compare rule: freeze cases + graders + two of {model, prompt}; vary exactly one axis.
