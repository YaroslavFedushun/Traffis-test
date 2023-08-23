const urlParams = new URLSearchParams(window.location.search);
const app_offer_link = urlParams.get('app_offer_link') || ' https://www.google.com/';

console.log(app_offer_link);

function goToPlayMarket() {
    window.open(app_offer_link, '_blank').focus();
}

function smoothScroll(id){
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}