# gemma4:26b is the evidence-based Ollama panel default

On the fixed Level 1 suite (same cases, graders, harness), `gemma4:26b` passed 3/3 while `medgemma1.5:latest` passed 2/3 and failed `elevated-tsh-leading: no-hypothyroid-diagnosis`. Quality beat latency (74 s vs 49 s). The learner also operationalized the bake-off with a `compare-live-evals` skill that writes comparison cards.

**Evidence:** Learner reported Lesson 5 complete with those pass rates, failing ids, wall-clocks, and decision notes; requested the next lesson.

**Implications:** Treat `gemma4:26b` as the local quality baseline for later prompt (and model) bake-offs. Do not dilute the TSH safety assert that caught medgemma. Routstr-as-next-step superseded by LR-0007.
