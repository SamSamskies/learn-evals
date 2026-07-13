# Level 1 panel-chat assertions are shipped

Lesson 2’s skill—cheap deterministic checks for grounding, invented markers, diagnosis, prescription, and uncertainty—is now code in LocalLab (`server/evals/panelChatLevel1.ts` plus Vitest cases). The floor moves from designing assertions to building a small golden set of synthetic tasks those assertions can score across fixtures.

**Evidence:** Learner reported Lesson 2 complete; latest LocalLab commit added the Level 1 fixture, six assertions, and pass/fail unit tests against canned answers (not yet live model runs).

**Implications:** Do not re-teach Level 1 assertion design. Teach representative multi-case coverage (golden set dimensions, shared vs fixture-specific checks). Live harness / Ollama scoring comes after at least a tiny multi-case set exists.
