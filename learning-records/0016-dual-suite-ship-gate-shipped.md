# Dual-suite ship gate is live; grader FP still appears at the gate

The learner shipped a ship-gate skill for LocalLab chat: panel Level 1 ∧ trend Level 1 must both clear on the exact model tag before a default or prompt ships. On the first live gate run they hit a grader false positive, hardened the assert, then got all-green live evals—so the gate is operational and the triage ritual still applies at ship time, not only during bake-offs.

**Evidence:** Lesson 12 complete; ship-gate skill added; FP → harden → green dual suites reported by the learner.

**Implications:** Next teach operationalizing `pass^k` inside that gate (lucky once ≠ reliable), not another single-trial dual baseline. Flat/stable 4th trend case still banked.
