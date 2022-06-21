let Corusel = [
    {
        id: 0,
        name: "Rec 1",
        fil: "btn-1",
        catigory: "btn 1",
        img: "./icon/like1.svg"
    },
    {
        id: 1,
        name: "Rec 2",
        fil: "btn-2 card2",
        catigory: "btn 2",
        img: "./icon/like2.svg"
    },
    {
        id: 2,
        name: "Rec 3",
        fil: "btn-3 card3",
        catigory: "btn 3",
        img: "./icon/like3.svg"
    },
    {
        id: 3,
        name: "Rec 4",
        fil: "btn-4 card4",
        catigory: "btn 4",
        img: "./icon/like4.svg"
    },
    {
        id: 4,
        name: "Rec 5",
        fil: "btn-5 card5",
        catigory: "btn 5",
        img: "./icon/like5.svg"
    },
    {
        id: 5,
        name: "Rec 6",
        fil: "btn-6 card6",
        catigory: "btn 6",
        img: "./icon/like6.svg"
    },
    {
        id: 6,
        name: "Rec 7",
        fil: "btn-7 card7",
        catigory: "btn 7",
        img: "./icon/like7.svg"
    }
]
let swiperWrapper = document.querySelector("#coruselbtn");
let activ;
function kop(el) {
    return document.querySelectorAll(el)
}
const FilterBtn = () => {
    // swiperWrapper.innerHTML = ''
    Corusel.forEach((val, i) => {
        swiperWrapper.innerHTML += `
            <div class="swiper-slide slider "  onclick="dataFilter(${i})">
                <button class="slideBtn">
                    <img src="${val.img}" alt="">
                    <h3 class="slideH3">${val.name}</h3>
                </button>
            </div>
        `
    })
}
FilterBtn()
let slider = document.querySelectorAll(".slider");
// slider[0].classList.add('activ')
slider.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        slider.forEach((val) => {
            val.classList.remove('activ')
        })
        slider[i].classList.add('activ')
    })
})
let filterCards = [
    {
        id: 0,
        img: "./img/card1.svg",
        h5: "Matem 1",
        h3: "Kurs 1",
        like: "45",
        user: "23",
        bg: "rgb(249, 226, 167)",
        mashhur: "text 1",
        params1: true,
        key: 'btn-1 card2',

    },
    {
        id: 1,
        img: "./img/card2.png",
        h5: "Matem 2",
        h3: "Kurs 2",
        like: "45",
        user: "23",
        bg: "rgb(255, 159, 183)",
        mashhur: "text 2",
        param: true,
        params6: true,
        key: 'btn-1'
    },
    {
        id: 2,
        img: "./img/card3.png",
        h5: "Matem 3",
        h3: "Kurs 3",
        like: "45",
        user: "23",
        bg: "rgb(212, 128, 255)",
        mashhur: "text 3",
        params18: true,
        key: 'btn-1'
    },
    {
        id: 3,
        img: "./img/card4.png",
        h5: "Matem 4",
        h3: "Kurs 4",
        like: "45",
        user: "23",
        bg: "rgb(160, 217, 130)",
        mashhur: "text 4",
        params18: true,
        params6: true,
        key: 'btn-1 card3'
    },
    {
        id: 4,
        img: "./img/card5.png",
        h5: "Matem 5",
        h3: "Kurs 5",
        like: "45",
        user: "23",
        bg: "rgb(54, 217, 176)",
        mashhur: "text 2",
        params2: true,
        key: 'btn-1 card3'
    },
    {
        id: 5,
        img: "./img/card6.png",
        h5: "Matem 6",
        h3: "Kurs 6",
        like: "45",
        user: "23",
        bg: "rgb(109, 142, 242)",
        mashhur: "text 6",
        params2: true,
        key: 'btn-1 card3'
    },
    {
        id: 6,
        img: "./img/card7.png",
        h5: "Matem 7",
        h3: "Kurs 7",
        like: "45",
        user: "23",
        bg: "rgb(78, 147, 243)",
        mashhur: "text 7",
        params8: true,
        key: 'btn-1 card3'
    },
    {
        id: 7,
        img: "./img/card8.png",
        h5: "Matem 8",
        h3: "Kurs 8",
        like: "45",
        user: "23",
        bg: "rgb(255, 153, 102)",
        mashhur: "text 8",
        params8: true,
        key: 'btn-1 card3'
    },
    {
        id: 8,
        img: "./img/card9.png",
        h5: "Matem 9",
        h3: "Kurs 9",
        like: "45",
        user: "23",
        bg: "rgb(243, 198, 146)",
        mashhur: "text 9",
        params8: true,
        key: 'btn-1 card3'
    },
    {
        id: 9,
        img: "./img/card10.png",
        h5: "Matem 10",
        h3: "Kurs 10",
        like: "45",
        user: "23",
        bg: "rgb(241, 193, 97)",
        mashhur: "text 10",
        params8: true,
        key: 'btn-1 card3 card5 card7'
    },
    {
        id: 10,
        img: "./img/card11.png",
        h5: "Matem 11",
        h3: "Kurs 11",
        like: "45",
        user: "23",
        bg: "rgb(255, 166, 210)",
        mashhur: "text 11",
        params8: true,
        key: 'btn-1 card3 card5'
    },
    {
        id: 11,
        img: "./img/card12.png",
        h5: "Matem 12",
        h3: "Kurs 12",
        like: "45",
        user: "23",
        bg: "rgb(249, 211, 100)",
        mashhur: "text 12",
        params8: true,
        params6: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 12,
        img: "./img/card13.png",
        h5: "Matem 13",
        h3: "Kurs 13",
        like: "45",
        user: "23",
        bg: "rgb(102, 203, 136)",
        mashhur: "text 13",
        params8: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 13,
        img: "./img/card14.png",
        h5: "Matem 14",
        h3: "Kurs 14",
        like: "45",
        user: "23",
        bg: "rgb(127, 138, 255)",
        mashhur: "text 14",
        params8: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 14,
        img: "./img/card15.png",
        h5: "Matem 8",
        h3: "Kurs 15",
        like: "45",
        user: "23",
        bg: "rgb(255, 208, 115)",
        mashhur: "text 15",
        params18: true,
        params6: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 15,
        img: "./img/card16.png",
        h5: "Matem 16",
        h3: "Kurs 16",
        like: "45",
        user: "23",
        bg: "rgb(255, 154, 180)",
        mashhur: "text 16",
        params18: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 16,
        img: "./img/card17.png",
        h5: "Matem 17",
        h3: "Kurs 17",
        like: "45",
        user: "23",
        bg: "rgb(250, 215, 110)",
        mashhur: "text 17",
        params18: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 17,
        img: "./img/card18.png",
        h5: "Matem 18",
        h3: "Kurs 18",
        like: "45",
        user: "23",
        bg: "rgb(116, 212, 116)",
        mashhur: "text 18",
        params18: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 18,
        img: "./img/card19.png",
        h5: "Matem 19",
        h3: "Kurs 19",
        like: "45",
        user: "23",
        bg: "rgb(161, 229, 126)",
        mashhur: "text 19",
        params18: true,
        params6: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 19,
        img: "./img/card20.png",
        h5: "Matem 20",
        h3: "Kurs 20",
        like: "45",
        user: "23",
        bg: "rgb(255, 217, 140)",
        mashhur: "text 20",
        params18: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 20,
        img: "./img/card21.png",
        h5: "Matem 21",
        h3: "Kurs 21",
        like: "45",
        user: "23",
        bg: "rgb(249, 211, 100)",
        mashhur: "text 21",
        params18: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 21,
        img: "./img/card22.png",
        h5: "Matem 22",
        h3: "Kurs 22",
        like: "45",
        user: "23",
        bg: "rgb(154, 85, 108)",
        mashhur: "text 22",
        params18: true,
        key: 'btn-1 card4 card5'
    },
    {
        id: 22,
        img: "./img/card23.png",
        h5: "Matem 23",
        h3: "Kurs 23",
        like: "45",
        user: "23",
        bg: "rgb(115, 115, 229)",
        mashhur: "text 23",
        params18: true,
        key: 'btn-1 card4 card5 card7'
    },
    {
        id: 23,
        img: "./img/card24.png",
        h5: "Matem 24",
        h3: "Kurs 24",
        like: "45",
        user: "23",
        bg: "rgb(115, 115, 229)",
        mashhur: "text 24",
        params18: true,
        key: 'btn-1 card4 card5 card6'
    },
    {
        id: 24,
        img: "./img/card25.png",
        h5: "Matem 25",
        h3: "Kurs 25",
        like: "45",
        user: "23",
        bg: "rgb(139, 129, 255)",
        mashhur: "text 25",
        params4: true,
        params6: true,
        key: 'btn-1 card5 card6'
    },
    {
        id: 25,
        img: "./img/card26.png",
        h5: "Matem 26",
        h3: "Kurs 26",
        like: "45",
        user: "23",
        bg: "rgb(241, 133, 214)",
        mashhur: "text 26",
        params4: true,
        key: 'btn-1 card5 card6 card7'
    },
    {
        id: 26,
        img: "./img/card27.png",
        h5: "Matem 27",
        h3: "Kurs 27",
        like: "45",
        user: "23",
        bg: "rgb(159, 217, 130)",
        mashhur: "text 27",
        params4: true,
        key: 'btn-1 card5 card6'
    },
    {
        id: 27,
        img: "./img/card28.svg",
        h5: "Matem 28",
        h3: "Kurs 28",
        like: "45",
        user: "23",
        bg: "rgb(249, 211, 100)",
        mashhur: "text 28",
        params4: true,
        key: 'btn-1 card5 card6 card7'
    }
]
let Length = document.querySelector(".Length")
const slideBtn = document.querySelectorAll('.slideBtn')
let cardsBody = document.querySelector(".cardsBody");
const AllCards = () => {
    cardsBody.innerHTML = ""
    Length.innerHTML = `${filterCards.length}`
    filterCards.forEach((val, i) => {
        cardsBody.innerHTML += `
            <div class='card' onclick="Opentab(${i})">
                <div class='cardHeader' style="background: ${val.bg}">
                    <img src=${val.img} />
                </div>
                <h5>${val.h5}</h5>
                <h3>${val.h3}</h3>
                <div class='cardFooter'>
                    <span><img src='./icon/star.svg'/></span>
                    <span class='CardText'>${val.like}</span>
                    <span><img src='./icon/user.svg'/></span>
                    <span class='CardText'>${val.user}</span>
                </div>
                <div class='mashhur'>
                    <h4>${val.mashhur}</h4>
                    <div class='mashhurText'>
                        <img src='./icon/userF.svg' />
                        <h5>${val.user}</h5>
                    </div>
                </div>
            </div>
            `
    })
}
AllCards()
const cards1 = (name) => {
    let filterAll = [];
    let clickky = name.split(" ");
    for (let key of clickky) {
        filterAll = filterCards.filter((val) => {
            return val.key.toLowerCase().trim().indexOf(key.toLowerCase().trim()) !== -1 ? key : null
        })
    }
    cardsBody.innerHTML = ""
    filterAll.forEach((val, i) => {
        Length.innerHTML = `${filterAll.length}`
        Contact1 = document.querySelectorAll(".Contact1")
        // Contact1.style.background = `red`
        cardsBody.innerHTML += `
            <div class='card' onclick="Opentab(${i})">
                <div class='cardHeader' style="background: ${val.bg}">
                    <img src=${val.img} />
                </div>
                <h5>${val.h5}</h5>
                <h3>${val.h3}</h3>
                <div class='cardFooter'>
                    <span><img src='./icon/star.svg'/></span>
                    <span class='CardText'>${val.like}</span>
                    <span><img src='./icon/user.svg'/></span>
                    <span class='CardText'>${val.user}</span>
                </div>
                <div class='mashhur'>
                    <h4>${val.mashhur}</h4>
                    <div class='mashhurText'>
                        <img src='./icon/userF.svg' />
                        <h5>${val.user}</h5>
                    </div>
                </div>
            </div>
            `
    })
}
const dataFilter = (i) => {
    console.log(Corusel[i].fil);
    cards1(Corusel[i].fil);
    activ = i;
    let ss = kop('.slider')[i];
    console.log(ss.style.background = 'red');
    FilterBtn()
    // slider[i].classList.add('activ')
}
let MassivTab = [
    {
        id: 0,
        tabbtn1: "Start",
        bg: "rgb(249, 226, 167)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 1,
        tabbtn1: "Start",
        bg: "rgb(255, 159, 183)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 2,
        tabbtn1: "Start",
        bg: "rgb(212, 128, 255)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 3,
        tabbtn1: "Start",
        bg: "rgb(160, 217, 130)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 4,
        tabbtn1: "Start",
        bg: "rgb(54, 217, 176)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 5,
        tabbtn1: "Start",
        bg: "rgb(109, 142, 242)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 6,
        tabbtn1: "Start",
        bg: "rgb(78, 147, 243)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 7,
        tabbtn1: "Start",
        bg: "rgb(255, 153, 102)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 8,
        tabbtn1: "Start",
        bg: "rgb(243, 198, 146)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 9,
        tabbtn1: "Start",
        bg: "rgb(241, 193, 97)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 10,
        tabbtn1: "Start",
        bg: "rgb(255, 166, 210)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 11,
        tabbtn1: "Start",
        bg: "rgb(249, 211, 100)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 12,
        tabbtn1: "Start",
        bg: "rgb(102, 203, 136)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 13,
        tabbtn1: "Start",
        bg: "rgb(127, 138, 255)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 14,
        tabbtn1: "Start",
        bg: "rgb(255, 208, 115)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 15,
        tabbtn1: "Start",
        bg: "rgb(255, 154, 180)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 16,
        tabbtn1: "Start",
        bg: "rgb(250, 215, 110)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 17,
        tabbtn1: "Start",
        bg: "rgb(116, 212, 116)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 18,
        tabbtn1: "Start",
        bg: "rgb(161, 229, 126)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 19,
        tabbtn1: "Start",
        bg: "rgb(255, 217, 140)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 20,
        tabbtn1: "Start",
        bg: "rgb(249, 211, 100)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 21,
        tabbtn1: "Start",
        bg: "rgb(154, 85, 108)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 22,
        tabbtn1: "Start",
        bg: "rgb(115, 115, 229)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 23,
        tabbtn1: "Start",
        bg: "rgb(115, 115, 229)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 24,
        tabbtn1: "Start",
        bg: "rgb(139, 129, 255)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 25,
        tabbtn1: "Start",
        bg: "rgb(241, 133, 214)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 26,
        tabbtn1: "Start",
        bg: "rgb(159, 217, 130)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    },
    {
        id: 27,
        tabbtn1: "Start",
        bg: "rgb(249, 211, 100)",
        tabbtn2: "О курсе",
        tabbtn3: "Задачи",
        tabbtn4: "Программа",
        tabbtn5: "Сертификат",
        tabbtn6: "Отзывы",
        tabbody1: "Единороги 1",
        tabbody2: "Единороги 2",
        tabbody3: "Единороги 3",
        tabbody4: "Единороги 4",
        tabbody5: "Единороги 5",
        tabbody6: "Единороги 6",
    }
]
let contactBody = document.querySelectorAll(".contactBody"),
    Tabs = document.querySelector(".Tabs");
// style="background: ${filterCards[i].bg}"
const InnerTabs = () => {
    Tabs.innerHTML = ''
    MassivTab.forEach((val, i) => {
        Tabs.innerHTML += `
            <div class="Contact1" style="background: ${filterCards[i].bg}">
                <nav class="cont">
                    <div class="CloseCount1" onclick="CloseTab(${i})"><img src="./icon/close.svg" alt=""></div>
                    <div class="logo"><img src="./icon/list2.svg" alt=""></div>
                    <ul class="contItem">
                        <li class="CloseCount" onclick="CloseTab(${i})"><img src="./icon/close.svg" alt=""></li>
                        <li class="countLink btnTab1">${val.tabbtn1}</li>
                        <li class="countLink">${val.tabbtn2}</li>
                        <li class="countLink">${val.tabbtn3}</li>
                        <li class="countLink">${val.tabbtn4}</li>
                        <li class="countLink">${val.tabbtn5}</li>
                        <li class="countLink">${val.tabbtn6}</li>
                    </ul>
                </nav>
                <div class="contactBody">
                    <div class="Tabcontact1 tab1">
                        <div class="TabText AnimBottom Anim1">
                            <h1 class="TabTexth1">${val.tabbody1}</h1>
                            <p class="TabTextp">Lorem ipsum, dolor sit amet cards1 <br>Neque atque alias dolores nesciunt.</p>
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                        <div class="TabImage AnimRight Anim2">
                            <img src="./img/card10.png" alt="">
                        </div>
                    </div>
                    <div class="Tabcontact1" id="tabmini">
                        <div class="TabcontactMini">
                            <div class="TabText AnimBottom">
                                <h1 class="TabTexth1">${val.tabbody2}</h1>
                                <p class="TabTextp">Lorem ipsum, dolor sit amet consectetur <br>Neque atque alias dolores nesciunt.</p>
                            </div>
                            <div class="TabImage AnimRight">
                                <img src="${filterCards[i].img}" alt="">
                            </div>
                        </div>
                        <div class="center">
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                    </div>
                    <div class="Tabcontact1" id="tabmini">
                    <div class="TabcontactMini">
                        <div class="TabText AnimBottom">
                            <h1 class="TabTexth1">${val.tabbody3}</h1>
                            <p class="TabTextp">1.Lorem ipsum dolor sit.<br> 3.Lorem ipsum dolor sit.<br>5.Lorem ipsum dolor.</p>
                        </div>
                        <div class="TabImage AnimRight">
                            <p class="TabTextp">2.Lorem ipsum dolor sit. Lorem ipsum. <br> 4.Lorem ipsum.</p>
                        </div>
                    </div>
                        <div class="center">
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                    </div>
                    <div class="Tabcontact1" id="tabmini">
                        <div class="TabcontactMini">
                            <div class="TabText AnimBottom">
                                <h1 class="TabTexth1">${val.tabbody4}</h1>
                                <p class="TabTextp">1.Lorem ipsum dolor sit.<br> 3.Lorem ipsum dolor sit.<br>5.Lorem ipsum dolor.</p>
                            </div>
                            <div class="TabImage AnimRight">
                                <p class="TabTextp">2.Lorem ipsum dolor sit. Lorem ipsum. <br> 4.Lorem ipsum.</p>
                            </div>
                        </div>
                        <div class="center">
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                    </div>
                    <div class="Tabcontact1" id="tabmini">
                        <div class="TabcontactMini">
                            <div class="TabText AnimBottom">
                                <h1 class="TabTexth1">${val.tabbody5}</h1>
                                <p class="TabTextp">Lorem ipsum, dolor sit amet consectetur <br>Neque atque alias dolores nesciunt.</p>
                            </div>
                            <div class="TabImage AnimRight">
                                <img src="${filterCards[i].img}" alt="">
                            </div>
                        </div>
                        <div class="center">
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                    </div>
                    <div class="Tabcontact1" id="tabmini">
                        <div class="TabcontactMini">
                            <div class="TabText AnimBottom">
                                <h1 class="TabTexth1">${val.tabbody6}</h1>
                                <p class="TabTextp">Lorem ipsum, dolor sit amet consectetur <br>Neque atque alias dolores nesciunt.</p>
                            </div>
                            <div class="TabImage AnimRight">
                                <img src="${filterCards[i].img}" alt="">
                            </div>
                        </div>
                        <div class="center">
                            <button class="TabBodyBtn">Продолжит</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}
InnerTabs()
let TabBodyBtn = document.querySelectorAll(".TabBodyBtn"),
    contItem = document.querySelectorAll(".contItem"),
    CloseCount1 = document.querySelectorAll(".contItem");
let logo = document.querySelectorAll(".logo");
logo.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        contItem.forEach((item) => {
            item.classList.remove('activ')
        })
        contItem[i].classList.add('activ')
    })
})
let Contact1 = document.querySelectorAll(".Contact1"),
    AnimBottom = document.querySelectorAll(".AnimBottom"),
    AnimRight = document.querySelectorAll(".AnimRight"),
    Tabcontact1 = document.querySelectorAll(".Tabcontact1");
let tab1 = document.querySelectorAll(".tab1"),
    Anim1 = document.querySelectorAll(".Anim1"),
    Anim2 = document.querySelectorAll(".Anim2"),
    btnTab1 = document.querySelectorAll(".btnTab1");
const Opentab = (i) => {
    console.log(filterCards[i].id);
    Contact1[i].classList.add('activ')
    AnimBottom[0].classList.add('activ')
    AnimRight[0].classList.add('activ')
    countLink[0].classList.add('activ')
    tab1.forEach((item) => {
        item.classList.add('activ')
    })
    btnTab1.forEach((item) => {
        item.classList.add('activ')
    })
    Anim1.forEach((item) => {
        item.classList.add('activ')
    })
    Anim2.forEach((item) => {
        item.classList.add('activ')
    })
}
let countLink = document.querySelectorAll(".countLink");
countLink.forEach((btn, i) => {
    btn.addEventListener('click', (e) => {
        console.log(e.target);
        console.log(i);
        contItem.forEach((item) => {
            item.classList.remove('activ')
        })
        countLink.forEach((item) => {
            item.classList.remove('activ')
        })
        Tabcontact1.forEach((item) => {
            item.classList.remove('activ')
        })
        AnimBottom.forEach((item) => {
            item.classList.remove('activ')
        })
        AnimRight.forEach((item) => {
            item.classList.remove('activ')
        })
        countLink[i].classList.add('activ')
        AnimRight[i].classList.add('activ')
        AnimBottom[i].classList.add('activ')
        Tabcontact1[i].classList.add('activ')
    })
})
const CloseTab = (i) => {
    Contact1[i].classList.remove('activ')
    Tabcontact1.forEach((item) => {
        item.classList.remove('activ')
    })
    AnimBottom.forEach((item) => {
        item.classList.remove('activ')
    })
    AnimRight.forEach((item) => {
        item.classList.remove('activ')
    })
    tab1.forEach((item) => {
        item.classList.remove('activ')
    })
    countLink.forEach((item) => {
        item.classList.remove('activ')
    })
    contItem[i].classList.remove('activ')
}