// Add your code here

{/* <li class="services__list-item">
<div class="services__check"></div>
<p class="services__name">Ореолы</p> 
<div class="services__price"> 490р.</div>
</li> */}

let makeElement = function (name, price) {
  let block = document.createElement('li');
  block.classList.add('services__list-item');

  let divCheck = document.createElement('div');
  divCheck.classList.add('services__check');

  let pName = document.createElement('p');
  pName.classList.add('services__name');
  pName.textContent = name;

  let divPrice = document.createElement('div');
  divPrice.classList.add('services__price');
  divPrice.textContent = price + 'р.';

  block.append(divCheck);
  block.append(pName);
  block.append(divPrice);

  return block;
}

let list_prices = [{ name: "Над губой", price: 400},
                   { name: "Подбородок", price: 500}, 
                   { name: "Бакенбарды", price: 500},
                   { name: "Лицо полностью", price: 1200},
                   { name: "Подмышки", price: 590},
                   { name: "Руки до/выше локтя", price: 890},
                   { name: "Руки полностью", price: 1290},
                   { name: "Ореолы", price: 490},
                   { name: "Живот", price: 890},
                   { name: "Бикини", price: 790},
                   { name: "Глубокое бикини", price: 1290},
                   { name: "Тотальное бикини", price: 1490},
                   { name: "Ягодицы", price: 990},
                   { name: "Поясница", price: 790},
                   { name: "Ноги до/выше колен", price: 1390},
                   { name: "Ноги полностью", price: 2490},
                   { name: "Пальцы ног", price: 290}]


let servicesList = document.querySelector('.services__list');

for (let price of list_prices) {
  let e = makeElement(price.name, price.price) 
  servicesList.appendChild(e);

}

let coeff = 0.5;
let checked = document.querySelectorAll('.services__list-item');
let checked_toogle = document.querySelectorAll('.services__check');
let prices = document.querySelectorAll('.services__price');
let resultWithout = document.querySelector('.result-without');
let result = document.querySelector('.result');
let total = 0;
let current_price;
let endTotal = 0;

let show_result = function() {
  resultWithout.textContent = total + 'р.';
  result.textContent = endTotal + 'р.';

}

for (let i = 0; i < checked.length; i++) {
  checked[i].addEventListener('click', function()  {
    if (checked_toogle[i].classList.contains('check-selected')) {
      checked_toogle[i].classList.remove('check-selected');
      current_price = prices[i];
      let end_position = current_price.textContent.length - 2
      current_price = current_price.textContent.slice(0, end_position);
      total -= Number(current_price);
      checked[i].classList.remove('services__list-item--opacity');
  }
    else {
      checked_toogle[i].classList.add('check-selected');
      current_price = prices[i];
      let end_position = current_price.textContent.length - 2
      current_price = current_price.textContent.slice(0, end_position);
      total += Number(current_price);
      checked[i].classList.add('services__list-item--opacity');
      
    }
  
    endTotal = total * coeff;
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
