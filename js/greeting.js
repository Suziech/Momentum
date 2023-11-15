const loginForm = document.querySelector('#login-form')
const loginInput = document.querySelector('#login-form input')
const greeting = document.querySelector('#greeting')

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = 'username'

function onLoginSubmit(e) {
    e.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username)
}

function paintGreetings() {
    const username = localStorage.getItem(USERNAME_KEY)
    const today = new Date()
    let hours = today.getHours()
    if(hours > 0 && hours < 12) {
        greeting.innerText = `Good morning, ${username}`
    } else if (hours >= 12 && hours < 18) {
        greeting.innerText = `Good afternoon, ${username}`
    } else if(hours >= 18){
        greeting.innerText = `Good evening, ${username}`
    }

    greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME)
    loginForm.addEventListener('submit', onLoginSubmit)
} else {
    paintGreetings()
}