let handler = async (m, { conn, args, usedPrefix, command }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/grupos.jpg'  
let isClose = { // Switch Case Like :v
'open': 'not_announcement',
'close': 'announcement',
'abierto': 'not_announcement',
'cerrado': 'announcement',
'abrir': 'not_announcement',
'cerrar': 'announcement',
}[(args[0] || '')]
if (isClose === undefined)
throw `${lenguajeGB['smsAvisoMG']()}*╭━[ ${wm} ]━⬣*
*┃✯│⿴⃟ٍࣽ➤ ${usedPrefix + command} abrir*
*┃✯│⿴⃟ٍࣽ➤ ${usedPrefix + command} cerrar*
*╰━━━━━[ 𓃠 ${vs} ]━━━━━⬣*
`.trim()
await conn.groupSettingUpdate(m.chat, isClose)
  
if (isClose === 'not_announcement'){
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup}`)
}
  
if (isClose === 'announcement'){
m.reply(`${lenguajeGB['smsAvisoEG']()}${mid.smsGrup}`)
}}
handler.help = ['group open / close', 'grupo abrir / cerrar']
handler.tags = ['group']
handler.command = /^(group|grupo)$/i
handler.admin = true
handler.botAdmin = true
handler.exp = 200
export default handler


//conn.sendButton(m.chat, `${lenguajeGB['smsAvisoEG']()}𝙔𝘼 𝙋𝙐𝙀𝘿𝙀𝙉 𝙀𝙎𝘾𝙍𝙄𝘽𝙄𝙍 𝙏𝙊𝘿𝙊𝙎 𝙀𝙉 𝙀𝙎𝙏𝙀 𝙂𝙍𝙐𝙋𝙊!!`, `𝙂𝙍𝙐𝙋𝙊 𝘼𝘽𝙄𝙀𝙍𝙏𝙊\n${wm}`, pp, [['𝘾𝙪𝙚𝙣𝙩𝙖𝙨 𝙊𝙛𝙞𝙘𝙞𝙖𝙡𝙚𝙨 | 𝘼𝙘𝙘𝙤𝙪𝙣𝙩𝙨 ✅', `.cuentasgb`], ['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', `/menu`]], m)