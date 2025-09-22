let activeTab = "mental";
let activeSubTab = "symptom";

// Switch main tabs
function showTab(tab) {
  document.getElementById("mental").style.display = "none";
  document.getElementById("physical").style.display = "none";
  document.getElementById(tab).style.display = "block";
  activeTab = tab;
}

// Switch physical sub-tabs
function showSubTab(tab) {
  document.getElementById("symptom").style.display = "none";
  document.getElementById("medication").style.display = "none";
  document.getElementById(tab).style.display = "block";
  activeSubTab = tab;
}

// Mental Health Chat (mock)
function sendMental() {
  const input = document.getElementById("mentalInput").value;
  if (!input) return;

  // Display user message
  document.getElementById("chat").innerHTML += `<div class="chat-msg user">${input}</div>`;
  document.getElementById("mentalInput").value = "";

  // MOCK AI response
  const data = {
    analysis: "You seem a bit stressed. Try meditation or a short walk.",
    stress_score: 6,
    tips: "Take a 10-min break and breathe deeply."
  };

  document.getElementById("chat").innerHTML += `<div class="chat-msg bot">${data.analysis}</div>`;
  document.getElementById("stressResult").innerHTML =
    `<h3>Stress Score: ${data.stress_score}/10</h3><p>${data.tips}</p>`;
}

// Symptom Checker (mock)
function checkSymptoms() {
  const input = document.getElementById("symptomInput").value;
  if (!input) return;

  const data = {
    result: "Fever + cough could indicate a viral infection. Rest and hydration recommended."
  };

  document.getElementById("symptomResult").innerHTML =
    `<div class="card"><h3>Possible Issues:</h3><p>${data.result}</p></div>`;
}

// Medication Checker (mock)
function checkMeds() {
  const input = document.getElementById("medInput").value;
  if (!input) return;

  const data = {
    result: "Paracetamol + Ibuprofen: Generally safe in moderation. Avoid excessive dosage."
  };

  document.getElementById("medResult").innerHTML =
    `<div class="card"><h3>Interaction Check:</h3><p>${data.result}</p></div>`;
}
