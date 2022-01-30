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




  const showModal= (elmnt, src, p) => {
    console.log(elmnt, src);
    let myModal = document.getElementById(elmnt);
    let modal = bootstrap.Modal.getOrCreateInstance(myModal)
    let img = document.getElementById('modalImg');
    let text = document.getElementById('modalText')
    img.src=src;
    text.textContent=p;
    modal.show()
}






