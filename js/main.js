const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

//Obtener coordenadas y tamaño de dimensiones de la pantalla actual
const window_height = window.innerHeight;  //Ancho 
const window_width = window.innerWidth;    //Alto

//El canvas tiene las mismas dimensiones que la pantalla

canvas.height = window_height;
canvas.width = window_width;

//Añadir fondo
canvas.style.background = "#ABEBC6";

class Circle {
    constructor(x, y, radius, color, text, speed) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;

        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;

    }

    draw(context) {
        context.beginPath();
        context.strokeStyle = this.color;
        context.textAlign = "center";
        context.textBaseline = "middle";
        context.font = "20px Arial";
        context.lineWidth = 5;
        context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        context.stroke();
        context.closePath();
        context.fillText(this.text, this.posX, this.posY);

    }

    update(context) {

        //context.clearRect(0, 0, window_width, window_height);
        this.draw(context);

        //Si el circulo supera el margen derecho, entonces, se mueve a la izquierda
        if ((this.posX + this.radius) > window_width) {

            this.dx = -this.dx;
        }

        //Si el circulo supera el margen izquierdo, entonces, se mueve a la derecha
        if ((this.posX - this.radius) < 0) {

            this.dx = -this.dx;
        }

        //Si el circulo supera el margen ...
        if (((this.posY - this.radius) < 0)) {

            this.dy = -this.dy;
        }

        //Si el circulo supera el margen ...
        if ((this.posY + this.radius) > window_height) {

            this.dy = -this.dy;
        }

        this.posX += this.dx;
        this.posY += this.dy;
    }
}

let arryCircle = [];


/* Ponemos mientras este comentario para no eliminar el segmento del codigo pasado

 for (let i = 0; i < 10; i++) {

    let randomX = Math.random() * window_height;
    let randomY = Math.random() * window_width;
    let randomRadius = Math.floor(Math.random() * 100 + 10); //floor redondea hacia arriba o abajo en los decimales
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);


   let miCirculo = new Circle(randomX, randomY, randomRadius, randomColor, i +1 );

   //Agrega el objeto al array
   arryCircle.push(miCirculo);
   arryCircle[i].draw(ctx);


} */

// Creamos los circulos aleatorios, que se guardaran en el arreglo

for (let i = 0; i < 10; i++) {
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 10); 
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);

    let miCirculo = new Circle(randomX, randomY, randomRadius, randomColor, 'Tec'+i, 5);
    arryCircle.push(miCirculo);
    arryCircle[i].draw(ctx);
}

// Función para actualizar los circulos

let updateCircle = function() {
    requestAnimationFrame(updateCircle);
    ctx.clearRect(0, 0, window_width, window_height);
    arryCircle.forEach(function(miCirculo) {
        miCirculo .update(ctx);
    });
}

updateCircle();


//let miCirculo2 = new Circle(270, 270, 50, 'black', 'Pachuca');
//miCirculo2.draw(ctx); */







