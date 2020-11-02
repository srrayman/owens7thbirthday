//GRAY COLOR SWITCHER

// step 1: select gray box
var grayBox = document.querySelector('.gray')

//step 2: listen for it to be clicked
grayBox.addEventListener('click', function () {

//step 3 once clicked, change background
var body = document.querySelector('body')
body.style.background = 'yellow'
body.style.backgroundImage = "url('poop.png')"
body.style.backgroundRepeat = "repeat"
var h1 = document.querySelector('h1')
h1.style.color = "black"
blackBox.style.border ="black 1px solid"

})

//WHITE COLOR SWITCHER

// step 1: select white box
var whiteBox = document.querySelector('.white')

//step 2: listen for it to be clicked
whiteBox.addEventListener('click', function () {

//step 3 once clicked, change background
var body = document.querySelector('body')
body.style.backgroundColor = "orange"
body.style.backgroundImage = "url('nugget-funnyface.png')"
body.style.backgroundRepeat = "repeat"
var h1 = document.querySelector('h1')
h1.style.color = "black"
})

//BLACK COLOR SWITCHER

// step 1: select black box
var blackBox = document.querySelector('.black')

//step 2: listen for it to be clicked
blackBox.addEventListener('click', function () {

//step 3 once clicked, change background
var body = document.querySelector('body')
body.style.backgroundColor = "purple"
body.style.backgroundImage = "url('cheaptablelamp.png')"
body.style.backgroundRepeat = "repeat"
var blackBox = document.querySelector('.black')


})


//GREEN COLOR SWITCHER

// step 1: select black box
var greenBox = document.querySelector('.green')

//step 2: listen for it to be clicked
greenBox.addEventListener('click', function () {

//step 3 once clicked, change background
var body = document.querySelector('body')
body.style.background = 'green'
body.style.backgroundImage = "url('tushy.png')"
body.style.backgroundRepeat = "repeat"
blackBox.style.border ="black 1px solid"
})

//BLUE COLOR SWITCHER

// step 1: select black box
var blueBox = document.querySelector('.blue')

//step 2: listen for it to be clicked
blueBox.addEventListener('click', function () {

//step 3 once clicked, change background
var body = document.querySelector('body')
body.style.background = 'blue'
body.style.backgroundImage = "url('balloons.png')"
body.style.backgroundRepeat = "repeat"
var textBox = document.querySelector (".words")
textBox.style.display = "none"
var textBox = document.querySelector (".words2")
textBox.style.display = "block"
})