const jewisco = document.getElementById('jewisco')
const ctx = jewisco.getContext('2d')
jewisco.width = window.innerWidth
jewisco.height = window.innerHeight
const dypkiLabel = document.getElementById('dypki')
let dypki = 0

let casKWospjetowanju = 0
let lastTime = 0

var keyMap = [];

// add key to active keys
window.addEventListener('keydown', (e)=>{
  console.log("Key down:" + e.code);  
  
  if(!keyMap.includes(e.code)){
        keyMap.push(e.code);
    }
})

// remove key from active keys
window.addEventListener('keyup', (e)=>{
  console.log("Key up:" + e.code);  

  if(keyMap.includes(e.code)){
        keyMap.splice(keyMap.indexOf(e.code), 1);
    }
})

function key(x){
    return (keyMap.includes(x));
}

function evaluatePressedKeys() {
  // arrow left
  if (key("ArrowLeft") && rjada.x > 0) {
    rjada.x -= 30
  } else if ( // arrow right
    key("ArrowRight") &&
    rjada.x < jewisco.width - rjada.width
  ) {
    rjada.x += 30
  } else if (key("ArrowUp") && rjada.y > 0) { // arrow up
    rjada.y -= 30
  } else if ( // arrow down
    key("ArrowDown") &&
    rjada.y < jewisco.height - rjada.height
  ) {
    rjada.y += 30
  } 

  if (key("KeyA") && rjada2.x > 0) { // A
    rjada2.x -= 30
  } else if ( // D
    key("KeyD") &&
    rjada2.x < jewisco.width - rjada2.width
  ) {
    rjada2.x += 30
  } else if (key("KeyW") && rjada2.y > 0) { // W
    rjada2.y -= 30
  } else if (
    key("KeyS") &&
    rjada2.y < jewisco.height - rjada2.height
  ) { // S
    rjada2.y += 30
  } 
}

window.addEventListener('mousemove', event => {
  rjada.x = event.x - rjada.width / 2
})

function animate(timestamp) {
  ctx.clearRect(0, 0, jewisco.width, jewisco.height)
  rjada.draw()
  rjada2.draw()
  bul.update(rjada)
  bul.draw()
  dypkiLabel.textContent = 'Dypki: ' + dypki

  let deltaCas = timestamp - lastTime
  lastTime = timestamp

  casKWospjetowanju = casKWospjetowanju + deltaCas

  if (casKWospjetowanju > 250) {
    evaluatePressedKeys()
    casKWospjetowanju = 0
  }

  requestAnimationFrame(animate)
}
const rjada = new Rjada()
const rjada2 = new Rjada()
const bul = new Bul()
animate(0)
