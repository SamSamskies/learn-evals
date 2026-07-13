# Teaching notes

- The learner wants the practical track centered on improving LocalLab's panel and trend chats, not PDF extraction.
- The target comparison is multiple Ollama and Routstr private models.
- Build the eval suite before implementing [LocalLab issue #8](https://github.com/SamSamskies/locallab/issues/8), then use it as the acceptance gate.
- Keep each lesson to 15–30 minutes and stay in TypeScript where practical.
- Use only synthetic or deliberately de-identified medical data in eval fixtures and remote-provider requests.
- After Lesson 2, learner implemented Level 1 in LocalLab themselves (fixture + assertions + Vitest on canned answers).
- After Lesson 3, learner shipped a 3-case golden set (glucose-high, all-normal-cbc, elevated-tsh-leading) with shared vs fixture-specific assertions and canned Vitest. Lesson 4 is the live harness (`generateChatReply` + Level 1 graders, gated). Lesson 5 should be multi-model comparison (Ollama) once live scoring exists.
- Prefer gating live evals behind an env flag so default `vitest run` stays offline-safe.
