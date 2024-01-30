const nichesBox = document.querySelector('#niches-box');

getNiches();

async function getNiches() {
    const response = await fetch('nichesCard.json');
    const nichesArray = await response.json();

    renderNiches(nichesArray);
};

function renderNiches(nichesArray) {
    nichesArray.forEach(function (item) {
        const nichesHTML = `
            <div class="niches__card" data-id="${item.id}">
                <h3 class="niches__card-title">${item.title}</h3>
                <p class="niches__card-text">${item.text}</p>
            </div>
        `;
        nichesBox.insertAdjacentHTML('beforeend', nichesHTML);
    });
};