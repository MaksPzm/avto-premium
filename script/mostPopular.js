const popularImg = ['images/png/mostPopular/yourimagehere.png',
    'images/png/mostPopular/yourimagehere1.png',
    'images/png/mostPopular/yourimagehere2.png',
    'images/png/mostPopular/yourimagehere3.png'
];

// создаём новые блоки в(<div class="content__mostPopular_block-cont">)
function createBlockPopular() {
    const blockPopular = document.querySelector('.content__mostPopular_block-cont');
    for (let i = 0; i <= 3; i++) {
        const createElem = document.createElement('div');
        createElem.classList.add('content__mostPopular_block-cont_new');
        blockPopular.appendChild(createElem);
    }
}
createBlockPopular()

// добавляем картинки и текст в блок
const showImgBlockPopular = (() => {
    const getNewBlockCont = Array.from(document.querySelectorAll('.content__mostPopular_block-cont_new'));    
    
    for (let i = 0; i <= getNewBlockCont.length; i++) {
        getNewBlockCont[i].innerHTML = `
            <img class='content__mostPopular_block-cont_new_img' src='${popularImg[i]}' alt='BMW'>
            <h2 class='content__mostPopular_block-cont_new_title'>One of Saturn’s largest rings may be newer than anyone</h2>
            <span class='content__mostPopular_block-cont_new_after'>Rickie Baroch - June 6, 2019</span>
            <span class='content__mostPopular_block-cont_new_tag' href='#'>BMW</span>
            `;
    }      
})()