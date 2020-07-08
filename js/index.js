// Your code goes here


let body = document.querySelector('body')

let p = document.querySelectorAll('.content-section p')

let a = document.querySelectorAll('a')

let title = document.querySelector('title')

let intro = document.querySelector('header.intro')

// 1
window.addEventListener('keyup', (e) => {
    if(e.keyCode == 80){
        let img = document.createElement('img')
        img.setAttribute('src', 'img/fun-bus.jpg')
        intro.append(img)
    }
    else if(e.keyCode == 68){
        let child = document.querySelectorAll('header.intro img')
        intro.removeChild(child[child.length - 1])
    }
})



let scale = 1
let imgs = document.querySelectorAll('img')

function zoom(event, el) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    scale = Math.min(Math.max(.125, scale), 4);
  
    el.style.transform = `scale(${scale})`;
  }
// 2
imgs[0].addEventListener('wheel', (e) => {
    zoom(e, imgs[0])
})
// 3
a.forEach((el) => {

    el.addEventListener('click', (e) => {
        e.preventDefault()
        body.style.color = 'green'
    })
})

// 4
window.addEventListener('load', () => {
    alert("Window has loaded")
})

// 5
body.addEventListener('dblclick', () => {
    body.style.color = "pink"
})
// 6
p.forEach((el) => {
    el.addEventListener('mouseover', () => {
        el.style.color = 'blue'
    })
})

// 7

body.addEventListener('keydown', (e) => {
    if(e.keyCode === 82){
        body.style.color = "black !important"
        body.style.backgroundColor = 'white'
    }
})

// 8
let scrollCounter = 0
window.addEventListener('scroll', () => {
    scrollCounter += 1
    title.innerText = `Scrollcount: ${scrollCounter}`
})


// 9

let check = true
body.addEventListener('keyup', (e) => {
    if(e.keyCode == 72 && check){
        body.style.color = "red"
        check = false
        return
    }
    else{
        check = true
        body.style.color = "black"
    }
})

// 10
imgs.forEach((el) => {
    el.addEventListener('mousedown', (e) => {
        imgs[0].setAttribute('src', "https://source.unsplash.com/random")
    })
})

// Propagation 

let Parent = document.querySelector('.content-pick')
let target = document.querySelector('.destination.target')


Parent.addEventListener('click', (e) => {
    Parent.style.color = 'green'
})

target.addEventListener('click', (e) => {
    e.stopPropagation()
    target.style.color = 'blue'
})

