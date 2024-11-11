"use strict";
var Snake = /** @class */ (function () {
    function Snake() {
        this.body = [{ x: 10, y: 10 }]; // Cobra começa com um segmento
        this.direction = { x: 1, y: 0 }; // Movendo para a direita
    }
    Snake.prototype.move = function () {
        var head = { x: this.body[0].x + this.direction.x, y: this.body[0].y + this.direction.y };
        this.body.unshift(head); // Adiciona a nova posição da cabeça
        this.body.pop(); // Remove o último segmento
    };
    Snake.prototype.changeDirection = function (newDirection) {
        this.direction = newDirection;
    };
    Snake.prototype.grow = function () {
        var tail = this.body[this.body.length - 1];
        this.body.push({ x: tail.x, y: tail.y }); // Adiciona um novo segmento à cobra
    };
    return Snake;
}());
var Food = /** @class */ (function () {
    function Food() {
        this.position = this.randomPosition();
    }
    Food.prototype.randomPosition = function () {
        var x = Math.floor(Math.random() * 20);
        var y = Math.floor(Math.random() * 20);
        return { x: x, y: y };
    };
    Food.prototype.draw = function (context) {
        context.fillStyle = "red";
        context.fillRect(this.position.x * 20, this.position.y * 20, 20, 20);
    };
    return Food;
}());
var Game = /** @class */ (function () {
    function Game(canvasId) {
        this.canvas = document.getElementById(canvasId);
        this.context = this.canvas.getContext("2d");
        this.snake = new Snake();
        this.food = new Food();
        this.gridSize = 20;
        document.addEventListener("keydown", this.handleKey.bind(this)); // Ligações de eventos de teclado
    }
    Game.prototype.start = function () {
        var _this = this;
        setInterval(function () {
            _this.update();
            _this.draw();
        }, 100);
    };
    Game.prototype.update = function () {
        this.snake.move();
        // Verifica colisão com comida
        if (this.snake.body[0].x === this.food.position.x && this.snake.body[0].y === this.food.position.y) {
            this.snake.grow();
            this.food = new Food(); // Nova comida aparece
        }
    };
    Game.prototype.draw = function () {
        var _this = this;
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height); // Limpa o canvas
        // Desenha a cobra
        this.snake.body.forEach(function (segment) {
            _this.context.fillStyle = "lime";
            _this.context.fillRect(segment.x * _this.gridSize, segment.y * _this.gridSize, _this.gridSize, _this.gridSize);
        });
        // Desenha a comida
        this.food.draw(this.context);
    };
    Game.prototype.handleKey = function (event) {
        switch (event.key) {
            case "ArrowUp":
                this.snake.changeDirection({ x: 0, y: -1 });
                break;
            case "ArrowDown":
                this.snake.changeDirection({ x: 0, y: 1 });
                break;
            case "ArrowLeft":
                this.snake.changeDirection({ x: -1, y: 0 });
                break;
            case "ArrowRight":
                this.snake.changeDirection({ x: 1, y: 0 });
                break;
        }
    };
    return Game;
}());
var game = new Game("gameCanvas");
game.start();
