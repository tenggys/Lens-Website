const featuresBox = document.querySelector('#features-box');

getFeatures();

async function getFeatures() {
    const response = await fetch('featuresCard.json');
    const featuresArray = await response.json();

    renderFeatures(featuresArray);
}

function renderFeatures(featuresArray) {
    featuresArray.forEach(function (item) {
        const featuresHTML = `
            <div class="features__card" data-id="${item.id}">
                <img class="features__card-img" src="" alt="">
                <h3 class="features__card-title">${item.title}</h3>
                <p class="features__card-text">${item.text}</p>
            </div>
        `;
        featuresBox.insertAdjacentHTML('beforeend', featuresHTML);
    });
}