document.addEventListener('DOMContentLoaded', () => {
  const btn = document.querySelector('#magic-btn');

  btn.addEventListener('click', () => {

    const newBtn = document.createElement('button');
    newBtn.id = 'magic-btn-2';
    newBtn.textContent = 'Я изменю тебя';


    newBtn.style.backgroundColor = '#a78b71';
    newBtn.style.color = 'white';


    document.body.appendChild(newBtn);


    newBtn.addEventListener('click', () => {

      btn.style.backgroundColor = '#9c4a1a';
      btn.style.color = 'black';
    });
  });
});
