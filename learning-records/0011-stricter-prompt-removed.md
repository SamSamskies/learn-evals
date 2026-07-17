# Removed stricter-no-diagnose; production guidance only

The learner chose cleanup over keeping an unused prompt experiment: deleted `stricter-no-diagnose` and the `LOCALLAB_CHAT_PROMPT` / `--prompt` variant machinery. Live evals and production both use the single chat guidance string. Earlier “stricter wins” cards (LR-0008/0009) stay as history, not as a reason to reintroduce the flag without a new bake-off need.

**Evidence:** LocalLab removes variant registry from `chat.ts`, live-eval launcher, README, and `compare-live-evals` skill; learner asked to remove the variant because default looked fine.

**Implications:** Model compare skill is model-only until a new prompt experiment is intentional. Lesson 8 (trend Level 1 offline) proceeds on the single guidance path.
