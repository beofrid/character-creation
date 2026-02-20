function changeImg(idLayer, newImgSrc) {
    const layer = document.getElementById(idLayer);
    layer.src = newImgSrc;
}

function saveCharacter() {
    alert("Personagem salvo na sua coleção!");

    let charactersList =
        JSON.parse(localStorage.getItem("charactersDefault")) || [];

    const name = document.getElementById("input-name").value;
    const skin = document.getElementById("skin").src;
    const head = document.getElementById("head").src;
    const clothes = document.getElementById("clothes").src;

    const existingIndex = charactersList.findIndex((c) => c.name === name);

    if (existingIndex !== -1) {
        charactersList[existingIndex] = {
            ...charactersList[existingIndex],
            skin,
            head,
            clothes,
        };
    } else {
        const newCharacter = {
            id: Date.now(),
            name,
            skin,
            head,
            clothes,
            power: "",
            age: 0,
            stats: {
                strength: 1,
                erudition: 1,
                astuteness: 1,
                resilience: 1,
            },
        };

        charactersList.push(newCharacter);
    }

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

function loadCharacter() {
    const savedData = localStorage.getItem("charactersDefault");

    if (savedData) {
        const list = JSON.parse(savedData);

        if (list.length === 0) return;

        const status = list[list.length - 1];

        if (status.name) {
            document.getElementById("input-name").value = status.name;
            document.querySelector("p").innerHTML = status.name;
        }

        document.getElementById("skin").src = status.skin;
        document.getElementById("head").src = status.head;
        document.getElementById("clothes").src = status.clothes;
    }
}
window.onload = loadCharacter();
