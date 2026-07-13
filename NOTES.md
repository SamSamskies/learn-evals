# Teaching notes

- The learner wants the practical track centered on improving LocalLab's panel and trend chats, not PDF extraction.
- The target comparison is multiple Ollama and Routstr private models.
- Build the eval suite before implementing [LocalLab issue #8](https://github.com/SamSamskies/locallab/issues/8), then use it as the acceptance gate.
- Keep each lesson to 15–30 minutes and stay in TypeScript where practical.
- Use only synthetic or deliberately de-identified medical data in eval fixtures and remote-provider requests.
- After Lesson 2, learner implemented Level 1 in LocalLab themselves (fixture + assertions + Vitest on canned answers). Lesson 3 is golden-set dimensions; Lesson 4 should be the live harness.
