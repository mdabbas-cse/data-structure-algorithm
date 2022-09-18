const Player = function (name, type) {
  this.name = name
  this.type = type
}
Player.prototype.introdution = function () {
  console.log(`Hello ${this.name}!, I'm a ${this.type}.`)
}

const wizard1 = new Player('Md. Abbas Uddin', 'Software developer')

wizard1.play = function () {
  console.log(`Hi! I'm ${this.name}`)
}

wizard1.play()