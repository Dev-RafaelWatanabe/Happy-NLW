// reate map:
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// Create and add tile
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68]
})

let marker;

// Create and add marker
map.on('click', function(event) {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]') .value = lat;
    document.querySelector('[name=lng]') .value = lng; 


    // Remove icon
    marker && map.removeLayer(marker)

    // Add icon layer
    marker = L.marker([lat,lng], { icon })
    .addTo(map)
})


// Adicionar o campo de fotos
function addPhotoField() {
    // Pegar o container de fotos #images
    const container = document.querySelector('#images')
    // Pegar o container para duplicar .new-image
    const fieldsContainer = document.querySelectorAll('.new-upload')
    // Realizar o clone da última image adicionada
    const clonedFieldsContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    // Verificar se o campo está vazio, se sim, não adicionar ao container de imagens
    const input = clonedFieldsContainer.children[0]

    if(input.value == "") {
        return
    }
    
    // limpar o campo antes de adicionar ao container de imagens
    input.value = ""
    
    // Adicionar o clone ao container de #images
    container.appendChild(clonedFieldsContainer)
}

function deleteField(event) {
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if(fieldsContainer.length <= 1) {
        // Limpar o valor do campo
        span.parentNode.children[0].value = ""
        return
    }

    // Deletar o campo
    span.parentNode.remove();
}


// Troca do sim e não
function toggleSelect(event) {
    // Retirar a class .active (dos botões)
    document.querySelectorAll('.button-select button')
    .forEach(function(button) {
        button.classList.remove('active')
    })
    // Colocar a class .active nesse botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    // Atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends"]')
    
    input.value = button.dataset.value
}

function validate(event) {

    // Validar se lat e lng estão preenchidos - DESAFIO
    const needsLatAndLng = true;
    if(needsLatAndLng) {
        event.preventDefault()
        alert('Selecione um ponto no mapa')
    }

}