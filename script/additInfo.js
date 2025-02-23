const interview = document.querySelector('.wrap__content_addit-info_interview');
const blockInterviewImg = ['images/png/subBox/topImg.png'];

const Interviews = (() => {
    let img = new Image;
    img.src = blockInterviewImg[0];
    console.log('img : ', img );
    let content = `${img.outerHTML} <h3 class="wrap__content_addit-info_popular_title">Leon Hunt</h3>
        <span class="wrap__content_addit-info_intervie_span">Food & cooking bloger</span> 
        <p class="wrap__content_addit-info_intervie_text">Hi, I'm Leon. Cooking is the way I express my creative side to the world. 
        Welcome to my Kitchen Corner on…</p>
        <button type="button" href="#" class="wrap__content_addit-info_intervie_btn">Continue Reading</button>`;
    interview.innerHTML = content;
})()