class Mail {
  constructor(author){
    this._contact = [];
    this._from = author;
  }
  sendMessage = function (msg, to) {
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
    this._contact.push(to);
  }
  showAllContact = function() {
    return this._contact;
  }
};

class Whatsapp extends Mail {
    constructor(username, isBussinessAccount, phone) {
        super(phone);
        this.username = username;
        this.isBussinessAccount = isBussinessAccount;
    }
 
    // Overriding method => Melakukan Override Total
    sendMessage(msg, to) {
        console.log('Send by WA');
    }

  myProfile() {
    return `my name ${this.username}, is ${this.isBussinessAccount ? 'Business' : 'Personal'}`;
  }
};

const wa1 = new Whatsapp('di', true, 089000999888);
wa1.sendMessage('halo', 089000999888);