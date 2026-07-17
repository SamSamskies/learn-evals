# Level 1 can false-fail; a green card is not enough to ship

After the Lesson 6 prompt bake-off, the learner built a `stricter-no-diagnose` variant (flagged, not production default) but correctly refused to ship it. Several `no-hypothyroid-diagnosis` “fails” were regex hits on refusals or thinking traces (e.g. “a clinician can diagnose…”, “you have hypothyroidism” as an example to avoid), and the same model/prompt flipped pass↔fail across runs. That establishes that Level 1 is an acceptance gate only when graders are calibrated against transcripts—not when a single comparison card looks green.

**Evidence:** Learner reported the hold decision, FP examples, and flake behavior; LocalLab commit adds `LOCALLAB_CHAT_PROMPT` / stricter variant while keeping default in production.

**Implications:** Next teach grader triage (true fail vs false positive vs flake) and multi-trial agreement before re-judging prompt promotion. Do not re-teach the fair-compare ritual or invent LLM judges yet.
