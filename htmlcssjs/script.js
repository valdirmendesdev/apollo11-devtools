function displayDate() {
  let now = new Date();
  alert("Você é o bixão mesmo heim?! Só por isto, vou registrar!");
  document.getElementById("log").innerHTML +=
    `Clicou em no botão: ${now.toLocaleDateString()} ${now.toLocaleTimeString()}<br />`;
}
