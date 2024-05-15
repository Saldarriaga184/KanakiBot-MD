import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, command, usedPrefix}) => {
if (!text) return m.reply(`${lenguajeGB['smsAvisoMG']()} ${mid.smsMalused2}`);
try {
const anime = await client.searchAnime(text);
const result = anime.data[0];
const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
const AnimeInfo = `🌺 ${mid.smsYT1}
• ${result.title}
🍁᭢━━━━━━━━━᭥🍁᭢  
 ${mid.buscador2}
• ${result.episodes}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador3}
• ${result.source.toUpperCase()}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador4}
• ${result.aired.from}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador5}
• ${result.popularity}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador6}
• ${result.favorites}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.smsYT5}
• ${result.duration}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador7}
• ${result.rating}
🍁᭢━━━━━━━━━᭥🍁᭢ 
 ${mid.buscador8}
• ${result.trailer.url}
🍁᭢━━━━━━━━━᭥🍁᭢
 ${mid.smsYT4}
• ${result.url}`;
conn.sendButton(m.chat, AnimeInfo, null, result.images.jpg.image_url, [
['𝙈𝙚𝙣𝙪 𝘽𝙪𝙨𝙦𝙪𝙚𝙙𝙖𝙨 | 𝙎𝙚𝙖𝙧𝙘𝙝𝙚𝙨 🔎', '#buscarmenu'],
['𝙈𝙚𝙣𝙪 𝘾𝙤𝙢𝙥𝙡𝙚𝙩𝙤 | 𝙁𝙪𝙡𝙡 𝙈𝙚𝙣𝙪 ✨', '.allmenu'],
['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu']], null, [['𝙄𝙣𝙨𝙩𝙖𝙜𝙧𝙖𝙢', ig]], m)
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, fkontak, false, { contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: gt, body: ' 👾 𝗦𝘂𝗽𝗲𝗿 𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 ', previewType: 0, thumbnail: gataImg, sourceUrl: accountsgb }}})
conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, fkontak);
} catch (e) {
await conn.reply(m.chat, `${lenguajeGB['smsMalError3']()}#report ${lenguajeGB['smsMensError2']()} ${usedPrefix + command}\n\n${wm}`, fkontak, m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
}}
handler.command = /^(anime|animeinfo)$/i;
//handler.level = 2
//handler.register = true
export default handler;
