import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen1
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
let str = `╭─────────────◆
┃✯༄●⃝𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙐𝙡𝙩𝙧𝙖
┃✯-𝗛ᴏʟᴀ,➟${taguser}
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯│▢ᴏᴡɴᴇʀ:D.E.S.N_OFFICIAL17 
┃✯│▢ғᴇᴄʜᴀ:➟${date}
┃✯│▢ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
┃✯╰▢ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
╰━━━━━━━━━━━──⊷
ꨄ︎-----  -----  -----  -----  -----ꨄ︎
╭─────────────◆
┃✯-👥𝐆𝐑𝐔𝐏𝐎🤴-⦿
┃✯🍁᭢━━━━━━━━━᭥🍁᭢
┃✯╭──────────◆
┃✯│༺💥༄●⃝𝙈𝙪𝙡𝙩𝙞𝙫𝙚𝙧𝙨𝙤 𝘽𝙤𝙩👾✨𝙎𝙤𝙥𝙤𝙧𝙩𝙚💥༻
┃✯│https://chat.whatsapp.com/DO5kkH1CMDwGkeiI0CCs13
┃✯│༄●⃝𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿✨👾
┃✯│https://chat.whatsapp.com/GpuqinGFZW29nmdRgghz2C
┃✯│✞ঔৣ𝙏𝙍𝘼𝙋 𝘼𝙍𝙂𝙀𝙉𝙏𝙄𝙉𝙊𝙎ঔৣ✞🥀🇦🇷
┃✯│https://chat.whatsapp.com/EQKEReB0RVl3wvkq7HkpqT
┃✯│✨𝘾.𝙍.𝙊/𝙈𝘿𝘽🦇✞🥀
┃✯│https://chat.whatsapp.com/JCyjejaZRMcEehHY5MhgZh
┃✯│✨𝙏𝙍𝘼𝙋 𝘿𝙐𝙆𝙄 𝙎𝙎𝙅🇦🇷
┃✯│https://chat.whatsapp.com/HHPofHadzZz5rCBiNerAcP
┃✯│☘𝚅𝙸𝚁𝚃𝚄𝙰𝙻𝙴𝚂😻🌹
┃✯│https://chat.whatsapp.com/I6TFnp58CIDE7bKUS3UPBM
┃✯│
┃✯│
┃✯│𝙆𝘼𝙉𝘼𝙆𝙄𝘽𝙊𝙏/𝘼𝘾𝙏𝙐𝘼𝙇𝙄𝙕𝘼𝘾𝙄𝙊𝙉𝙀𝙎 👾💫
┃✯│https://chat.whatsapp.com/KnmflygkQdKBPPfiFMmkIb
┃✯│𝙋á𝙜𝙞𝙣𝙖 𝙙𝙚 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 
┃✯│https://www.facebook.com/groups/987464505464904/?ref=share
┃✯│𝚌𝚊𝚗𝚊𝚕 𝚍𝚎 𝚈𝚘𝚞𝚃𝚞𝚋𝚎
┃✯│https://www.youtube.com/@d.e.s.n_offcial17
╰━━━━━━━━━━━──⊷
ᴏᴡɴᴇʀ:ᴏғᴄ➟D.E.S.N_OFFICIAL17 
ɴᴜᴍᴇʀᴏ:Wa.me/593968711217`.trim()
if (m.isGroup) {
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: m })    
} else {    
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(grupos|Grupos|GRUPOS|grùpos)$/i
handler.exp = 50
handler.fail = null
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}