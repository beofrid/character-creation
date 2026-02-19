async function loadProfile() {
    const user = "Beofrid";
    const response = await fetch(`https://api.github.com/users/${user}`);
    const data = await response.json();

    document.getElementById("profile").innerHTML = `
      <div class="github-card">
        <div class="avatar-container">
            <img src="${data.avatar_url}" alt="Avatar" class="github-avatar">
        </div>
        <div class="github-info">
            <h3>${data.name}</h3>
            <span class="github-username">@${data.login}</span>
            <p class="github-bio">${data.bio || "Desenvolvedor de Heróis"}</p>
            <div class="github-stats">
                <div class="stat-item">
                    <strong>${data.public_repos}</strong>
                    <span>Repositórios</span>
                </div>
            </div>
            <a href="${data.html_url}" target="_blank" class="github-link">Ver Perfil Completo</a>
        </div>
    </div>
    `;
}

loadProfile();
