// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 39.291470972405804, lng: -0.4137752400217259 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  39.291470972405804, -0.4137752400217259





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







//HOVER ON TEXT SHOWS IMAGE
const hoverImg = (name, img) => {
  var name = document.getElementById(name);
  var image = document.getElementById(img);
  name.addEventListener("mouseenter", function( event ) {   
    image.style.display = "block";
  });

  name.addEventListener("mouseleave", function( event ) {   
    image.style.display = "none";
  });
}

window.onload = hoverImg('arrozalhorno', 'arrozalhornoimg')