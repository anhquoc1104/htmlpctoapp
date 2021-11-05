const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

let zoomoutQRcode = false

window.setInterval("updateTime()", 1000);
function updateTime() {
    let now = new Date()

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

// Zoom in/ zoom put qr code
let timeout = null
let countdown = 30
$('.qr-code').addEventListener('click', function () {
    zoomoutQRcode = !zoomoutQRcode
    if (!zoomoutQRcode) {
        if (timeout) {
            clearInterval(timeout)
            timeout = null
            countdown = 30
            $(".settimeout-hide-time").innerHTML = `30s`
        }
        showQRcode()
    } else {
        $('.qr-time-update').style.display = 'none'
        $('.qr-info-hide-text').style.display = 'none'
        $('.header-location').style.display = 'none'
        $('.info-profile').style.display = 'none'
        $('.province-text-hide').style.display = 'block'
        $('.settimeout-hide').style.display = 'block'
        // $('.settimeout-hide-time').style.display = 'block'
        $('.qr-code').style.width = '90%'
        timeout = setInterval(function () {
            --countdown
            $(".settimeout-hide-time").innerHTML = `${countdown}s`
            if (countdown == 0) {
                clearInterval(timeout)
                timeout = null
                showQRcode()
                zoomoutQRcode = !zoomoutQRcode
                countdown = 30
                $(".settimeout-hide-time").innerHTML = `30s`
            }
        }, 1000)
    }
})

function showQRcode() {
    $('.qr-time-update').style.display = 'block'
    $('.qr-info-hide-text').style.display = 'block'
    $('.header-location').style.display = 'block'
    $('.info-profile').style.display = 'block'
    $('.info-profile').style.textAlign = 'center'
    $('.qr-code').style.width = '65%'
    $('.province-text-hide').style.display = 'none'
    $('.settimeout-hide').style.display = 'none'
    // $('.settimeout-hide-time').style.display = 'none'
}

$('.province').addEventListener('click', function (e) {
    const province = e.target.id
    switch (province) {
        case 'khanhhoa':
            $('.qr-code img').src = "./resources/img/qr/qr-code-khanhhoa.jpg"
            $('.header-location span').innerHTML = 'Khánh Hòa'
            $('.province-text-hide').innerHTML = 'Khánh Hòa'
            break
        case 'hochiminh':
            $('.qr-code img').src = "./resources/img/qr/qr-code-hochiminh.png"
            $('.header-location span').innerHTML = 'Hồ Chí Minh'
            $('.province-text-hide').innerHTML = 'Hồ Chí Minh'
            break
        case 'dongnai':
            $('.qr-code img').src = "./resources/img/qr/qr-code-dongnai.jpg"
            $('.header-location span').innerHTML = 'Đồng Nai'
            $('.province-text-hide').innerHTML = 'Đồng Nai'
            break
        case 'ninhthuan':
            $('.qr-code img').src = "./resources/img/qr/qr-code-ninhthuan.jpg"
            $('.header-location span').innerHTML = 'Ninh Thuận'
            $('.province-text-hide').innerHTML = 'Ninh Thuận'
            break
        case 'binhthuan':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhthuan.jpg"
            $('.header-location span').innerHTML = 'Bình Thuận'
            $('.province-text-hide').innerHTML = 'Bình Thuận'
            break
        case 'binhdinh':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhdinh.jpg"
            $('.header-location span').innerHTML = 'Bình Định'
            $('.province-text-hide').innerHTML = 'Bình Định'
            break
        case 'binhduong':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhduong.jpg"
            $('.header-location span').innerHTML = 'Bình Dương'
            $('.province-text-hide').innerHTML = 'Bình Dương'
            break
        case 'binhphuoc':
            $('.qr-code img').src = "./resources/img/qr/qr-code-binhphuoc.jpg"
            $('.header-location span').innerHTML = 'Bình Phước'
            $('.province-text-hide').innerHTML = 'Bình Phước'
            break
        case 'danang':
            $('.qr-code img').src = "./resources/img/qr/qr-code-danang.jpg"
            $('.header-location span').innerHTML = 'Đà Nẵng'
            $('.province-text-hide').innerHTML = 'Đà Nẵng'
            break
        case 'daklak':
            $('.qr-code img').src = "./resources/img/qr/qr-code-daklak.jpg"
            $('.header-location span').innerHTML = 'Đắk Lắk'
            $('.province-text-hide').innerHTML = 'Đắk Lắk'
            break
        default:
            $('.qr-code img').src = "./resources/img/qr/qr-code-hochiminh.png"
            $('.header-location span').innerHTML = 'Hồ Chí Minh'
            $('.province-text-hide').innerHTML = 'Hồ Chí Minh'
    }

    $('.root').style.display = 'flex'
    $('.root-province').style.display = 'none'
    return;
})