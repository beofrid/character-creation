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
            <p class="github-bio">${data.bio || "Desenvolvedor de Personagens"}</p>
            <div class="github-stats">
                <div class="stat-item">
                    <strong>${data.public_repos}</strong>
                    <span>Repositórios</span>
                </div>
            </div>
            <a href="${data.html_url}" target="_blank" class="github-link">Ver Perfil Completo</a>
        </div>
    <br><br>
        <div class="github-bio"> Este projeto foi concebido, planejado, desenhado (pixel art), e elaborado por mim. Usei Inteligência artificial em boa parte do CSS pois não tenho muita habilidade. Usei também para corrigir alguns problemas e comportamentos estranhos do javascript, considerando o prazo curto e a extensão do projeto que eu me propus a realizar. <br><strong>Este não é um projeto desenvolvido por IA.</strong></div>

    </div>
    `;
}

loadProfile();
