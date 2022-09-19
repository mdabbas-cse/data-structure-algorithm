const Student = {
  name: 'Md. Abbas Uddin',
  id: 1234,
  info: function () {
    return `Hi! i'm ${this.name}, my id ${this.id}`
  }
}
console.log(Student.name) // O(1)
console.log(Student.id) // O(1)
console.log(Student.info()) // O(1)
console.log(Student)