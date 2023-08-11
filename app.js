let button = document.getElementsByClassName('btn')[0]
// let colors = ['Red','Green','Blue']

// console.log(button)

button.addEventListener('click', () => {
    // let r = Math.floor(Math.random() * 256)
    // let g = Math.floor(Math.random() * 256)
    // let b = Math.floor(Math.random() * 256)
    // document.body.style.backgroundColor = colors[Math.floor(Math.random() *colors.length)]
    let res = colors()
    document.body.style.backgroundColor = res
    console.log(res)
})

function colors(){
    let r = Math.floor(Math.random() * 256)
    let g = Math.floor(Math.random() * 256)
    let b = Math.floor(Math.random() * 256)
    // document.body.style.backgroundColor = colors[Math.floor(Math.random() *colors.length)]
    let res = `rgba(${r}, ${g}, ${b})`
    return res
}

window.onload = function(){
    let color = colors()
    document.body.style.backgroundColor = color
    console.log(color)
}