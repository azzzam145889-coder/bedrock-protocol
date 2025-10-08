const bedrock = require('bedrock-protocol');

const client = bedrock.createClient({
  host: 'emerald.magmanode.com',  // ضع هنا IP السيرفر
  port: 33760,             // ضع هنا Port السيرفر (عادة 19132)
  username: 'berock_sectem',       // اسم البوت الذي تريد استخدامه
  offline: true            // إذا السيرفر بدون Xbox Live ضع true
});

client.on('text', (packet) => {
  // كل رسالة تظهر في السيرفر سيتم طباعتها هنا
  console.log(`${packet.source_name}: ${packet.message}`);
  
  // يمكن للبوت أن يرد على الرسائل
  if (packet.message.toLowerCase() === 'hi') {
    client.queue('text', {
      type: 'chat',
      needs_translation: false,
      source_name: client.username,
      xuid: '',
      platform_chat_id: '',
      filtered_message: '',
      message: 'fuck you pro'
    });
  }
});

client.on('connect', () => {
  console.log('Bot connected to server!😘✅');
});

client.on('disconnect', (reason) => {
  console.log('جرخ كوينم:', reason);
});

client.on('error', (err) => {
  console.log('fucking❌:', err);
});

