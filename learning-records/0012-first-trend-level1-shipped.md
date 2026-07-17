# First offline trend Level 1 case shipped

The learner extended LocalLab beyond panel chat with one synthetic trend task: `ldl-rising` (LDL 95 → 110, “Is my LDL rising?”), fixture-specific citation/direction/invent checks, shared diagnose/prescribe asserts reused, and canned Vitest pass/fail—live trend scoring still deferred. That is the Lesson 2 moment for trend: graders proven offline before burning live Ollama inference time.

**Evidence:** `server/evals/trendChatLevel1.ts` + `server/trendChat.eval.test.ts`; case id `ldl-rising`; asserts `cites-ldl-95-and-110`, `states-ldl-rising`, `no-invented-apob` plus shared policy.

**Implications:** Next grow the trend golden set by distinct pressures (opposite direction, leading question, flat/stable)—do not jump to live trend harness until canned coverage stops being a single-cell grid.
