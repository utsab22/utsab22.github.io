String.prototype.filter = function (...bWords) {
  return this.split(" ")
    .filter((s) => !bWords.includes(s))
    .join(" ");
};

console.log("String filter removing banned word 'not': " + "This house is not nice!".filter("not"));

Array.prototype.bubbleSort = function () {
  for (let i = 0; i < this.length; i++) {
    for (let j = i + 1; j < this.length; j++) {
      if (this[i] > this[j]) {
        let tmp = this[i];
        this[i] = this[j];
        this[j] = tmp;
      }
    }
  }
  return this;
};

console.log("Array bubbleSort" + [6, 4, 0, 3, -2, 1].bubbleSort());

function Person() {}
Person.prototype.initialize = function (name, age) {
  this.name = name;
  this.age = age;
};
Person.prototype.describe = function () {
  return this.name + ", " + this.age + " years old.";
};

function Teacher() {}
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  return this.name + " is now teaching " + subject;
};
let teacher = new Teacher();
teacher.initialize("John", 25);

console.log(teacher.teach("Inheritance"));
