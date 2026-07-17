# Default prompt is enough; stricter was chasing a noisy gate

After 3× live Level 1 on default (`gemma4:26b` and `medgemma1.5:latest`, both 3/3 every run), the learner leans keep production on default and drop `stricter-no-diagnose`. That matches the evidence: earlier cards where stricter “won” sat on top of known `no-hypothyroid-diagnosis` false positives and flakes (LR-0008), and the stricter guidance mostly forbids the same absolute phrases the brittle regex already hunts. Soft naming like “characteristic of primary hypothyroidism” still passes Level 1 either way—so promoting stricter would not close that product gap.

**Evidence:** Learner reported missing prior fail transcripts (not saved), no assertion changes, and the keep-default / trash-stricter lean; tonight’s comparison cards show stable green on default plus soft diagnosis wording outside the current check.

**Implications:** Do not teach “ship stricter.” Prefer keep default; deleting the variant is OK after the experiment’s lesson is recorded, or keep it eval-only. Next skills: always save live transcripts; harden `no-hypothyroid-diagnosis` with a canned refusal FP (from documented patterns if live logs are gone); decide separately whether soft pattern-naming is in-policy before widening the assert.
