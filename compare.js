const phones = {
  iphone17proMax: {
    name: "iPhone 17 Pro Max",
    updates: 7,        // 2025–2032
    antutu: 2.6
  },

  redmagic11pro: {
    name: "Red Magic 11 Pro+",
    updates: 3,        // 2025–2028
    antutu: 4.2
  },

  xiomi17ultra: {
    name: "Xiaomi 17 Ultra",
    updates: 6,        // 2025–2031
    antutu: 3.96
  },

  samsung26ultra: {
    name: "Samsung S26 Ultra",
    updates: 7,        // 2026–2033
    antutu: 3.8
  },

  oneplus15: {
    name: "OnePlus 15",
    updates: 6,        // 2025–2031
    antutu: 3.6
  },

  samsungS25Pluss: {
    name: "Samsung S25 Plus",
    updates: 7,        // 2025–2032
    antutu: 2.5
  },

  iqoo13: {
    name: "iQOO 13 5G",
    updates: 5,        // 2024–2029
    antutu: 2.8
  },

  oneplus13R: {
    name: "OnePlus 13R 5G",
    updates: 6,        // 2025–2031
    antutu: 2.1
  },

  realmeGT7: {
    name: "Realme GT 7 5G",
    updates: 6,        // 2025–2031
    antutu: 2.4
  },

  iqooNeo10: {
    name: "iQOO Neo 10 5G",
    updates: 4,        // 2025–2029
    antutu: 2.2
  },

  oppoK13Turbo: {
    name: "Oppo K13 Turbo",
    updates: 3,        // 2025–2028
    antutu: 1.6
  },

  oneplusNordCE5: {
    name: "OnePlus Nord CE5",
    updates: 6,        // 2025–2031
    antutu: 1.47
  }
};


const params = new URLSearchParams(window.location.search);
const p1 = params.get("p1");
const p2 = params.get("p2");

function updateUI(id, data) {
  const updatePercent = data.updates * 10;
  const antutuPercent = (data.antutu / 5) * 100;

  document.getElementById(`${id}-name`).innerText = data.name;

  document.getElementById(`${id}-update-text`).innerText =
    `Updates: ${updatePercent}%`;

  document.getElementById(`${id}-antutu-text`).innerText =
    `AnTuTu: ${Math.round(antutuPercent)}%`;

  const updateBar = document.getElementById(`${id}-update-bar`);
  const antutuBar = document.getElementById(`${id}-antutu-bar`);

  // Reset widths (important for animation)
  updateBar.style.width = "0%";
  antutuBar.style.width = "0%";

  // Animate after short delay
  setTimeout(() => {
    updateBar.style.width = updatePercent + "%";
    antutuBar.style.width = antutuPercent + "%";
  }, 200);
}



if (!phones[p1] || !phones[p2]) {
  alert("Invalid phone selection");
} else {
  updateUI("p1", phones[p1]);
  updateUI("p2", phones[p2]);
}
