class CesarEncrypt {
    constructor(alphabet,a,b) {
        this.a = a;
        this.b = b;
        this.alphabet = alphabet.toLowerCase();
    }

    encrypt(message) {
        let encrypted = '';
        for(let i = 0; i<message.length;i++) {
            let encryptChar = (this.a * this.alphabet.indexOf(message[i].toLowerCase()) + this.b) % this.alphabet.length;
            encrypted += this.alphabet[encryptChar];
        }
        return encrypted;
    }
}

let alphabet = 'abcdefghijklmnopqrstuvwxyzабвгдеёжзийклмнопрстуфхцчшщъыьэюя';

let cesarEncrypt  = new CesarEncrypt(alphabet,5,11);
let message = 'Attack at dawn';
console.log('Сообщение: ' + message);
console.log("Зашифрованное: " + cesarEncrypt.encrypt(message));