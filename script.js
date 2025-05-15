document.getElementById("med-form").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("med-name").value;
  const time = document.getElementById("med-time").value;
  const note = document.getElementById("med-note").value;

  const reminder = document.createElement("li");
  reminder.textContent = `${name} at ${time} - ${note || "No note"}`;
  document.getElementById("reminder-list").appendChild(reminder);

  // Clear form after adding
  document.getElementById("med-form").reset();
});
