class MailClass {
  #contact = []; // private variable for class only cant use in function
  constructor() {
    this.from = 'sender@gmail.com';
    this.yourOtherProperties = 'the values';
  }

  sendMessage(msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
    this.#contact.push(to); // save contact
  }

  static isValidEmail(email) {
    return typeof email === 'string';
  }
}

function Mail() {
  this.from = 'sender@gmail.com';
  this._contact = []; // Non official private variable 
  this.yourOtherProperties = 'the value';
}

Mail.prototype.sendMessage = function (msg, to) {
  console.log(`You send: ${msg} to ${to} from ${this.from}`);
  this._contact.push(to); // save contact
};

const mail1 = new Mail();
mail1.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
console.log(mail1.contact); //output: undefined

const mail2 = new MailClass();
mail2.sendMessage('hallo', 'penerima@dicoding.com', 'aku@gmail.com');
console.log(mail1.contact); //output: undefined
console.log(MailClass.isValidEmail('test@gmail.com')); // static method can access direct to class w/o instantiate

// cara 1
class MailUsingConstructor {
  constructor(author) {
      this.from = 'pengirim@dicoding.com';
      console.log('is instantiated', author);
  };
}

// cara 2
function MailUsingParameterAsConstructor(author) {
  this.from = author;
  console.log('is instantiated', author);
}

// How to use constructor
const mail1 = new MailUsingConstructor("emailku@dicoding.com");
