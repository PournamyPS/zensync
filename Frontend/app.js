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
async function sendMental() {
  const input = document.getElementById("mentalInput").value;
  if (!input) return;

  // Show user message
  document.getElementById("chat").innerHTML += `<div class="chat-msg user">${input}</div>`;
  document.getElementById("mentalInput").value = "";

  try {
    const response = await fetch("http://127.0.0.1:8000/mental_health", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();

    // Show AI response
    document.getElementById("chat").innerHTML += `<div class="chat-msg bot">${data.analysis}</div>`;

    // Show stress score bar
    const stressPercent = (data.stress_score / 10) * 100;
    document.getElementById("stressResult").innerHTML = `
      <span>Stress Score: ${data.stress_score}/10</span>
      <div class="stress-bar"><div class="stress-bar-fill" style="width:${stressPercent}%"></div></div>
      <p>${data.tips}</p>
    `;
  } catch (err) {
    console.error(err);
    alert("Error connecting to backend.");
  }
}


// Symptom Checker (mock)
async function checkSymptoms() {
  const input = document.getElementById("symptomInput").value;
  if (!input) return;

  try {
    const response = await fetch("http://127.0.0.1:8000/symptom_checker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms: input })
    });

    const data = await response.json();
    document.getElementById("symptomResult").innerHTML =
      `<div class="card"><h3>Possible Issues:</h3><p>${data.result}</p></div>`;
  } catch (err) {
    console.error(err);
    alert("Error connecting to backend.");
  }
}


// Medication Checker (mock)
async function checkMeds() {
  const input = document.getElementById("medInput").value;
  if (!input) return;

  try {
    const response = await fetch("http://127.0.0.1:8000/medication_checker", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ meds: input })
    });

    const data = await response.json();
    document.getElementById("medResult").innerHTML =
      `<div class="card"><h3>Interaction Check:</h3><p>${data.result}</p></div>`;
  } catch (err) {
    console.error(err);
    alert("Error connecting to backend.");
  }
}
