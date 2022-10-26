"use strict";

// routeAllItems; 
let newRouteAllItems; //все направления нового селектора "обратно" для "туда-обратно"
let currentRoute; // элемент time
let routeItem = "из A в B"; // по-умолч направление

//время отправления по-умолч 18-00
let timeDepart = new Date();
timeDepart.setHours(18);
timeDepart.setMinutes(0);

let timeDepart1;

//время прибытия по-умолч 18-50
let timeDepartEnd = new Date();
timeDepartEnd.setHours(18);
timeDepartEnd.setMinutes(50);

let timeDepart2; //время отправления обратно
let timeDepartEnd2; //время отправления обратно


let timeRoute = "50 минут"; // по-умолч время в пути
let countOfTicket; //кол-во билетов
let totalPrice; //стоимость билетов
let priceOfTicket = 700; // по-умолч стоимость в 1 сторону

// вспомогательные штучки
let clon;
let hoursTimeDepart1;
let minTimeDepart1;
let hoursTimeDepart2;
let minTimeDepart2;

let today = new Date();
let newTimeContainer;



// создаем div для вывода конечной информации
const endContainer = document.querySelectorAll('.end');
console.log(endContainer[0]);
const divContainer = document.createElement('div');
//console.log(divContainer);
divContainer.id = "total";
endContainer[0].after(divContainer);




// получаем массив всех времен
const routeAllItems = document.querySelector('#time').querySelectorAll('option'); //все направления в одну сторону "туда", "обратно"
// по-умолчанию видны времена только для направления "из A в B"
for (let i = 5; i < (routeAllItems.length); ++i) {
   routeAllItems[i].hidden = true;
}


// функция выбора времени отправления из В в дополнительном селекте
function clickNewTime() {
   timeDepart2 = document.getElementById('newTime').value;
   hoursTimeDepart2 = +timeDepart2.slice(0, 2);
   minTimeDepart2 = +timeDepart2.slice(3, 5);
   timeDepartEnd2 = new Date();
   timeDepartEnd2.setHours(hoursTimeDepart2);
   timeDepartEnd2.setMinutes(minTimeDepart2 + 50);
   //timeDepartEnd2.setMinutes(timeDepart.getMinutes() + 50);
   timeDepartEnd = timeDepartEnd2;

   let tempTime1 = timeDepartEnd.getHours() - timeDepart.getHours();
   let tempTime2 = timeDepartEnd.getMinutes() - timeDepart.getMinutes();
   if (tempTime1 == 2 || tempTime1 == 3 || tempTime1 == 4) {
      timeRoute = tempTime1 + " часа " + tempTime2 + " минут";
   } else if (tempTime1 == 1) {
      timeRoute = tempTime1 + " час " + tempTime2 + " минут";
   } else {
      timeRoute = tempTime1 + " часов " + tempTime2 + " минут";
   }

}


const route = document.querySelector('#route');

//_________________ выбор направления_________________
function clickOnRoute() {


   function showAllItems(Items) {
      for (let i = 0; i < routeAllItems.length; ++i) {
         Items[i].hidden = false;
      }
   }


   routeItem = document.getElementById('route').value;

   // для "из A в B"__________________________

   if (routeItem == "из A в B") {
      // показываем все элементы
      showAllItems(routeAllItems);
      // скрываем ненужные options
      for (let i = 6; i <= (routeAllItems.length - 1); ++i) {
         routeAllItems[i].hidden = true;
      }
      //найти newTime и скрыть, если есть
      const newTimeContainer1 = document.querySelectorAll('#newTime');
      newTimeContainer1[0].hidden = true;

      priceOfTicket = 700;
      timeRoute = "50 минут";

      // для "из B в A" _______________________

   } else if (routeItem == "из B в A") {
      // показываем все элементы
      showAllItems(routeAllItems);
      // скрываем ненужные options
      for (let i = 0; i < 6; ++i) {
         routeAllItems[i].hidden = true;
      }

      //найти newTime и скрыть
      const newTimeContainer1 = document.querySelectorAll('#newTime');
      newTimeContainer1[0].hidden = true;

      priceOfTicket = 700;
      timeRoute = "50 минут";

      // для "из A в B и обратно в А" _________

   } else {
      // показываем все элементы
      showAllItems(routeAllItems);
      // скрываем ненужные options
      for (let i = 6; i < (routeAllItems.length - 1); ++i) {
         routeAllItems[i].hidden = true;
      }

      // создаем селект для newTime, если еще не создан
      if (!document.getElementById('newTime')) {

         clon = document.querySelector('#time');
         newTimeContainer = clon.cloneNode(true);
         newTimeContainer.id = "newTime";
         time.after(newTimeContainer);
      } else {
         // показываем скрытый селект для newTime, если создан
         const newTimeContainer1 = document.querySelectorAll('#newTime');
         newTimeContainer1[0].hidden = false;
      }

      // в нем скрываем все направления из В в АВ по-умолч
      newRouteAllItems = document.querySelector('#newTime').querySelectorAll('option');

      showAllItems(newRouteAllItems);
      for (let i = 0; i < 6; ++i) {
         newRouteAllItems[i].hidden = true;
      }
      priceOfTicket = 1200;
      newTime.addEventListener("click", clickNewTime);
   }
}

route.addEventListener("click", clickOnRoute);




const time = document.querySelector('#time');

// ______________отображение и выбор времени отправления______________________
function clickTime() {
   timeDepart = new Date();
   timeDepart1 = document.getElementById('time').value;
   hoursTimeDepart1 = +timeDepart1.slice(0, 2);
   minTimeDepart1 = +timeDepart1.slice(3, 5);
   timeDepart.setHours(hoursTimeDepart1);
   timeDepart.setMinutes(minTimeDepart1);



   if ((routeItem == "из A в B") || (routeItem == "из B в A")) {
      timeDepartEnd = new Date();
      timeDepartEnd.setHours(hoursTimeDepart1);
      timeDepartEnd.setMinutes(minTimeDepart1);
      timeDepartEnd.setMinutes(timeDepart.getMinutes() + 50);
   } else {
      for (let j = 0; j < document.querySelector('#newTime').querySelectorAll('option').length; j++) {
         document.querySelector('#newTime').querySelectorAll('option')[j].disabled = "";
      }

      // достаем из value время отправления "туда" и создаем числовую переменную
      let time1 = new Date();
      let timeHelp = document.getElementById('time').value;
      let hoursTimeHelp1 = +timeHelp.slice(0, 2);
      let minTimeHelp1 = +timeHelp.slice(3, 5);
      time1.setHours(hoursTimeHelp1);
      time1.setMinutes(minTimeHelp1);
      time1.setMinutes(time1.getMinutes() + 50);

      let time2 = new Date();

      for (const i of document.querySelector('#newTime').querySelectorAll('option')) {
         for (let j = 0; j < document.querySelector('#newTime').querySelectorAll('option').length; j++) {

            // достаем из value время отправления "обратно" и создаем числовую переменную
            timeHelp = document.querySelector('#newTime').querySelectorAll('option')[j].value;
            let hoursTimeHelp2 = +timeHelp.slice(0, 2);
            let minTimeHelp2 = +timeHelp.slice(3, 5);
            time2.setHours(hoursTimeHelp2);
            time2.setMinutes(minTimeHelp2);

            // если время обратно меньше чем время отправления + 50 минут, то скрыть
            if ((time2 - time1) < 0) {
               document.querySelector('#newTime').querySelectorAll('option')[j].disabled = "disabled";
            }
         }
      }
   }
}

time.addEventListener("click", clickTime);




//______________ заполняем сформированный div текстом ______________________

const button = document.querySelector('#button');

function inTotal() {

   countOfTicket = +document.querySelector('#num').value;
   console.log(Number.isInteger(countOfTicket));
   if (countOfTicket <= 0 || !Number.isInteger(countOfTicket) || (countOfTicket - parseInt(countOfTicket)) != 0) {
      alert("Введите количество билетов");
      countOfTicket = 0;
   }
   totalPrice = countOfTicket * priceOfTicket;

   // заполняем сформированный div текстом
   divContainer.innerHTML = "Вы выбрали " + countOfTicket + " билета по маршруту " + routeItem + " стоимостью " + totalPrice + "р." + "<br>" +
      "Это путешествие займет у вас " + timeRoute + "<br>" +
      "Теплоход отправляется в " + timeDepart.getHours() + "-" + timeDepart.getMinutes() + ", а прибудет в " + timeDepartEnd.getHours() + "-" + timeDepartEnd.getMinutes();
}

button.addEventListener("click", inTotal);