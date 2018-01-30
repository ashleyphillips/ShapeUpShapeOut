let container = document.getElementById('container');
let circleButton = document.getElementById('circle-button');
let circleInput = document.getElementById('circle-input');
let triangleButton = document.getElementById('triangle-button');
let triangleInput = document.getElementById('triangle-input');
let squareButton = document.getElementById('square-button');
let squareInput = document.getElementById('square-input');
let rectangleButton = document.getElementById('rectangle-button');
let rectangleInput = document.getElementById('rectangle-input');
let alsoRectangleInput = document.getElementById('also-rectangle-input');

document.addEventListener('DOMContentLoaded', () => {

    class Shape {
        constructor (type) {
            this.type = type;
        }
        render () {
    
        }
    }





    class circleShape extends Shape {
        constructor(radius) {
            super('circle'); 
            this.radius = radius;
        }

        createCircle () {
            let circleDiv = document.createElement('div');
            circleDiv.className='circle';
            console.log(this.radius);
            circleDiv.style.height = `${this.radius * 2}px`;
            circleDiv.style.width = `${this.radius * 2}px`;
            container.appendChild(circleDiv);
        }
    }

    circleButton.addEventListener ('click', () => {
        let newCircle = new circleShape(circleInput.value);
        newCircle.createCircle();
    })






    class triangleShape extends Shape {
        constructor(height) {
            super('triangle'); 
            this.height = height;
        }
    
        createTriangle () {
            let triangleDiv = document.createElement('div');
            triangleDiv.className='triangle';
            triangleDiv.style.borderBottom = `${this.height}px`;
            triangleDiv.style.borderRight = `${this.height}px`;
            container.appendChild(triangleDiv);
        }
    }
    
    triangleButton.addEventListener ('click', () => {
        let newTriangle = new triangleShape(triangleInput.value);
        newTriangle.createTriangle();
    })




    class squareShape extends Shape {
        constructor (sideLength) {
            super('square'); 
            this.sideLength = sideLength;
        }

        createSquare () {
            let squareDiv = document.createElement('div');
            squareDiv.className='square';
            console.log(this.radius);
            squareDiv.style.height = `${this.sideLength * 2}px`;
            squareDiv.style.width = `${this.sideLength * 2}px`;
            container.appendChild(squareDiv);
        }
    }

    squareButton.addEventListener ('click', () => {
        let newSquare = new squareShape(squareInput.value);
        newSquare.createSquare();
    })




    class rectangleShape extends Shape {
        constructor (width, height) {
            super('rectangle'); 
            this.width = width;
            this.height = height;
        }

        createRectangle () {
            let rectangleDiv = document.createElement('div');
            rectangleDiv.className='rectangle';
            console.log(this.radius);
            rectangleDiv.style.height = `${this.height * 2}px`;
            rectangleDiv.style.width = `${this.width * 2}px`;
            container.appendChild(rectangleDiv);
        }
    }

    rectangleButton.addEventListener ('click', () => {
        let newRectangle = new rectangleShape(rectangleInput.value, alsoRectangleInput.value);
        newRectangle.createRectangle();
    })
})



// class triangleShape extends Shape {
//     constructor(height) {
//         super('triangle'); 
//         this.height = height;
//     }

//     createTriangle () {
//         let triangleDiv = document.createElement('div');
//         triangleDiv.className='triangle';
//         console.log(this.radius);
//         triangleDiv.style.height = `${this.height * 2}px`;
//         triangleDiv.style.width = `${this.height * 2}px`;
//         container.appendChild(triangleDiv);
//     }
// }

// triangleButton.addEventListener ('click', () => {
//     let newTriangle = new triangleShape(triangleInput.value);
//     newTriangle.createTriangle();
// })


// class triangleShape extends Shape {
//     constructor (height); {
//         super('triangle');
//     }
//     shapeDiv = document.createElement('div');
//     shapeDiv.className='triangle';


// class squareShape extends Shape {
//     constructor (sideLength) {

//     }
//     shapeDiv = document.createElement('div');
//     shapeDiv.className=''
// }
// class rectangleShape extends Shape {
//     constructor (width, height) {

//     }
//     shapeDiv = document.createElement('div');
//     shapeDiv.className=''
// }

