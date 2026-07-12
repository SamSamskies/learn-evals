document.querySelectorAll("[data-quiz]").forEach((quiz) => {
  quiz.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      const answer = button.dataset.answer;
      const expected = quiz.dataset.correct;
      const explanation = quiz.dataset.explanation;
      const feedback = quiz.querySelector("[data-feedback]");

      quiz.querySelectorAll("[data-answer]").forEach((candidate) => {
        candidate.setAttribute("aria-pressed", String(candidate === button));
      });

      const isCorrect = answer === expected;
      feedback.className = `feedback ${isCorrect ? "correct" : "wrong"}`;
      feedback.textContent = isCorrect
        ? `Correct. ${explanation}`
        : `Try again. ${
            quiz.dataset.hint ||
            "Ask whether a computer can decide pass/fail from the answer text alone."
          }`;
    });
  });
});
