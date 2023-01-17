
                                                //  Task 1-2

let slideItem = [
    {
        src: 'img/1.jpg',
    },
    {
        src: 'img/2.jpg',
    },
    {
        src: 'img/3.jpg',
    },
    {
        src: 'img/4.jpg',
    },
];
let boxSlid = document.querySelector('.slider');


slideItem.forEach((item) => {
    let div = document.createElement('div');
    let img = document.createElement('img');
    div.className = 'slider-item';
    img.setAttribute('src', item.src);
    div.appendChild(img);
    boxSlid.appendChild(div);
});

let offset = 0;


document.querySelector('.right-button ').addEventListener('click', function () {
    offset += 900;
    if (offset > 2700) {
        offset = 0;
    };
    boxSlid.style.left = -offset + 'px';
});

document.querySelector('.left-button ').addEventListener('click', function () {
    offset -= 900;
    if (offset < 0) {
        offset = 2700;
    };
    boxSlid.style.left = -offset + 'px';
});

function test(){
    offset += 900;
    if (offset > 2700) {
        offset = 0;
    };
    boxSlid.style.left = -offset + 'px';
};
setInterval(test, 3000);


                                                //  task-3

                            
    let aTime = 10;
    let divTime = document.querySelector('.time');
    
    
    let counter = setInterval(function () {
        aTime--;
        divTime.innerText = aTime;
        if (aTime === 0) {
            alert("Ви дочекались знижок !!!!");
            clearInterval(counter);
        }
    }, 1000);

                                    //   task - 4

let popupBg = document.querySelector('.popup-bg');
let btnOpen = document.querySelector('.open');
let btnClose = document.querySelector('.close');
let modal = document.querySelector('.popup');
// console.log(popupBg, btnClose, btnOpen, modal);
let modalW = modal.clientWidth;
let modalH = modal.clientHeight;
console.log(`Висота: ${modalH} Ширина: ${modalW}`);


// btnOpen.addEventListener('click', function () {
//     popupBg.className += ' open-poput';
// });
// btnClose.addEventListener('click', function () {
//     popupBg.className -= 'open-poput';
// });
// popupBg.addEventListener('click', function () {
//     popupBg.className -= 'open-poput';
// });

btnOpen.addEventListener('click', function () {
    popupBg.classList.add('open-poput');
    modal.classList.add('open-poput');
});
btnClose.addEventListener('click', function () {
    popupBg.classList.remove('open-poput');
    modal.classList.remove('open-poput');
});
popupBg.addEventListener('click', function () {
    popupBg.classList.remove('open-poput');
    modal.classList.remove('open-poput');
});
let a = window.innerWidth;
console.log(a);
