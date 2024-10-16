const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();
const emojiCountMap = {}; 

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('qr', qr => {
    qrcode.generate(qr, { small: true });
});

client.initialize();

client.on('message_create', message => {
    const targetContact = '1234567890@c.us'; // Replace with the actual WhatsApp ID of the person

    if (message.from === targetContact) {

        const currentCount = emojiCountMap[targetContact] || 1;


        const moonEmojis = '🌝'.repeat(currentCount);

        client.sendMessage(message.from, moonEmojis)
            .then(() => {
                console.log(`Sent ${currentCount} moon emoji(s) to ${message.from}`);
            });


        emojiCountMap[targetContact] = currentCount + 1;
    }
});


