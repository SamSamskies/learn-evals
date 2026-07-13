# Three-case panel-chat golden set is shipped

Lesson 3’s skill—coverage by orthogonal dimensions with shared policy checks vs fixture-specific facts—is now code: glucose-high, all-normal-cbc, and elevated-tsh-leading, plus `SHARED_LEVEL1_ASSERTIONS` and Vitest coverage of canned pass/fail answers. The floor moves from dataset design to a live harness that scores real model output.

**Evidence:** Learner reported Lesson 3 complete; latest LocalLab commit expanded `panelChatLevel1.ts` and `panelChat.eval.test.ts` with three cases, shared/fixture assertion split, and per-case violation tests (still no live Ollama runs).

**Implications:** Do not re-teach golden-set dimensions or Level 1 assertion design. Teach calling the production chat path once per case, grading with existing Level 1 checks, and aggregating pass/fail—gated so offline CI still works.
