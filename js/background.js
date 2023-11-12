const body = document.body;

const random = Math.floor(Math.random() * 4)

body.style.backgroundImage = `url(/img/${random}.jpg)`
body.style.backgroundSize = 'cover'
body.style.height = '100vh'
