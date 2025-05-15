// Get references to form and list
const medForm = document.getElementById("med-form");
const reminderList = document.getElementById("reminder-list");

// Load reminders on page load
window.addEventListener("DOMContentLoaded", loadReminders);

// Save new reminder
medForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("med-name").value;
  const time = document.getElementById("med-time").value;
  const note = document.getElementById("med-note").value;

  const reminder = { name, time, note };

  // Add to local storage
  saveReminder(reminder);

  // Add to UI
  displayReminder(reminder);

  medForm.reset();
});

// Save to local storage
function saveReminder(reminder) {
  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.push(reminder);
  localStorage.setItem("reminders", JSON.stringify(reminders));
}

// Load from local storage
function loadReminders() {
  const reminders = JSON.parse(localStorage.getItem("reminders")) || [];
  reminders.forEach(displayReminder);
}

// Show reminder on screen
function displayReminder(reminder) {
  const li = document.createElement("li");
  li.textContent = `${reminder.name} at ${reminder.time} - ${reminder.note || "No note"}`;
  reminderList.appendChild(li);
}

