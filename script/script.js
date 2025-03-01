const siteSearch = (() => {
    const search = document.querySelector(".header__img");
    const form = document.querySelector(".header__search_form");
    search.addEventListener("click", () => {
        form.classList.toggle('hidden');
    })
})()


const boxNumber = document.querySelector('.content__country-number');
const crumbs = document.querySelector('.content__country-number_crumbs');
const createNumDiv = `
                <div class="content__country-number_num">4</div>
                <div class="content__country-number_num">5</div>
                <div class="content__country-number_num">6</div>
                <div class="content__country-number_num">7</div>
                `;
boxNumber.addEventListener('click', event => {
    const { target } = event;
    const targetClassList = target.classList;
    const allNumPages = Array.from(document.querySelectorAll('.content__country-number_num'));
    const activeNumPages = allNumPages.findIndex(index => index.classList.contains('active'));
    const classActive = document.querySelector('.content__country-number_num.active')
    console.log('classActive: ', classActive);
    if (targetClassList.contains('content__country-number_num_left')) activeNumPages && setNum(-1, true);
    if (targetClassList.contains('content__country-number_num_right')) (activeNumPages - allNumPages.length + 1) && setNum(1, true);
    if (allNumPages[2] == target || allNumPages[1] == classActive) {
            console.log('мы здесь');
            crumbs.remove();
            allNumPages[2].insertAdjacentHTML('afterend', createNumDiv);
        }   
    if (targetClassList.contains('content__country-number_num')) setNum(target.innerHTML);
    if (targetClassList.contains('content__country-number_crumbs')) {
            crumbs.remove();
            allNumPages[2].insertAdjacentHTML('afterend', createNumDiv);
    }
    function setNum(num, direction = null) {
        allNumPages[activeNumPages].classList.remove('active');
        (allNumPages[direction === null ? target.innerHTML - 1 : activeNumPages + num]).classList.add('active');
    }

})

