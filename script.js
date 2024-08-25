document.getElementById('bot-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const botName = document.getElementById('bot-name').value;
    const botDescription = document.getElementById('bot-description').value;
    const botImage = document.getElementById('bot-image').value;

    const botContainer = document.querySelector('.bot-container');
    const botItem = document.createElement('div');
    botItem.classList.add('bot-item');
    botItem.innerHTML = `
        <img src="${botImage}" alt="${botName}">
        <h3>${botName}</h3>
        <p>${botDescription}</p>
    `;

    botContainer.appendChild(botItem);

    // Clear form fields
    document.getElementById('bot-form').reset();
});