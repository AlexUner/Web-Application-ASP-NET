

document.querySelector('.planetarium-btn').onclick = function () {
    document.querySelector('.planetarium-btn').classList.add('planetarium-btn__active');

    document.querySelector('.planetarium-img').classList.add('planetarium-img__active');
    document.querySelector('.planetarium-img').onclick = function () {
        label.classList.remove('hide');
        planetTable.classList.add('hide');
    };

    var label = document.querySelector('.intro-text');

    label.classList.add('intro-text__active');
    label.classList.add('intro-text__active2');

    var elements = document.querySelectorAll('area');
    var planetName = document.querySelector('.description__name');
    var planetTable = document.querySelector('.description');
    var planetImage = document.querySelector('.description__img')

    const planeImgSrc = {
        'Mercury': '',
        'Venus': 'https://i.pinimg.com/564x/ef/3e/ff/ef3eff1f824228cdcc0985a298b4312a.jpg',
        'Earth': 'https://i.pinimg.com/564x/2b/49/b8/2b49b80071912c210375a648cd6847e7.jpg',
        'Mars': 'https://i.pinimg.com/564x/40/4e/e2/404ee2e86bb05df675fc039339b932f7.jpg',
        'Jupiter': '',
        'Uranus': 'https://i.pinimg.com/564x/3a/d4/d2/3ad4d2914d139767e01c7c3a8229c6aa.jpg',
        'Neptune': '4fa758e6d388593f8637da4bdd697ef6',
        'Pluto': '4fa758e6d388593f8637da4bdd697ef6',
        'Sun': ''
    };

    for (let elem of elements) {
        elem.onclick = function () {

            label.classList.add('hide');
            sleep(150);
            planetTable.classList.remove('hide');

            planetName.innerHTML = this.alt;
            planetImage.src = planeImgSrc[this.alt];
        };
    }
}

function sleep(milliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < milliseconds);
}
