class CelestialBody {
  constructor(
    public name: string,
    private radius: number,
    private distance: number,
    private angle = 0,
    private orbitalSpeed: number,
    private color: string
  ) {}

  draw(ctx: CanvasRenderingContext2D) {
    ctx.rotate(this.angle);
    ctx.translate(this.distance, 0);
    ctx.beginPath();
    ctx.arc(0, 0, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  update() {
    this.angle += this.orbitalSpeed;
  }
}
