const { Client } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client();

const targetContact = '1234567890@c.us'; // Replace with the actual WhatsApp ID
let emojiCount = 1; 

client.on('qr', qr => {
    qrcode.generate(qr, { small: true }); 
});

client.on('ready', () => {
    console.log('Client is ready!');

   
    setInterval(async () => {
        try {
            
            const moonEmojis = '🌝'.repeat(emojiCount);
            

            await client.sendMessage(targetContact, moonEmojis);
            console.log(`Sent ${emojiCount} moon emoji(s) to ${targetContact}`);
            
            
            emojiCount++;
        } catch (error) {
            console.error('Error sending message:', error);
        }
    }, 15000); 
});

client.initialize();
