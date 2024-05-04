let canvas = document.getElementById("canvas");

canvas.height = window.innerHeight
canvas.width = window.innerWidth;
let c - canvas.getContext('2d')

function RainDrop(x_param, y_param, endY_param, speed_param, opacty_param) {
    this.x = x_param;
    this.y = y_param;
    this.endY = endY_param;
    this.opacty = opacty_param;
    
    this.draw = function () {
        c.beginPath();
        c.moveTo(this.x, this.y)
        c.lineTo(this.x,this.y - this.endY);
        c.lineWidth = 1;
        c.strokeStyle = `rgba(255,255,255, 1)`
        c.stroke();
    }
}

let rainDrop1 = (new RainDrop (400+ i * 10,800,880,10,0.5));
console.log(rainDrqopMass);


rainDrop1.draw();
rainDrqopMass.forEach(element => {
    
});