class Whatsapp {
    constructor(sender) {
        this.sender = sender;
    }
    sendMessage(message, receiver) {
        console.log(`this ${this.sender} send '${message}' to ${receiver}`)
    }
}
class Bussines extends Whatsapp {
    // here we override the constructor
    constructor(sender, company) {
        super(sender);
        this.company = company;
    }
    // and we can also override the methods below
    sendMessage(message, receiver) {
        console.log(`this ${this.sender} from ${this.company} send '${message}' to ${receiver}`)
    }
}
const bisnis = new Bussines("087730399573", "Inniklo");
const reguler = new Whatsapp("93749999");
console.log(reguler);
console.log(bisnis);
reguler.sendMessage("hai", "she");
// the sendMessage methods is overriding the superclass sendMessage methods.
bisnis.sendMessage("haloooo", "dia");