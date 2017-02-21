var Person = function(firstAndLast) {
    var first = firstAndLast.split(" ")[0];
    var last = firstAndLast.split(" ")[1];
    this.getFirstName = function() {
      return first;
    };
    this.getLastName = function() {
      return last;
    };
    this.getFullName = function() {
      return first + " " + last;
    };
    this.setFirstName = function(newFirst) {
      first = newFirst;
    };
    this.setLastName = function(newLast) {
      last = newLast;
    };
    this.setFullName = function(newName) {
      first = newName.split(" ")[0];
      last = newName.split(" ")[1];
    };
};

var bob = new Person('Bob Ross');
