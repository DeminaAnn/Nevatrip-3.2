let routeAllItems; //все направления
let newRouteAllItems;
let currentRoute; // элемент time
let routeItem = "из A в B"; // по-умолч направление
let timeDepart; //время отправления
let timeDepartA; //время отправления из A
let timeDepartB; //время отправления из B
let timeRoute = "50 минут"; // по-умолч время в пути
let countOfTicket; //кол-во билетов
let totalPrice; //стоимость билетов
let priceOfTicket = 700; // по-умолч стоимость в 1 сторону
let clon;

// создаем div для вывода конечной информации
let div = document.createElement('div');
div.id = "total";
document.body.append(div);

let newTime;

//= document.createElement('select');
//newTime.id = "time2";
//newTime.className = "time2";
//document.choise.appendChild(newTime);

// получаем массив всех времен
routeAllItems = document.querySelector('#time').querySelectorAll('option');

// по-умолчанию видны времена только для направления "из A в B"
for (let i = 6; i < 13; ++i) {
   routeAllItems[i].hidden = true;
}

// выбор направления
function clickOnRoute() {

   //newTime.style.display = "none";

   function showAllItems(Items) {
      for (let i = 0; i < 13; ++i) { // посмотреть длинну здесь
         Items[i].hidden = false;
      }
   }

   routeItem = document.getElementById('route').value;

   // для "из A в B"
   if (routeItem == "из A в B") {
      showAllItems(routeAllItems);

      for (let i = 6; i < 13; ++i) {
         routeAllItems[i].hidden = true;
      }

      document.querySelector('#newTime') //найти все newTime и удалить
      if (newTime) {
         newTime.remove();
      }
      // для "из B в A"   
   } else if (routeItem == "из B в A") {
      showAllItems(routeAllItems);

      for (let i = 0; i < 6; ++i) {
         routeAllItems[i].hidden = true;
      }
      newTime.remove();
      // для "из A в B и обратно в А"
   } else {
      showAllItems(routeAllItems);
      for (let i = 6; i < 13; ++i) {
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

route.onclick = clickOnRoute;




// отображение и выбор времени отправления
function clickTime() {

   //routeAllItems = document.querySelectorAll('select option').value;
   //console.log(routeAllItems);


   timeDepartA = document.getElementById('time').value;


   //elem.style.display = "none"
}

time.onclick = clickTime;




function inTotal() {

   countOfTicket = document.getElementById('num').value;
   totalPrice = countOfTicket * priceOfTicket;

   // заполняем сформированный div текстом
   div.innerHTML = "Вы выбрали " + countOfTicket + " билета по маршруту " + routeItem + " стоимостью " + totalPrice + "р." + "<br>" +
      "Это путешествие займет у вас " + timeRoute + "<br>" +
      "Теплоход отправляется в " + ", а прибудет в ";


}

button.onclick = inTotal;

function clickChoise() {
   total.innerHTML = "";
   newTime.remove();

}

choiseParam.onclick = clickChoise;
