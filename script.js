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

$('.location-header-text img').addEventListener('click', function () {
    $('.root').style.display = 'flex'
    $('.root-province').style.display = 'none'
})

$('.province').addEventListener('click', function (e) {
    const province = e.target.id
    console.log(province);

    switch (province) {
        case 'khanhhoa':
            $('.qr-code img').src = "./resources/img/qr/qr-code-khanhhoa.jpg"
            $('.header-location span').innerHTML = 'Khánh Hòa'
            break
        case 'hochiminh':
            $('.qr-code img').src = "./resources/img/qr/qr-code-hochiminh.png"
            $('.header-location span').innerHTML = 'Hồ Chí Minh'
            break
        case 'dongnai':
            $('.qr-code img').src = "./resources/img/qr/qr-code-dongnai.jpg"
            $('.header-location span').innerHTML = 'Đồng Nai'
            break
        case 'ninhthuan':
            $('.qr-code img').src = "./resources/img/qr/qr-code-ninhthuan.jpg"
            $('.header-location span').innerHTML = 'Ninh Thuận'
            break
        case 'binhthuan':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhthuan.jpg"
            $('.header-location span').innerHTML = 'Bình Thuận'
            break
        case 'binhduong':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhduong.jpg"
            $('.header-location span').innerHTML = 'Bình Dương'
            break
        case 'binhphuoc':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhphuoc.jpg"
            $('.header-location span').innerHTML = 'Bình Phước'
            break
        case 'cantho':
            $('.qr-code img').src = "./resources/img/qr/qr-code-cantho.jpg"
            $('.header-location span').innerHTML = 'Cần Thơ'
            break
        case 'danang':
            $('.qr-code img').src = "./resources/img/qr/qr-code-danang.jpg"
            $('.header-location span').innerHTML = 'Đà Nẵng'
            break
        case 'daklak':
            $('.qr-code img').src = "./resources/img/qr/qr-code-daklak.jpg"
            $('.header-location span').innerHTML = 'Đắk Lắk'
            break
        default:
            console.log(province);
    }

    $('.root').style.display = 'flex'
    $('.root-province').style.display = 'none'
    return;
})