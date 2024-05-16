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
handler.customPrefix = /animada|animado|contento|contenta|alegría|alegrarse|alegremonos|emocionado|emocionada|feliz/i 
handler.command = new RegExp
handler.exp = 50
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const s = [
'https://c.tenor.com/-8qgEEd80skAAAAi/chika.gif',
'https://c.tenor.com/GLpWclhFs28AAAAi/mine-funny.gif', 
'https://c.tenor.com/KyoAsIz_GH8AAAAi/heat-wave.gif',
'https://c.tenor.com/4cNykyUM0M0AAAAi/draxy-stickery.gif',
'https://c.tenor.com/-I1sYsJQ-XUAAAAi/vibe-dance.gif',  
'https://media4.giphy.com/media/5dQQUpPjaZQeQ/giphy.gif?cid=ecf05e47wz1ny77fqnp8gvps730g2edfumud5kz2pqe9wh2o&rid=giphy.gif&ct=g',
'https://c.tenor.com/U-XE486arkUAAAAi/chika-fujiwara-chika.gif',
'https://media3.giphy.com/media/3osxAKYM7Wx8sji9LY/giphy.gif?cid=ecf05e47db4pd3yaey7geps2nhso6myni75w6umq8ph297zo&rid=giphy.gif&ct=g',
'https://media1.giphy.com/media/5GoVLqeAOo6PK/giphy.gif?cid=ecf05e47ukjm4gay9dnm1qlb4za6tpgnsmkq2tbnob86z88c&rid=giphy.gif&ct=g',
'https://media4.giphy.com/media/q4sdF9tchap6E/giphy.gif?cid=ecf05e47270meko3jt3y05iv01ou7ffzktzm8e4i34sb0bpt&rid=giphy.gif&ct=g'
];  



