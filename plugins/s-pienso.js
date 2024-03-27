import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
//if (!db.data.chats[m.chat].stickers && m.isGroup) throw `${ag}𝙇𝙊𝙎 𝘾𝙊𝙈𝘼𝙉𝘿𝙊𝙎 𝘿𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝙀𝙎𝙏𝘼𝙉 𝘿𝙀𝙎𝘼𝘾𝙏𝙄𝙑𝘼𝘿𝙊𝙎 𝙐𝙎𝙀 *#on stickers* 𝙋𝘼𝙍𝘼 𝘼𝘾𝙏𝙄𝙑𝘼𝙍\n\n𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍𝙎 𝘾𝙊𝙈𝙈𝘼𝙉𝘿𝙎 𝘼𝙍𝙀 𝘿𝙄𝙎𝘼𝘽𝙇𝙀𝘿 𝙐𝙎𝙀 *#on stickers* 𝙏𝙊 𝙀𝙉𝘼𝘽𝙇𝙀`
if (db.data.chats[m.chat].stickers) {
 
let nombre = '👾 𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿'
let nombre2 = '𝘿.𝙀.𝙎.𝙉-𝙊𝙁𝙁𝙄𝘾𝙄𝘼𝙇17'
 
let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)], nombre, nombre2)
await delay(3 * 3000)
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: gt, body: `👾 𝗦𝘂𝗽𝗲𝗿 𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽`, mediaType: 2, sourceUrl: accountsgb, thumbnail: gataImg }}}, { quoted: m })
}}
handler.customPrefix = /piensa|pensaré|pensó|🤔/i 
handler.command = new RegExp
handler.exp = 50
export default handler
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const s = [
'https://c.tenor.com/BBNrRQkKdcUAAAAi/anime.gif',
'https://c.tenor.com/OHMxfMcU4eQAAAAi/anime-girl.gif',  
'https://c.tenor.com/7nadUsiwZioAAAAd/satanichia-gabriel-dropout.gif',
'https://c.tenor.com/Gr6Z_6lBm2kAAAAd/satania-satanichia.gif',
'https://i.pinimg.com/originals/e4/f7/a2/e4f7a2ca99c568e64c1d41f2a61133eb.jpg',  
'https://i.pinimg.com/474x/b0/62/3f/b0623f46719f73be8b2d65357d8e30b2.jpg',
'https://i.pinimg.com/736x/e4/df/2d/e4df2d77375455726233c66882e5e0e7.jpg',
'https://i.pinimg.com/236x/2b/c2/fa/2bc2fa0191d01026d9797091d1ba5b2f.jpg' 
];  
