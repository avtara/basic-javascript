function Mail() {
  this.from = 'sender@gmail.com';
}

Mail.prototype.sendMessage = function(msg, to) {
  console.log(`You send: ${msg} to ${to} from ${this.from}`);
};

const mail1 = new Mail();
mail1.sendMessage('halo', 'receiver@gmail.com');

function MailWhitoutPrototype() {
  this.from = 'sender@gmail.com';
  this.sendMessage = function(msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
  }
};

const mail2 = new MailWhitoutPrototype();
mail2.sendMessage('halo', 'receiver@gmail.com');

// menggunakan prototype
const testMailProperties = new Mail();
testMailProperties.hasOwnProperty('sendMessage');
// hasilnya = false
 
// tanpa prototype
const testMailWOP = new MailWhitoutPrototype();
testMailWOP.hasOwnProperty('sendMessage');
// hasilnya = true

/* 
When we instantiate other objects, the object using the prototype does not copy the sendMessage attribute 
to each object. It's different when we don't use prototype, all attributes are copied to each object. 
Thus, the use of prototypes can save memory allocation used.
*/

class Mailing {
  constructor() {
    this.from = 'sender@gmail.com';
  }

  sendMessage(msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
  }
};

const mail3 = new Mailing();
mail3.sendMessage('hallo', 'receiver@dicoding.com');