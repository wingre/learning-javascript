(function() {
    'use strict'
    paper.install(window);
    paper.setup(document.getElementById('main-canvas'));

    // Draw a circle
    // var c = Shape.Circle(200, 200, 50);
    // c.fillColor = 'green';
    // c.strokeColor = 'rgb(200,150,45)';

    // Draw a grid of circles
    // var c;
    // for (var x = 25; x < 400; x += 50) {
    //     for (var y = 25; y < 400; y += 50) {
    //         c = Shape.Circle(x, y, 20);
    //         c.fillColor = 'lightblue';
    //     }
    // }

    // User clicks to make a randomly sized circle
    // var tool = new Tool();
    // tool.onMouseDown = function(event) {
    //     var circleWidth = Math.floor(Math.random() * (17) + 3);
    //     console.log(circleWidth);
    //     var c = Shape.Circle(event.point.x, event.point.y, circleWidth);
    //     c.fillColor = 'pink';
    // }

    var c = Shape.Circle(200, 200, 80);
    c.fillColor = 'black';
    var text = new PointText(200, 200);
    text.justification = 'center';
    text.fillColor = 'white';
    text.fontSize = 20;
    text.content = 'Hello World';

    paper.view.draw();
}())