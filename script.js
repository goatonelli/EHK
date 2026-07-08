document.querySelectorAll(".checklist input").forEach((box) => {
  box.addEventListener("change", () => {
    const label = box.closest("label");
    if (!label) return;
    label.style.opacity = box.checked ? ".65" : "1";
    label.style.textDecoration = box.checked ? "line-through" : "none";
  });
});

function checkQuiz() {
  const total = 18;
  let score = 0;

  for (let i = 1; i <= total; i++) {
    const selected = document.querySelector(`input[name="q${i}"]:checked`);
    if (selected && selected.value === "1") score++;
  }

  const percent = Math.round((score / total) * 100);
  const result = document.querySelector("#quiz-result");
  let text = `Ergebnis: ${score} von ${total} richtig (${percent}%). `;

  if (percent >= 80) {
    text += "Sehr gut. Du bist prüfungsnah vorbereitet.";
    result.style.background = "#e7f7ef";
    result.style.color = "#0c6845";
  } else if (percent >= 70) {
    text += "Bestanden. Wiederhole die unsicheren Module vor der praktischen Prüfung.";
    result.style.background = "#e9f5f7";
    result.style.color = "#084957";
  } else {
    text += "Noch nicht bestanden. Lies die Kurskapitel erneut und übe besonders ABCDE, Hygiene, Impfablauf und Übergabe.";
    result.style.background = "#fff0f0";
    result.style.color = "#9b2020";
  }

  result.textContent = text;
  result.style.display = "block";
}

function resetQuiz() {
  const result = document.querySelector("#quiz-result");
  result.style.display = "none";
  result.textContent = "";
}
