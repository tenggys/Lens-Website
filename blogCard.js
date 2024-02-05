const blogBox = document.querySelector("#blog-box");

getBlogs();

async function getBlogs() {
    const response = await fetch('blogCard.json');
    const blogArray = await response.json();

    renderBlog(blogArray);
};

function renderBlog(blogArray) {
    blogArray.forEach(function (item) {
        const blogHTML = `
            <div class="blog-item" data-id="${item.id}">
                <img class="blog__box-img" src="${item.img}" alt="${item.alt}">
                <h3 class="blog__box-title">${item.title}</h3>
                <p class="blog__box-text">${item.text}</p>
                <button class="blog__box_btn">
                    <p class="blog__box_btn-text">${item.btnText}</p>
                    <img class="blog__box_btn-img" src="${item.btnImg}" alt=""> 
                </button>
            </div>
        `;
        blogBox.insertAdjacentHTML('beforeend', blogHTML)
    });
};