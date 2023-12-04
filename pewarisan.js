// inheritance?
// alih-alih membuat membuat 2 class yang berbeda-beda, disini kita bisa membuat superclass yang bisa diwariskan ke subclass

// superclass
class Message {
    constructor(sender) {
        this.sender = sender;
    }
    sendMessage(message, receiver) {
        console.log(`sending message '${message}' to ${receiver} from ${this.sender}`);
    }
    // sendMessage disini bisa kita gunakan di subclass, dengan cara extends class Message
}
// subclass
class Whatsapp extends Message {
    broadcast(message, receivers) {
        for (const receiver of receivers){
            this.sendMessage(message, receiver)
        }
    }
}
// subclass
class Email extends Message {
    delayed(message, receiver, delay) {
        setTimeout(() => {
            this.sendMessage(message, receiver);
        }, delay);
    }
}
const wa = new Whatsapp("087730388573");
wa.sendMessage("halo", "amelia");
wa.broadcast("halo", ["amelia", "andani", "bidadari surga"]);

const email = new Email("ardian@gmail.com");
email.sendMessage("halo", "amelia");
email.delayed("halo", "amelia", 3000);
// and this is how to check the object is the instance of some class by using operand1 instanceof operand2
// operand1 = object, operand2 = class
console.log(wa instanceof Whatsapp);
console.log(wa instanceof Email);