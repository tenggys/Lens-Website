const approachBox = document.querySelector('#approach-box');


async function getApproachs() {
    const response = await fetch('approachCard.jsn');
    const approachArray = await response.json();

    renderApproachs(approachArray);
};

function renderApproachs(approachArray) {
    approachArray.forEach(function (item) {
        const approachHTML ='';
        approachBox.insertAdjacentHTML('beforeend', approachHTML)
    });
};