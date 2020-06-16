let colors = ['blue', 'yellow', 'red', 'orange','white'];

console.log(colors[0])
console.log(colors[2])

colors[4] = 'ultraviolet'

console.log(colors)

fourthColor= colors[3];
console.log(fourthColor)


colors.push('green');

console.log(colors)

colors.unshift('gold');


colors.pop();
colors.length


for (let color in colors){
  console.log(color, colors[color])
}

let lastColor = colors[colors.length-1]
lastColor

let myPenguin = {
  name:'Presley',
  origin: 'Love Birds',
  author:'Robert J. Sherman',

}

console.log("Hello, I'm a penguin and my name is " + myPenguin.name)

myPenguin.canFly= false;
myPenguin.chirp = function(){
  console.log('CHIRP CHIRP! Is this what penguins sound like?')
}

myPenguin.sayHello = function(){
  console.log("Hello, Im a penguin and my name is" + ' ' + this.name)
}

myPenguin.sayHello()

myPenguin.name = 'Penguin McPenguinFace';
myPenguin.sayHello()

myPenguin.fly =function(){
  if (this.canFly){
    console.log("I can fly!");
  }
  else{
    console.log('No flying for me!');
  }
}

myPenguin.fly()