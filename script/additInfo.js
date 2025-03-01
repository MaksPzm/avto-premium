const interview = document.querySelector('.wrap__content_addit-info_interview');
const blockInterviewImg = ['images/png/subBox/topImg.png'];

const Interviews = (() => {
    let img = new Image;
    img.src = blockInterviewImg[0];
    let content = `${img.outerHTML} <h3 class="wrap__content_addit-info_popular_title">Leon Hunt</h3>
        <span class="wrap__content_addit-info_intervie_span">Food & cooking bloger</span> 
        <p class="wrap__content_addit-info_intervie_text">Hi, I'm Leon. Cooking is the way I express my creative side to the world. 
        Welcome to my Kitchen Corner on…</p>
        <button type="button" href="#" class="wrap__content_addit-info_intervie_btn">Continue Reading</button>`;
    interview.innerHTML = content;
})()

const PostRightBoxOne = document.querySelectorAll(".wrap__content_addit-info_popular_post");
const PostRightBoxOneImg = ['images/png/subBox/topImgCar.png', 'images/png/subBox/ImgCarCenter.png', 'images/png/subBox/ImgCarLast.png'];

//добавляет инфонрм в блоки если, если нужно динамические изм, добаветь условия
function getPopularPostBoxOne(i) {
    let img = new Image;
        img.src = PostRightBoxOneImg[i];
        img.classList.add('wrap__content_addit-info_popular_post_img')
        let contentPost = `${img.outerHTML}
            <span class="content__block_1_item_span wrap__contet_group-1_subgroup_span wrap__content_addit-info_popular_post_tag-sp">Vehicle</span>
            <h2 class="wrap__content_addit-info_h2-tit">One of Saturn’s largest rings may be newer than anyone</h2>
            <span class="wrap__content_addit-info_intervie_span wrap__content_addit-info_author">Rickie Baroch - June 6, 2019</span>`
            PostRightBoxOne[i].innerHTML = contentPost;
            PostRightBoxOne[0].style.marginTop = "20px";
}


getPopularPostBoxOne(0)
getPopularPostBoxOne(1)
getPopularPostBoxOne(2)
    
const instImg = ['images/png/inst/RectangleCopy42.png', 
    'images/png/inst/RectangleCopy2.png', 'images/png/inst/RectangleCopy43.png',
    'images/png/inst/RectangleCopy24.png', 'images/png/inst/RectangleCopy44.png',
    'images/png/inst/RectangleCopy30.png'
 ];
const boxInstImg = document.querySelector('.wrap__content_addit-info_inst_box');

function getInstagramBoxImg() {
    for (let i = 0; i < instImg.length; i++) {
        let img = new Image;
        img.src = instImg[i];
        img.alt = 'auto';
        boxInstImg.append(img);
    }
}   

getInstagramBoxImg()