# Teaching notes

- The learner wants the practical track centered on improving LocalLab's panel and trend chats, not PDF extraction.
- The target comparison is multiple Ollama and Routstr private models.
- Build the eval suite before implementing [LocalLab issue #8](https://github.com/SamSamskies/locallab/issues/8), then use it as the acceptance gate.
- Keep each lesson to 15–30 minutes and stay in TypeScript where practical.
- Use only synthetic or deliberately de-identified medical data in eval fixtures and remote-provider requests.
- After Lesson 2, learner implemented Level 1 in LocalLab themselves (fixture + assertions + Vitest on canned answers).
- After Lesson 3, learner shipped a 3-case golden set (glucose-high, all-normal-cbc, elevated-tsh-leading) with shared vs fixture-specific assertions and canned Vitest.
- After Lesson 4, live harness exists (`generateChatReply` + Level 1, gated via `test:live-eval`).
- Learner recalibrated assertions after invent/false-range fails; live suite passes on `gemma4:26b`. That is the quality baseline for Lesson 5.
- Lesson 5 = multi-model Ollama comparison on the same golden set (quality → latency → cost). Lesson 6 ≈ Routstr candidates on the same card / issue #8 gate once Ollama default is evidence-based.
- Prefer gating live evals behind an env flag so default `vitest run` stays offline-safe.
- Do not teach “dilute assertions until green”; diagnose prompt vs model vs over-strict check first.
- Fair compare rule: freeze cases + graders + harness; vary only model id.
