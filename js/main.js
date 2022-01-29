
const bodyClick = document.querySelectorAll('.hideAll')

const martes = document.getElementById('martes')
const miercoles = document.getElementById('miercoles')
const jueves = document.getElementById('jueves')
const viernes = document.getElementById('viernes')
const sabado = document.getElementById('sabado')

const bsCollapse1 = new bootstrap.Collapse(martes)
bodyClick.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse1.hide() })
})
const bsCollapse2 = new bootstrap.Collapse(miercoles)
bodyClick.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse2.hide() })
})
const bsCollapse3 = new bootstrap.Collapse(jueves)
bodyClick.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse3.hide() })
})
const bsCollapse4 = new bootstrap.Collapse(viernes)
bodyClick.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse4.hide() })
})
const bsCollapse5 = new bootstrap.Collapse(sabado)
bodyClick.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse5.hide() })
})




// const collapseHide = (master, elmnt) => {
//     const masterClick = document.querySelectorAll(master)
//     const slaveHidden = document.getElementById(elmnt)
//     const bsCollapse = new bootstrap.Collapse(slaveHidden)
//     masterClick.forEach((l) => {
//         l.addEventListener('click', () => { bsCollapse.hide() })
//     })
// }