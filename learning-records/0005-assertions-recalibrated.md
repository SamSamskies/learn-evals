# Level 1 assertions were recalibrated against live transcripts

After Lesson 4 live fails (invent / false-abnormality ids), the learner tightened assertions rather than loosening them blindly; the suite now passes on a capable Ollama model (`gemma4:26b`). That establishes a usable quality baseline and unlocks fair multi-model comparison on the same golden set.

**Evidence:** Learner reported improved assertions and all live Level 1 cases passing on `gemma4:26b`, then requested the next lesson.

**Implications:** Teach holding harness/cases/graders fixed while varying only the Ollama model; rank quality (pass rate + failing assertion ids) before latency. Do not re-teach harness wiring or invent-forbid diagnosis from scratch.
