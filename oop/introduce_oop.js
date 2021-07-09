const mail = {
  from: 'sender@gmail.com',
  sendMessage: function(msg, to){
    console.log(`You send: ${msg} to ${to} from ${this.from}`);
  }
};

console.log(mail.from); // output: sender@gmail.com
mail.sendMessage('hehehe', 'receiver@gmail.com'); // output: You send: hehehe to receiver@gmail.com from sender@gmail.com

//WEE NEEEDDD OOP !