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
const div = document.createElement('div');
console.log(div);
div.id = "total";
endContainer[0].after(div);




// получаем массив всех времен
const routeAllItems = document.querySelector('#time').querySelectorAll('option'); //все направления в одну сторону "туда", "обратно"
// по-умолчанию видны времена только для направления "из A в B"
for (let i = 5; i < (routeAllItems.length); ++i) {
   routeAllItems[i].hidden = true;
}




//_________________ выбор направления_________________

const route = document.querySelector('#route');

function clickOnRoute() {

   function showAllItems(Items) {
      for (let i = 0; i < routeAllItems.length; ++i) {
         Items[i].hidden = false;
      }
   }

   routeItem = document.getElementById('route').value;

   // для "из A в B"__________________________

   if (routeItem == "из A в B") {
      showAllItems(routeAllItems);

      for (let i = 6; i <= (routeAllItems.length - 1); ++i) {
         routeAllItems[i].hidden = true;
      }

      document.querySelector('#newTime') //найти все newTime и удалить
      if (newTimeContainer) {
         newTimeContainer.remove;
      }

      // для "из B в A" _______________________

   } else if (routeItem == "из B в A") {
      showAllItems(routeAllItems);

      for (let i = 0; i < 6; ++i) {
         routeAllItems[i].hidden = true;
      }
      if (newTimeContainer) {
         newTimeContainer.remove();
      }
      // для "из A в B и обратно в А" _________

   } else {
      showAllItems(routeAllItems);
      for (let i = 6; i < (routeAllItems.length - 1); ++i) {
         routeAllItems[i].hidden = true;
      }

      clon = document.querySelector('#time');
      newTimeContainer = clon.cloneNode(true);
      newTimeContainer.id = "newTime";
      time.after(newTimeContainer);

      newRouteAllItems = document.querySelector('#newTime').querySelectorAll('option');

      showAllItems(newRouteAllItems);
      for (let i = 0; i < 6; ++i) {
         newRouteAllItems[i].hidden = true;
      }

      priceOfTicket = 1200;
      timeRoute = "1 час и 40 минут";


      const newTime = document.querySelector('#newTime');

      function clickNewTime() {
         timeDepart2 = document.getElementById('newTime').value;
         console.log(timeDepart2);
         hoursTimeDepart2 = +timeDepart2.slice(0, 2);
         minTimeDepart2 = +timeDepart2.slice(3, 5);
         timeDepartEnd = new Date();
         timeDepartEnd.setHours(hoursTimeDepart2);
         timeDepartEnd.setMinutes(minTimeDepart2);
         console.log(document.querySelector('#newTime').querySelectorAll('option'));
         for (let i of document.querySelector('#newTime').querySelectorAll('option')) {
            if ((timeDepart - timeDepartEnd) <= 3000000) {
               console.log(timeDepart);
               console.log(timeDepartEnd);
               //if (i.value != timeDepart2) {
               console.log(i.value);
               i.disabled = 'disabled';
               //exit;
               //document.querySelector('#newTime').querySelectorAll('option')[i].disabled = 'disabled';

            }
         }
         //console.log(document.getElementsByTagName(document.querySelector('#newTime')));
         //console.log(newTime.querySelectorAll("[value='timeDepart2']"));
         document.getElementsByTagName('option')[0].disabled = 'disabled';
         if ((timeDepart.getMinutes() - timeDepartEnd) < 0) {

            //document.querySelectorAll('[data-foo="timeDepart2"]').style.disabled = true;

         }
      }

      newTime.addEventListener("click", clickNewTime);
   }

}

route.addEventListener("click", clickOnRoute);






// ______________отображение и выбор времени отправления______________________

const time = document.querySelector('#time');


function clickTime() {


   timeDepart = new Date();
   timeDepart1 = document.getElementById('time').value;
   console.log(timeDepart1);
   hoursTimeDepart1 = +timeDepart1.slice(0, 2);
   minTimeDepart1 = +timeDepart1.slice(3, 5);

   timeDepart.setHours(hoursTimeDepart1);
   timeDepart.setMinutes(minTimeDepart1);
   timeDepartEnd = structuredClone(timeDepart);
   //let temppp = timeDepart;

   if ((routeItem == "из A в B") || (routeItem == "из B в A")) {
      timeDepartEnd.setMinutes(timeDepartEnd.getMinutes() + 50);
   }

   //if ((timeDepart - today) <= 0) {
   //console.dir(document.querySelector('[timeDepart1]'));
   //document.querySelector('[timeDepart1]').setAttribute('disabled', 'disabled');
   //document.querySelector('#time').setAttribute('disabled', 'disabled');
   //console.log(document.querySelector('[timeDepart1]').style);
   //}

}

function clickNewTime() {
   timeDepart2 = document.getElementById('newTime').value;
   console.log(timeDepart2);
}

time.addEventListener("click", clickTime);







//______________ заполняем сформированный div текстом ______________________

const button = document.querySelector('#button');

function inTotal() {

   countOfTicket = document.querySelector('#num').value;
   totalPrice = countOfTicket * priceOfTicket;

   // заполняем сформированный div текстом
   div.innerHTML = "Вы выбрали " + countOfTicket + " билета по маршруту " + routeItem + " стоимостью " + totalPrice + "р." + "<br>" +
      "Это путешествие займет у вас " + timeRoute + "<br>" +
      "Теплоход отправляется в " + timeDepart.getHours() + "-" + timeDepart.getMinutes() + ", а прибудет в " + timeDepartEnd.getHours() + "-" + timeDepartEnd.getMinutes();


}

button.addEventListener("click", inTotal);



//function clickChoice() {
//   total.innerHTML = "";
//   newTime.remove();

//}

//choiceParam.onclick = clickChoice;
