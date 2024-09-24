document.addEventListener('DOMContentLoaded', function() {
    const username = 'JMTobler'
    const url = `https://api.github.com/users/${username}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.querySelector('.profile-avatar').src = data.avatar_url;
            document.querySelector('.profile-name').textContent = data.name;
            document.querySelector('.profile-username').textContent = `@${data.login}`;
            document.querySelectorAll('.numbers-item')[0].lastChild.textContent = data.public_repos;
            document.querySelectorAll('.numbers-item')[1].lastChild.textContent = data.followers;
            document.querySelectorAll('.numbers-item')[2].lastChild.textContent = data.following;
            document.querySelector('.profile-link').href = data.html_url;
        })
        .catch(error => console.error('Erro ao buscar dados:', error));
});
