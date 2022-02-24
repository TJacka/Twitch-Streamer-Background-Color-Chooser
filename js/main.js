document.getElementById('forest').onclick = showForest
document.getElementById('mountain').onclick = showMountain
document.getElementById('beach').onclick = showBeach


function showForest() {
  document.querySelector('body').style.backgroundImage = 'url(img/forest.jpg)'
  document.querySelector('body').style.color = 'white'
}

function showMountain() {
  document.querySelector('body').style.backgroundImage = 'url(img/mountain.jpg)'
  document.querySelector('body').style.color = 'yellow'
}

function showBeach() {
  document.querySelector('body').style.backgroundImage = 'url(img/beach.jpg)'
  document.querySelector('body').style.color = 'brown'
}
