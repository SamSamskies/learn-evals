# Live Level 1 harness is shipped; green is not the gate

Lesson 4’s skill—production-parity chat path + existing Level 1 graders + gated live Vitest—is done. Live fails are expected signal (prompt, model capacity, assertion design, or run-to-run noise), not proof the harness is incomplete. Moving on does not require 100% pass rate; it does require trusting which assertion ids fail and a short hypothesis per fail.

**Evidence:** Learner reported Lesson 4 complete with some live eval failures, and asked whether to force green before continuing.

**Implications:** Next teaching focuses on reading fail signals and multi-model comparison on the same golden set—not on polishing one model until every assertion passes. Do not weaken assertions solely to manufacture green.
