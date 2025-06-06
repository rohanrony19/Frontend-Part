const container = document.querySelector(".container")
const paragraph = document.createElement('p')
paragraph.innerHTML = 'Pokemon Images'
// container.append(paragraph)

// for(let i=1;i<=100;i++){
const newImage = document.createElement('img')
newImage.src = 'https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/10.png'
container.appendChild(newImage)
// }