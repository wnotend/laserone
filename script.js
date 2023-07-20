
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
  }
    else {
      checked_toogle[i].classList.add('check-selected');
      current_price = prices[i];
      let end_position = current_price.textContent.length - 2
      current_price = current_price.textContent.slice(0, end_position);
      total += Number(current_price);
      
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
})

close.addEventListener('click', () => {
  formEntry.classList.toggle('none');
  wrapper.classList.toggle('none');
  save.classList.add('none')
  btnGoToForm.classList.remove('none')
});


let promo = document.querySelector('#promo');

save.addEventListener ('click', () => {
  alert(promo.value)
});

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
