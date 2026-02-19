function loadCharacters() {
    const list = JSON.parse(localStorage.getItem("charactersDefault")) || [];
    const tableBody = document.getElementById("tableBody");
    const emptyWarning = document.getElementById("empty-gallery");

    // Limpa a tabela antes de carregar
    tableBody.innerHTML = "";

    if (list.length === 0) {
        emptyWarning.style.display = "block";
        return;
    }

    list.forEach((character, index) => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>
                <div class="mini-preview">
                    <img src="${character.skin}" class="mini-layer">
                    <img src="${character.head}" class="mini-layer">
                    <img src="${character.clothes}" class="mini-layer">
                </div>
            </td>
            <td><strong>${character.name || "Sem nome"}</strong></td>
            <td>
                <button onclick="excluirHeroi(${index})" style="background:#ef4444; padding: 5px 10px;">
                    Excluir
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });
}

function excluirHeroi(index) {
    if (confirm("Tem certeza que deseja apagar todos os heróis?")) {
        localStorage.removeItem("meusPersonagens");
        let list = JSON.parse(localStorage.getItem("charactersDefault")) || [];
        list.splice(index, 1);
        localStorage.setItem("charactersDefault", JSON.stringify(list));
        loadCharacters();
    }
}

function limparGaleria() {
    if (confirm("Tem certeza que deseja apagar todos os heróis?")) {
        localStorage.removeItem("meusPersonagens");
        loadCharacters();
    }
}

// Inicializa ao carregar a página
window.onload = loadCharacters();
