// const body = document.body;

// const random = Math.floor(Math.random() * 4)

// body.style.backgroundImage = `url(/img/${random}.jpg)`
// body.style.backgroundSize = 'cover'
// body.style.height = '100vh'

const images = [
    "0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img")
bgImage.src = `img/${chosenImage}`

document.body.appendChild(bgImage)
bgImage.classList.add("bg-image")