

const urlParams = new URLSearchParams(window.location.search);
const app_offer_link = urlParams.get('app_offer_link') || ' https://www.google.com/';

console.log(app_offer_link);

function goToPlayMarket() {
    window.open(app_offer_link, '_blank').focus();
}

function smoothScroll(id) {
    document.querySelector(id).scrollIntoView({
        behavior: 'smooth'
    });
}

function send() {
    const form = document.querySelector('#form');
    const formData = new FormData(form);
    const result = {};
    for (let [name, value] of formData) {
        result[name] = value;
    }
    if (result.name == "" || result.email== "" || result.message == ""  ) {

        swal("Oops!", "Fill the blanks correctly!", "error" );
    }
    else
    swal("Great!", "We'll get back to you soon!", "success");
    console.log(result);
}