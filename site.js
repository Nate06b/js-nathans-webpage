
const firstP = document.querySelector('p')
console.log(firstP)
firstP.textContent = "Hello"

const nav = document.querySelector('nav')
nav.style.textDecoration = 'overline'

const contactLink = nav.querySelector('#contact')  /* old version getElementById('') or class*/
contactLink.style.bachgroundColor = '#3388ff'
contactLink.style.textDecoration = 'underline'

// grab all of an element ...
// const active = document.querySelectorAll('.active') /*if you do ('section .active') then that is saying it has to be inside a section and if there is */
// console.log(active)
// active.style.textDecoration = 'underline' 

document.body.style.backgroundColor = 'gray'
document.title = 'Nathan B\'s webpage'

document.addEventListener('click', (e) => {
    // e.target.parentElement.style.border = '2px solid red'
    const section = e.target.closest('section')
    section.style.border = '2px solid red'
})

