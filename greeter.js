var Greeter = (function () {
    function Greeter(message) {
        this.message = message;
    }
    Greeter.prototype.greet = function () {
        return "greeting message  is " + this.message;
    };
    return Greeter;
}());
var greeter = new Greeter(" HAPPY LEARNING");
console.log(greeter.greet()); /// message  will  display
alert(greeter.greet());
