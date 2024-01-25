const approachBox = document.querySelector('#approach-box');

getApproachs();

async function getApproachs() {
    const response = await fetch('approachCard.json');
    const approachArray = await response.json();

    renderApproachs(approachArray);
};

function renderApproachs(approachArray) {
    approachArray.forEach(function (item) {
        const approachHTML =`
            <div class="approach__card" data-id="${item.id}">
                <div class="approach__card-title"><span>${item.number}</span> ${item.title}</div>
                <div class="approach__card-text">${item.text}</div>
            </div>
        `;
        approachBox.insertAdjacentHTML('beforeend', approachHTML)
    });
};