const loginform = document.getElementById('loginform');
const emailinput = document.getElementById('login_input_email');
const passwordinput = document.getElementById('login_input_password');

const pjs = document.querySelector('.ticktock');
const js = document.createElement('script');
js.id = 'tickcounter-sdk';
js.src = '//www.tickcounter.com/static/js/loader.js';
pjs.parentNode.insertBefore(js, pjs);


const budg = document.querySelector('.tickerbudg');
const counter = document.createElement('script');
counter.id = 'tickcounter-sdk';
counter.src = '//www.tickcounter.com/static/js/loader.js';
budg.parentNode.insertBefore(counter, budg);




loginform.addEventListener('submit', async (event) => {
  event.preventDefault();
  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify({
      email: emailinput.value,
      password: passwordinput.value,
    }),
  });
  if (response.status === 400) {
    passwordinput.type = 'text';
    passwordinput.value = 'Неправильный пароль';
    setTimeout(() => {
      passwordinput.type = 'password';
      passwordinput.value = '';
    }, 2000);
  } else if (response.status === 405) {
    emailinput.value = 'Такого аккаунта не существует!';
    setTimeout(() => {
      emailinput.value = '';
    }, 2000);
  }
  // else {
  // console.log(JSON.stringify(response.json));
  // window.location = `/profile/${response.json}`;
  // }
});


