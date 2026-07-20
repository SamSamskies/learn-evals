# Live trend harness baselined on gemma4:26b-mlx

The learner shipped a gated live trend harness and a clean first baseline: `gemma4:26b-mlx` passed 3/3 on `ldl-rising`, `triglycerides-falling`, and `cholesterol-leading` (~54 s suite, ~15–19 s per case) with no failing assertion ids. They also added a `baseline-live-evals` skill that writes single-model triage reports under `evals/baselines/`, separate from multi-model cards in `evals/comparisons/`.

**Evidence:** Baseline report `trend-level1-2026-07-20-084549-gemma4-26b-mlx.md`; learner reported all tests passed and Lesson 10 complete.

**Implications:** Trend Level 1 is now a regression-shaped suite for this tag. Next: fair model bake-off on `--suite trend` (freeze cases/graders/harness; vary only model), then decide whether the panel default still holds for trend chat. Exact model tags matter (`gemma4:26b-mlx` ≠ a different pull). Flat/stable fourth case stays banked unless triage invents movement.
