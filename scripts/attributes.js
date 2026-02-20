const select = document.getElementById("character-select");

const inputPower = document.getElementById("inputPower");
const inputAge = document.getElementById("inputAge");

const ranges = {
    strength: document.getElementById("strenghtRange"),
    erudition: document.getElementById("eruditionRange"),
    astuteness: document.getElementById("astutenessRange"),
    resilience: document.getElementById("resilienceRange"),
};

const spans = {
    strength: document.getElementById("strenght"),
    erudition: document.getElementById("erudition"),
    astuteness: document.getElementById("astuteness"),
    resilience: document.getElementById("resilience"),
};

function loadCharacter() {
    const savedData = localStorage.getItem("charactersDefault");
    if (!savedData) return;

    const list = JSON.parse(savedData);
    if (!Array.isArray(list)) return;

    const defaultOption = document.createElement("option");
    defaultOption.value = "";
    defaultOption.textContent = "Selecione o personagem";
    defaultOption.disabled = true;
    defaultOption.selected = true;
    select.appendChild(defaultOption);

    list.forEach((character) => {
        const option = document.createElement("option");
        option.value = character.id;
        option.textContent = character.name;
        select.appendChild(option);
    });
}
function updateSpan(stat, value) {
    spans[stat].textContent = value * 10;
}

function loadSelectedCharacter() {
    const list = JSON.parse(localStorage.getItem("charactersDefault")) || [];

    const selected = list.find((c) => c.id == select.value);
    if (!selected) return;

    inputPower.value = selected.power || "";
    inputAge.value = selected.age || "";

    const stats = selected.stats || {};

    Object.keys(ranges).forEach((key) => {
        const value = stats[key] || 1;
        ranges[key].value = value;
        updateSpan(key, value);
        updateRangeBackground(ranges[key]);
    });
}

function updateRangeBackground(range) {
    const percent = ((range.value - range.min) / (range.max - range.min)) * 100;

    range.style.background = `linear-gradient(to right, #22c55e ${percent}%, #1f2937 ${percent}%)`;
}

Object.keys(ranges).forEach((key) => {
    const range = ranges[key];

    range.addEventListener("input", () => {
        updateSpan(key, range.value);
        updateRangeBackground(range);
    });

    updateRangeBackground(range);
});

select.addEventListener("change", loadSelectedCharacter);

function inputValidation() {
    const inputLength = inputPower.value.length;

    if (select.value == "") {
        alert("Selecione um personagem");
    } else if (inputLength < 3 || inputLength > 50) {
        alert("O poder deve conter no mínimo 3 e no máximo 50 caracteres");
    } else if (inputAge.value < 1 || inputAge.value > 300) {
        alert(
            "Caro aventureiro, realmente duvido que seu personagem tenha menos de 1 ano ou mais de 300 anos. Coloque um valor entre esses extremos",
        );
    } else {
        saveAttributes();
    }
}

function saveAttributes() {
    const list = JSON.parse(localStorage.getItem("charactersDefault")) || [];

    const index = list.findIndex((c) => c.id == select.value);
    if (index === -1) return;

    list[index].power = inputPower.value;
    list[index].age = Number(inputAge.value);

    list[index].stats = {
        strength: Number(ranges.strength.value),
        erudition: Number(ranges.erudition.value),
        astuteness: Number(ranges.astuteness.value),
        resilience: Number(ranges.resilience.value),
    };

    localStorage.setItem("charactersDefault", JSON.stringify(list));

    alert("Atributos salvos!");
}

document.addEventListener("DOMContentLoaded", loadCharacter);
