class Rjada {
  constructor() {
    this.height = 10
    this.width = 200
    this.x = jewisco.width / 2 - this.width / 2
    this.y = jewisco.height - this.height
    this.color = 'blue'
  }

  update() {}

  draw() {
    ctx.fillStyle = this.color
    ctx.fillRect(this.x, this.y, this.width, this.height)
  }
}
