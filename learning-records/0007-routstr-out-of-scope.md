# Routstr dropped; stay on Ollama

The learner decided not to integrate Routstr: the hosted API path is deprecated in favor of a local `routstrd` process they do not want users to run, and informal Routstr chat quality was not clearly better than capable Ollama models. Mission success criteria no longer include shipping issue #8 or multi-provider comparison.

**Evidence:** Learner stated this explicitly before Lesson 6 practice, and asked to replace the Routstr acceptance-gate lesson.

**Implications:** Do not teach Routstr wiring, cost-on-card for remote providers, or #8 as a gate. Next skills stay local: prompt-version bake-offs on `medgemma1.5:latest` (known Level 1 fail as workbench), with gemma4 as product default for ship checks; then trend chat / richer graders / regression rituals as needed. Update [[MISSION.md]] accordingly.
