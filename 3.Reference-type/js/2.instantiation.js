class Player {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  introdution() {
    console.log(`Hello ${this.name}!, I'm a ${this.type}.`)
  }
}

class Wizard extends Player {
  constructor(name, type) {
    super(name, type)
  }

  play() {
    console.log(`Hi! I'm ${this.name}`)
  }
}

const wizard1 = new Wizard('Md Abbas Uddin', 'Software developer')
wizard1.introdution()
wizard1.play()
