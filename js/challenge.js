let count = 0
let likeObj ={}
let element = document.getElementById('counter')
let pause = document.getElementById('pause')
let minus = document.getElementById('minus')
let plus = document.getElementById('plus')
let heart = document.getElementById('heart')
let form = document.querySelector('form')
// let buttonStatus = pause.textContent
//reassigning buttonStatus only reassisngs the varible value but does not change the DOM element

const counter = function () {
    if(pause.textContent === ' pause ') {  
    element.textContent = count++}  
}

function toggle() {
    if(pause.textContent === ' pause ') {
        pause.textContent = ' resume '
        minus.setAttribute('disabled', '')
        plus.setAttribute('disabled', '')
        heart.setAttribute('disabled', '')
    } else { pause.textContent = ' pause '
    minus.removeAttribute('disabled', '')
    plus.removeAttribute('disabled', '')
    heart.removeAttribute('disabled', '')}
}

myInterval = setInterval(counter, 1000)

minus.addEventListener('click', () => {
    element.textContent = count--})

plus.addEventListener('click', () => {
    element.textContent = count++
})

pause.addEventListener('click', toggle)

heart.addEventListener('click', () =>{
    let li = document.createElement('li')   
    if(likeObj[count]){             //if object key exists, if it does increment key value by 1
        likeObj[count] += 1
     }else {likeObj[count] = 1}     //if not add key with a value of 1 to likeObj  

     let listClass = document.getElementById(count) // if id does not exist results to null
     if(listClass){ // checks to see if variable evalutes to true
        listClass.textContent= `${count} has been liked ${likeObj[count]} times`
     }else{ 
        li.textContent = `${count} has been liked ${likeObj[count]} times`
        li.setAttribute('id', count)
        document.querySelector('ul').appendChild(li)
     }
}
)

function buildList(listItem) {
    let p = document.createElement('p')
    p.textContent = `${listItem} `
    document.getElementById('list').appendChild(p)
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    buildList(e.target.commentInput.value)
    form.reset()
})











    



