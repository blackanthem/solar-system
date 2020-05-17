"use strict";
const canvas = document.getElementById("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const ctx = canvas.getContext("2d");
const sun = new CelestialBody("sun", 50, 0, 0, 0, "yellow");
const earth = new CelestialBody("earth", 20, 150, 0, 0.01, "#384160");
const moon = new CelestialBody("moon", 2, 30, 0, -0.1, "#8f6630");
const mercury = new CelestialBody("mercury", 8, 60, 0, -0.11, "#8f6630");
const venus = new CelestialBody("venus", 12, 90, -1, -0.012, "#99684a");
const mars = new CelestialBody("mars", 12, 200, 0.25, -0.02, "#ddc088");
const jupiter = new CelestialBody("jupiter", 45, 300, 1, 0.012, "#e6a668");
const m = new CelestialBody("m", 8, 60, 0, 0.11, "#8f6630");
const solarSystem = new Tree(sun);
solarSystem.add(earth, "sun");
solarSystem.add(mercury, "sun");
solarSystem.add(moon, "earth");
solarSystem.add(venus, "sun");
solarSystem.add(mars, "sun");
solarSystem.add(jupiter, "sun");
solarSystem.add(m, "jupiter");
function start() {
    requestAnimationFrame(start);
    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.save();
    ctx.translate(canvasWidth / 2, canvasHeight / 2);
    solarSystem.animate(ctx);
    ctx.restore();
}
start();
//# sourceMappingURL=index.js.map