class Bul {
  constructor() {
    this.radius = 10
    this.x = Math.floor(Math.random() * (jewisco.width - (this.radius * 2))) + this.radius
    this.y = 0
    this.color = 'blue'
    this.speed = 5
    this.smerX = Math.floor(Math.random() * 100) > 50 ? 1 : -1
    this.smerY = 1
  }

  update(rjada) {
    this.x = this.x + (this.speed * this.smerX)
    this.y = this.y + (this.speed * this.smerY)
 
    // cyle horjeka zaso smer zmenic
    if (this.y < 0) {
      this.smerY = 1
      this.y = 0
    }

    if (this.x < 0) {
      this.smerX = 1
      this.x = 0
    }

    if (this.x > jewisco.width) {
      this.smerX = -1
      this.x = jewisco.width
    }

    if ((this.y > rjada.y) && (this.y <= (rjada.y + this.speed)) && (this.x > rjada.x) && (this.x < (rjada.x + rjada.width))) {
      // bul popadnyl

      // this.y = 0
      // bul dyrbi spesnisi hodwac
      this.smerY= -1
      dypki++
    } else {
      // nimo?
      if (this.y > jewisco.height) {
        this.y = 0
        this.smerY = 1
        
        this.x = Math.floor(Math.random() * (jewisco.width - (this.radius * 2))) + this.radius
        this.smerX = Math.floor(Math.random() * 100) > 50 ? 1 : -1

        dypki--
      }
    }
  }

  draw() {
    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, 360)
    ctx.fill()
  }
}
