class  Greeter{
    message:string;
    constructor(message:string){
        this.message=message;
    }
   greet(){

        return `greeting message  is ` +this.message ;
    }
}
let greeter =  new Greeter(" HAPPY LEARNING");
console.log(greeter.greet());/// message  will  display
alert( greeter.greet());