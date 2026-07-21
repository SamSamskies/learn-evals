# gemma4:26b-mlx is the evidence-based trend (and shared chat) default

On the frozen trend Level 1 suite, both `gemma4:26b-mlx` and `medgemma1.5:latest` passed 3/3. Medgemma was about 2× faster; the learner still chose gemma4 for output quality and kept it as the default—same quality-over-latency order as the panel bake-off (LR-0006), now with matching exact tags across suites.

**Evidence:** Lesson 11 complete; learner reported all trend live evals green for both models and an explicit preference for gemma4 prose despite the speed gap.

**Implications:** Panel and trend defaults are aligned on `gemma4:26b-mlx`. Next teach treating both Level 1 suites as a single acceptance gate before shipping chat model or prompt changes—never blend panel+trend into one vanity pass rate. Flat/stable fourth trend case stays banked unless triage shows invented movement.
