const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

window.setInterval("updateTime()", 1000);
function updateTime() {
    let now = new Date();

    $(".qr-time-update").innerHTML = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}:${now.getSeconds().toString().padStart(2, '0')} - ${now.getDate().toString().padStart(2, '0')}/${(now.getMonth() + 1).toString().padStart(2, '0')}/${now.getFullYear().toString().padStart(2, '0')}`;
}

$('.header img').addEventListener('click', function () {
    $('.root').style.display = 'none'
    $('.root-province').style.display = 'block'
})