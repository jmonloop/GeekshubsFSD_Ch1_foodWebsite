
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
  
  
  
  //TUESDAY HOVERS
  window.onload = hoverImg('arrozalhorno', 'arrozalhornoimg');
  window.onload = hoverImg('paellaalbon', 'paellaalbonimg');
  window.onload = hoverImg('fideuasenyoret', 'fideuasenyoretimg');
  window.onload = hoverImg('macarronescarbonara', 'macarronescarbonaraimg');
  window.onload = hoverImg('alitas', 'alitasimg');
  window.onload = hoverImg('halibut', 'halibutimg');
  window.onload = hoverImg('ensalada', 'ensaladaimg');
  
  
  //WEDNESDAY HOVERS
  window.onload = hoverImg('paellaval', 'paellavalimg');
  window.onload = hoverImg('fideuaclasica', 'fideuaclasicaimg');
  window.onload = hoverImg('espiralespesto', 'espiralespestoimg');
  window.onload = hoverImg('guisopollo', 'guisopolloimg');
  window.onload = hoverImg('crema', 'cremaimg');
  window.onload = hoverImg('bacalao', 'bacalaoimg');
  window.onload = hoverImg('ensaladapinya', 'ensaladapinyaimg');
  
  //THURSDAY HOVERS
  window.onload = hoverImg('paellapollo', 'paellapolloimg');
  window.onload = hoverImg('fideuaboletus', 'fideuaboletusimg');
  window.onload = hoverImg('lasagna', 'lasagnaimg');
  window.onload = hoverImg('traserospollo', 'traserospolloimg');
  window.onload = hoverImg('espiralesverdura', 'espiralesverduraimg');
  window.onload = hoverImg('rape', 'rapeimg');
  window.onload = hoverImg('ensalada2', 'ensalada2img');
  
  
  //FRIDAY HOVERS
  window.onload = hoverImg('arrozalhorno2', 'arrozalhorno2img');
  window.onload = hoverImg('paellalbon2', 'paellalbon2img');
  window.onload = hoverImg('fideuaverdu', 'fideuaverduimg');
  window.onload = hoverImg('espaguetis', 'espaguetisimg');
  window.onload = hoverImg('limanda', 'limandaimg');
  window.onload = hoverImg('lomo', 'lomoimg');
  window.onload = hoverImg('ensalada3', 'ensalada3img');
  
  
  
  //SATURDAY HOVERS
  window.onload = hoverImg('paellaval2', 'paellaval2img');
  window.onload = hoverImg('paellaverdu', 'paellaverduimg');
  window.onload = hoverImg('fideuachipi', 'fideuachipiimg');
  window.onload = hoverImg('arrozsenyo', 'arrozsenyoimg');
  window.onload = hoverImg('caracolas', 'caracolasimg');
  window.onload = hoverImg('lasagna2', 'lasagna2img');
  window.onload = hoverImg('crepesalmon', 'crepesalmonimg');
  window.onload = hoverImg('polloteri', 'polloteriimg');
  window.onload = hoverImg('confitpato', 'confitpatoimg');
  window.onload = hoverImg('bombascarne', 'bombascarneimg');
  window.onload = hoverImg('ensaladilla', 'ensaladillaimg');
  window.onload = hoverImg('ensalada4', 'ensalada4img');








