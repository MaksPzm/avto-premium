const siteSearch = (() => {
    const search = document.querySelector(".header__img");
    const form = document.querySelector(".header__search_form");
    search.addEventListener("click", () => {
        form.classList.toggle('hidden');
    })
})()