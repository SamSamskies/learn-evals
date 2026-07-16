# Mission: AI Product Evaluation

## Why
Become an AI Product Engineer who can change prompts, models, and AI workflows with evidence rather than intuition. Use LocalLab's panel and trend chats as the proving ground, then apply the evidence to Ollama model and prompt selection.

## Success looks like
- Design representative panel and trend chat scenarios with explicit success criteria
- Run a repeatable LocalLab chat eval suite and detect regressions
- Choose and calibrate code, model, and human graders appropriately
- Compare prompt and Ollama model versions on quality, latency, and (when relevant) cost
- Ship chat defaults and prompt changes only when the Level 1 suite supports the decision

## Constraints
- Start with no assumed hands-on eval experience
- Keep lessons to 15–30 minutes
- Prefer TypeScript and the existing LocalLab stack
- Protect private medical data; use synthetic or deliberately de-identified fixtures
- Stay on local Ollama; do not add a second inference provider for this track

## Out of scope
- General ML model training and benchmark research
- Evaluating LocalLab's PDF extraction behavior during this track
- Production-scale observability before a useful local eval loop exists
- Adopting an eval platform before understanding the underlying workflow
- Routstr / routstrd (or other remote OpenAI-compatible providers) as a LocalLab dependency
