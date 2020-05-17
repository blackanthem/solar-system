"use strict";
class CelestialBody {
    constructor(name, radius, distance, angle = 0, orbitalSpeed, color) {
        this.name = name;
        this.radius = radius;
        this.distance = distance;
        this.angle = angle;
        this.orbitalSpeed = orbitalSpeed;
        this.color = color;
    }
    draw(ctx) {
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
//# sourceMappingURL=object.js.map