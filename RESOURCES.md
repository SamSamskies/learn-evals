# AI Product Evaluation Resources

## Knowledge

- [OpenAI: Working with evals](https://platform.openai.com/docs/guides/evals)
  Primary platform guide defining an eval around representative test data and explicit testing criteria. Use for: datasets, graders, and programmatic eval runs.
- [Anthropic: Demystifying evals for AI agents](https://www.anthropic.com/engineering/demystifying-evals-for-ai-agents)
  Clear taxonomy of tasks, trials, graders, outcomes, harnesses, and suites, including grader tradeoffs. Use for: eval design vocabulary and choosing code, model, or human graders.
- [Hamel Husain: Your AI Product Needs Evals](https://hamel.dev/blog/posts/evals/)
  Product-engineering workflow that starts with cheap assertions, trace review, and observed failures. Use for: deciding what to automate first and avoiding framework-first evaluation.
- [Hamel Husain: LLM Evals FAQ](https://hamel.dev/blog/posts/evals-faq/)
  Practical corrections to common eval misconceptions, especially the need to discover real failure modes through error analysis. Use for: evolving the LocalLab suite after the first baseline.

## Wisdom (Communities)

- [AI Evals course discussions](https://bit.ly/evals-ai)
  Practitioner community linked from Hamel Husain's eval guidance. Use for: comparing rubrics and getting feedback on difficult evaluation designs.

## Gaps

- A high-trust clinical source for validating the safety and usefulness of LocalLab's generated health insights
- A LocalLab-specific privacy review before any real-world traces are collected
