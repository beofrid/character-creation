function saveCharacter() {
    alert("Personagem salvo na sua coleção!");
    let charactersList =
        JSON.parse(localStorage.getItem("charactersDefault")) || [];

    const newCharacter = {
        id: Date.now(), // Gera um ID único baseado no tempo
        name: document.getElementById("input-name").value,
        skin: document.getElementById("skin").src,
        head: document.getElementById("head").src,
        clothes: document.getElementById("clothes").src,
    };

    charactersList.push(newCharacter);

    localStorage.setItem("charactersDefault", JSON.stringify(charactersList));
}

function changeName() {
    const p = document.getElementById("pElement");
    const input = document.getElementById("input-name");
    p.innerHTML = input.value;
}

function colorChange() {
    const background = [
        "radial-gradient(circle, #fafafa 0%, #aedaed 100%)",
        "radial-gradient(circle, #303030 0%, #101010 100%)",
        "linear-gradient(#0414ee, #ff7b00)",
        "linear-gradient(to bottom, #000700, #066e03)",
        "linear-gradient(45deg, #010320, #380606)",
        "linear-gradient(0deg, #0414ee, #3cccdf, #0414ee)",
        "linear-gradient(0deg, #fdfdff, #000000)",
        "#fff",
        "#202020",
    ];
    const randomIndex = Math.floor(Math.random() * background.length);
    const cP = document.getElementById("characterPreview");
    cP.style.background = background[randomIndex];
}

function changeImg(idLayer, newImgSrc) {
    const layer = document.getElementById(idLayer);
    layer.src = newImgSrc;
}

function loadCharacter() {
    const savedData = localStorage.getItem("charactersDefault");

if (savedData) {
    const list = JSON.parse(savedData);

    if (list.length === 0) return;

    const status = list[list.length - 1]; // 🔥 pega o último

    // Restaurar nome
    if (status.name) {
        document.getElementById("input-name").value = status.name;
        document.querySelector("p").innerHTML = status.name;
    }

    // Restaurar imagens
    document.getElementById("skin").src = status.skin;
    document.getElementById("head").src = status.head;
    document.getElementById("clothes").src = status.clothes;
    }
} 
//window.onload = loadCharacter();
