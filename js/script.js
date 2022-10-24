"use strict";

let routeAllItems; //все направления
let newRouteAllItems;
let currentRoute; // элемент time
let routeItem = "из A в B"; // по-умолч направление
let timeDepart = new Date(); //время отправления
let timeDepartEnd;
let timeDepart1; //время отправления туда
let timeDepart2; //время отправления обратно
let timeRoute = "50 минут"; // по-умолч время в пути
let countOfTicket; //кол-во билетов
let totalPrice; //стоимость билетов
let priceOfTicket = 700; // по-умолч стоимость в 1 сторону
let clon;
let hoursTimeDepart1;
let minTimeDepart1;

let today = new Date();

// создаем div для вывода конечной информации
const endContainer = document.querySelectorAll('.end');
console.log(endContainer[0]);
const div = document.createElement('div');
console.log(div);
div.id = "total";
endContainer[0].append(div);

let newTime;

// получаем массив всех времен
routeAllItems = document.querySelector('#time').querySelectorAll('option');

// по-умолчанию видны времена только для направления "из A в B"
for (let i = 6; i < (routeAllItems.length - 1); ++i) {
   routeAllItems[i].hidden = true;
}





//_________________ выбор направления_________________

const route = document.querySelector('#route');

function clickOnRoute() {

   //newTime.style.display = "none";

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
      if (newTime) {
         newTime.remove();
      }

      // для "из B в A" _______________________

   } else if (routeItem == "из B в A") {
      showAllItems(routeAllItems);

      for (let i = 0; i < 6; ++i) {
         routeAllItems[i].hidden = true;
      }
      if (newTime) {
         newTime.remove();
      }
      // для "из A в B и обратно в А" _________

   } else {
      showAllItems(routeAllItems);
      for (let i = 6; i < (routeAllItems.length - 1); ++i) {
         routeAllItems[i].hidden = true;
      }

      clon = document.querySelector('#time');
      newTime = clon.cloneNode(true);
      newTime.id = "newTime";
      time.after(newTime);

      newRouteAllItems = document.querySelector('#newTime').querySelectorAll('option');

      showAllItems(newRouteAllItems);
      for (let i = 0; i < 6; ++i) {
         newRouteAllItems[i].hidden = true;
      }

      priceOfTicket = 1200;
      timeRoute = "1 час и 40 минут";
   }

}

route.addEventListener("click", clickOnRoute);






// ______________отображение и выбор времени отправления______________________

const time = document.querySelector('#time');

function clickTime() {

   timeDepart1 = document.getElementById('time').value;
   //timeDepart1 = document.querySelector('#time').value;
   console.log(timeDepart1);
   hoursTimeDepart1 = +timeDepart1.slice(0, 2);
   minTimeDepart1 = +timeDepart1.slice(3, 5);

   timeDepart.setHours(hoursTimeDepart1);
   timeDepart.setMinutes(minTimeDepart1);
   timeDepartEnd = structuredClone(timeDepart);
   let temppp = timeDepart;
   timeDepartEnd.setMinutes(timeDepartEnd.getMinutes() + 50);

   if ((timeDepart - today) <= 0) {
      console.dir(document.querySelector('[timeDepart1]'));
      //document.querySelector('[timeDepart1]').setAttribute('disabled', 'disabled');
      //document.querySelector('#time').setAttribute('disabled', 'disabled');
      //console.log(document.querySelector('[timeDepart1]').style);
   }

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



//function clickChoise() {
//   total.innerHTML = "";
//   newTime.remove();

//}

//choiseParam.onclick = clickChoise;
