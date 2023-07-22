// Add your code here

{/* <li class="services__list-item">
<div class="services__check"></div>
<p class="services__name">Ореолы</p> 
<div class="services__price"> 490р.</div>
</li> */}

// type_service: price, combo

let cf = 0;
let first_cf = 0;

let endTotal = 0;

let sum_price = function () {
  let total = 0
  for (let i = 0; i < list_prices.length; i++) {
    if (list_prices[i].chk == true) {
      if (list_prices[i].type == 'price') {
        total += Math.round(list_prices[i].price * ((100 - cf - first_cf) / 100));
      }
      else {
        total += Math.round(list_prices[i].price * ((100 - cf) / 100));
      }
    }
  }
  return total
}

let set_discount = function(number) {
  if (number == 0) {return 50}
  if (number == 1) {return 30}
  if (number == 2) {return 10}
}

let visitChecks = document.querySelectorAll('.visit__check');
let visitItem = document.querySelectorAll('.visit-list__item')

for (let i = 0; i < visitItem.length; i++) {
  visitItem[i].addEventListener('click', function() {
    if (visitChecks[i].classList.contains('check-selected')) {
      visitChecks[i].classList.remove('check-selected');
      first_cf = 0;
    }
    else {
      for (let j = 0; j < 3; j++){
        visitChecks[j].classList.remove('check-selected');
      }
      visitChecks[i].classList.add('check-selected');
      first_cf = set_discount(i);
    }
    endTotal = sum_price();
    show_result();
  })
}

let makeElement = function (name, price, type_service) {
  let block = document.createElement('li');
  block.classList.add('services__list-item');

  if (type_service == 'combo') {
    block.classList.add('services__list-item--combo');
    
  }

  let divCheck = document.createElement('div');
  divCheck.classList.add('services__check');

  let pName = document.createElement('p');
  pName.classList.add('services__name');
  pName.textContent = name;
  let divPrice = document.createElement('div');
  if (type_service == 'price') {
    divPrice.classList.add('services__price');
  }
  if (type_service == 'combo'){
    divPrice.classList.add('services__price-combo');
  }
  divPrice.textContent = price + 'р.';

  block.append(divCheck);
  block.append(pName);
  block.append(divPrice);

  return block;
}

let list_prices = [{ name: "Над губой", price: 400, type: "price", chk: false},
                   { name: "Подбородок", price: 500, type: "price", chk: false}, 
                   { name: "Бакенбарды", price: 500, type: "price", chk: false},
                   { name: "Подмышки", price: 590, type: "price", chk: false},
                   { name: "Руки до/выше локтя", price: 890, type: "price", chk: false},
                   { name: "Руки полностью", price: 1290, type: "price", chk: false},
                   { name: "Ореолы", price: 490, type: "price", chk: false},
                   { name: "Живот", price: 890, type: "price", chk: false},
                   { name: "Бикини", price: 790, type: "price", chk: false},
                   { name: "Глубокое бикини", price: 1290, type: "price", chk: false},
                   { name: "Тотальное бикини", price: 1490, type: "price", chk: false},
                   { name: "Ягодицы", price: 990, type: "price", chk: false},
                   { name: "Поясница", price: 790, type: "price", chk: false},
                   { name: "Ноги до/выше колен", price: 1390, type: "price", chk: false},
                   { name: "Ноги полностью", price: 2490, type: "price", chk: false},
                   { name: "Пальцы ног", price: 290, type: "price", chk: false},
                   { name: "Лицо полностью", price: 1200, type: "combo", chk: false},
                   { name: "Бикини + подмышки", price: 1290, type: "combo", chk: false},
                   { name: "Тотальное бикини + подмышки", price: 1690, type: "combo", chk: false},
                   { name: "Глубокое бикини + подмышки + ноги до/выше колена", price: 2890, 
                   type: "combo", chk: false},
                   { name: "Глубокое бикини + подмышки + ноги полностью", price: 3690, type: 
                   "combo", chk: false},
                   { name: "Глубокое бикини + подмышки + ноги полностью + руки полностью", 
                   price: 4490, type: "combo", chk: false},
                   { name: "Всё тело", price: 6990, type: "combo", chk: false}
                  ]

let servicesList = document.querySelectorAll('.services__list');

for (let price of list_prices) {
  let e = makeElement(price.name, price.price, price.type) 
  if (price.type == 'price') {
    servicesList[0].appendChild(e);
  }
  else {
    servicesList[1].appendChild(e);
  }  
}


let first_coeff = 0.5;
let invitation_coeff = 0.3;
let checked = document.querySelectorAll('.services__list-item');
let checked_toogle = document.querySelectorAll('.services__check');
let onePrices = document.querySelectorAll('.services__price');
let comboPrices = document.querySelectorAll('.services__price-combo');
let prices = [...onePrices, ...comboPrices]
let resultWithout = document.querySelector('.result-without');
let result = document.querySelector('.result');
let total = 0;
let current_price;

let show_result = function() {
  resultWithout.textContent = total + 'р.';
  result.textContent = endTotal + 'р.';

}


for (let i = 0; i < checked.length; i++) {
  checked[i].addEventListener('click', function()  {
    if (checked_toogle[i].classList.contains('check-selected')) {
      checked_toogle[i].classList.remove('check-selected');
      current_price = prices[i];
      list_prices[i].chk = false;
      let end_position = current_price.textContent.length - 2
      current_price = current_price.textContent.slice(0, end_position);
      total -= Number(current_price);
      checked[i].classList.remove('services__list-item--opacity');
  }
    else {
      checked_toogle[i].classList.add('check-selected');
      current_price = prices[i];
      list_prices[i].chk = true;
      console.log(list_prices)
      let end_position = current_price.textContent.length - 2
      current_price = current_price.textContent.slice(0, end_position);
      total += Number(current_price);
      checked[i].classList.add('services__list-item--opacity');    
  } 
    console.log(prices);
    endTotal = sum_price();    
    show_result();
  });
}

// open form-entry

let save = document.querySelector("#save");
let wrapper = document.querySelector(".wrapper");
let formEntry = document.querySelector('.form-entry');
let btnGoToForm = document.querySelector('#go_to_form');
let sectionSummary = document.querySelector('.section-summary')
let close = document.querySelector('.close');

btnGoToForm.addEventListener('click', () => {
  formEntry.classList.toggle('none');
  wrapper.classList.toggle('none');
  save.classList.remove('none')
  btnGoToForm.classList.add('none')
  sectionSummary.style.height = 'auto';
  document.querySelector('body').style.backgroundSize = "auto";
})

close.addEventListener('click', () => {
  formEntry.classList.toggle('none');
  wrapper.classList.toggle('none');
  save.classList.add('none')
  btnGoToForm.classList.remove('none')
  sectionSummary.style.position = 'fixed';
  sectionSummary.style.height = '376px';
  document.querySelector('body').style.backgroundSize = "cover";
})

// tg bot
let tg = window.Telegram.WebApp;
      
tg.expand();
      
save.addEventListener('click', () => {
        
        let name = document.querySelector('#name').value;
        let phone = document.querySelector('#phone').value;
        let promo = document.querySelector('#promo').value;

        let data = {
          name: name,
          phone: phone,
          promo: promo
        }

        tg.sendData(JSON.stringify(data));

        tg.close();
        
});


let contains = function (arr, elem) {
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] == elem) {
          return true;
      }
  }
  return false;
}

let values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 26, 27, 28, 29, 30];


let coeff = document.getElementById('coeff');

coeff.addEventListener('input', function() {
    if (!contains(values, coeff.value)) {
      coeff.value = coeff.value.slice(0, coeff.value.length - 1);
    }

    cf = coeff.value;
    endTotal = sum_price();
    show_result();
});