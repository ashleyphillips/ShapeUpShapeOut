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
let targetShapeName;
let targetWidth;
let targetHeight;
let targetRadius;
let targetArea;
let targetPerimeter;
let shapeName = document.getElementById('shape-name');
let shapeWidth = document.getElementById('shape-width');
let shapeHeight = document.getElementById('shape-height');
let shapeRadius = document.getElementById('shape-radius');
let shapeArea = document.getElementById('shape-area');
let shapePerimeter = document.getElementById('shape-perimeter');


document.addEventListener('DOMContentLoaded', () => {

    let randomInRange = (min = 0, max = 450) =>{  
        return(Math.floor((Math.random() * (max - min) + 1) + min))
    };

    class Shape {
        constructor (type) {
            this.type = type;
        }
        describe () {
            shapeName.innerText = `Shape Name: ${targetShapeName}`;
            shapeWidth.innerText = `Width: ${targetWidth}`;
            shapeHeight.innerText = `Height: ${targetHeight}`;
            shapeRadius.innerText = `Radius: ${targetRadius}`;
            shapeArea.innerText = `Area: ${targetArea}`;
            shapePerimeter.innerText = `Perimeter: ${targetPerimeter}`;
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
            circleDiv.style.top = `${randomInRange()}px`;
            circleDiv.style.left = `${randomInRange()}px`;
            container.appendChild(circleDiv);
            circleDiv.addEventListener('click', () => {
                this.getCircleStats();
                this.describe();
            })
            circleDiv.addEventListener('dblclick', () => {
                circleDiv.remove();
            })
        }
        getCircleStats () {
            targetShapeName = this.type;
            targetWidth = this.radius * 2;
            targetHeight = this.radius * 2;
            targetRadius = this.radius;
            targetArea = Math.PI * this.radius**2;
            targetPerimeter = 2 * Math.PI * this.radius;
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
            triangleDiv.style.borderTop = `${this.height}px solid transparent`;
            triangleDiv.style.borderLeft = `${this.height}px solid yellow`;
            triangleDiv.style.top = `${randomInRange()}px`;
            triangleDiv.style.left = `${randomInRange()}px`;
            container.appendChild(triangleDiv);
            triangleDiv.addEventListener('click', () => {
                this.getTriangleStats();
                this.describe();
            })
            triangleDiv.addEventListener('dblclick', () => {
                triangleDiv.remove();
            })
        }
        getTriangleStats () {
            targetShapeName = this.type;
            targetWidth = this.height;
            targetHeight = this.height;
            targetRadius = 0.5*(2 - Math.sqrt(2)) * this.height;
            targetArea = 0.5 * this.height * this.height;
            targetPerimeter = 2 * this.height * Math.sqrt(2 * this.height * this.height);
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
            squareDiv.style.top = `${randomInRange()}px`;
            squareDiv.style.left = `${randomInRange()}px`;
            container.appendChild(squareDiv);
            squareDiv.addEventListener('click', () => {
                this.getSquareStats();
                this.describe();
            })
            squareDiv.addEventListener('dblclick', () => {
                squareDiv.remove();
            })
        }
        getSquareStats () {
            targetShapeName = this.type;
            targetWidth = this.sideLength;
            targetHeight = this.sideLength;
            targetRadius = Math.sqrt(this.sideLength**2 * 2) / 2;
            targetArea = this.sideLenght**2;
            targetPerimeter = this.sideLength * 4;
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
            rectangleDiv.style.top = `${randomInRange()}px`;
            rectangleDiv.style.left = `${randomInRange()}px`;
            container.appendChild(rectangleDiv);
            rectangleDiv.addEventListener('click', () => {
                this.getRectangleStats();
                this.describe();
            })
            rectangleDiv.addEventListener('dblclick', () => {
                rectangleDiv.remove();
            })
        }
        getRectangleStats () {
            targetShapeName = this.type;
            targetWidth = this.width;
            targetHeight = this.height;
            targetRadius = Math.sqrt(this.height**2 + this.width**2) / 2;
            targetArea = this.width * this.height;
            targetPerimeter = (this.width * 2) + (this.height * 2);
        }
    }

    rectangleButton.addEventListener ('click', () => {
        let newRectangle = new rectangleShape(rectangleInput.value, alsoRectangleInput.value);
        newRectangle.createRectangle();
    })
})