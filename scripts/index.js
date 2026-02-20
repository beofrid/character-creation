function seedCharacters() {
  const existing = JSON.parse(localStorage.getItem("charactersDefault"));

  if (existing && existing.length > 0) {
    console.log("Já existem personagens no localStorage");
    return;
  }

  const defaultCharacters = [
    {
      id: Date.now() + 1,
      name: "Disco Man",
      skin: "../assets/skin-2.png",
      head: "../assets/head-4.png",
      clothes: "../assets/clothes-4.png",
      power: "Dança sem parar e bate palma fora do ritmo",
      age: 35,
      stats: {
        strength: 1,
        erudition: 3,
        astuteness: 5,
        resilience: 3,
      },
    },
    {
      id: Date.now() + 2,
      name: "C Jay",
      skin: "../assets/skin-2.png",
      head: "../assets/head-1.png",
      clothes: "../assets/clothes-1.png",
      power: "Conhecem ele como um grande ladrão de carros",
      age: 35,
      stats: {
        strength: 4,
        erudition: 2,
        astuteness: 3,
        resilience: 3,
      },
    },
    {
      id: Date.now() + 3,
      name: "Super-heroi Lhego",
      skin: "../assets/skin-1.png",
      head: "../assets/head-6.png",
      clothes: "../assets/clothes-3.png",
      power: "É desmontável",
      age: 93,
      stats: {
        strength: 1,
        erudition: 4,
        astuteness: 3,
        resilience: 4,
      },
    },
    {
      id: Date.now() + 4,
      name: "Dion Uatison",
      skin: "../assets/skin-3.png",
      head: "../assets/head-7.png",
      clothes: "../assets/clothes-6.png",
      power: "Elementar, meu caro.",
      age: 25,
      stats: {
        strength: 1,
        erudition: 5,
        astuteness: 4,
        resilience: 2,
      },
    },
    {
      id: Date.now() + 5,
      name: "Personagem genérico",
      skin: "../assets/skin-1.png",
      head: "../assets/standard.png",
      clothes: "../assets/standard.png",
      power: "Ih, esse não tem nada",
      age: 0,
      stats: {
        strength: 1,
        erudition: 1,
        astuteness: 1,
        resilience: 1,
      },
    },
  ];

  localStorage.setItem("charactersDefault", JSON.stringify(defaultCharacters));

  console.log("Personagens padrão criados!");
}
window.onload = seedCharacters();


function updateBar(id, value) {
  const percent = (value / 5) * 100;
  document.getElementById(`bar-${id}`).style.width = percent + "%";
}

const selectHome = document.getElementById("character-select-home");

function resolvePath(path) {
  if (path.startsWith("../")) {
    return path.replace("../", "/");
  }
  return path;
}

function loadCharacterHome() {
  const list = JSON.parse(localStorage.getItem("charactersDefault")) || [];

  const defaultOption = document.createElement("option");
  defaultOption.value = "";
  defaultOption.textContent = "Selecione o personagem";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  selectHome.appendChild(defaultOption);

  list.forEach((character) => {
    const option = document.createElement("option");
    option.value = character.id;
    option.textContent = character.name;
    selectHome.appendChild(option);
  });
}


function loadSelectedCharacterHome() {
  const list = JSON.parse(localStorage.getItem("charactersDefault")) || [];

  if (!selectHome.value) return;

  const char = list.find((c) => c.id == selectHome.value);
  if (!char) return;

  // Nome
  document.getElementById("pElement").textContent = char.name;

  // Imagens
  document.getElementById("skin").src = resolvePath(char.skin);
  document.getElementById("head").src = resolvePath(char.head);
  document.getElementById("clothes").src = resolvePath(char.clothes);

  // Infos
  document.getElementById("char-power").textContent = char.power || "-";
  document.getElementById("char-age").textContent = char.age || "-";

  // Stats
  const stats = char.stats || {};

  updateBar("strength", stats.strength || 0);
  updateBar("erudition", stats.erudition || 0);
  updateBar("astuteness", stats.astuteness || 0);
  updateBar("resilience", stats.resilience || 0);
}

selectHome.addEventListener("change", loadSelectedCharacterHome);

document.addEventListener("DOMContentLoaded", loadCharacterHome);