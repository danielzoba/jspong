const jewisco = document.getElementById('jewisco')
const ctx = jewisco.getContext('2d')
jewisco.width = window.innerWidth
jewisco.height = window.innerHeight
const dypkiLabel = document.getElementById('dypki')
let dypki = 0

window.addEventListener('keydown', function (event) {
  console.log('keydown ' + event.code)
  if (event.code == 'ArrowLeft' && rjada.x > 0) {
    rjada.x -= 30
  } else if (
    event.code == 'ArrowRight' &&
    rjada.x < jewisco.width - rjada.width
  ) {
    rjada.x += 30
  } else if (event.code == 'ArrowUp' && rjada.y > 0) {
    rjada.y -= 30
  } else if (
    event.code == 'ArrowDown' &&
    rjada.y < jewisco.height - rjada.height
  ) {
    rjada.y += 30
  } else if (event.code == 'KeyB') dypki += 19
})

window.addEventListener('mousemove', event => {
  rjada.x = event.x - rjada.width / 2
})

function animate(timestamp) {
  ctx.clearRect(0, 0, jewisco.width, jewisco.height)
  rjada.draw()
  bul.update(rjada)
  bul.draw()
  dypkiLabel.textContent = 'Dypki: ' + dypki
  requestAnimationFrame(animate)
}
const rjada = new Rjada()
const bul = new Bul()
animate(0)
