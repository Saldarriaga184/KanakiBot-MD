import { addExif } from '../lib/sticker.js'
let handler = async (m, { conn, text }) => {
if (!m.quoted) throw '╰⊱❗️⊱ *𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 | 𝚄𝚂𝙴𝙳 𝙸𝚃 𝚆𝚁𝙾𝙽𝙶* ⊱❗️⊱╮\n\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚀𝚄𝙴 𝙳𝙴𝚂𝙴𝙰 𝙰𝙶𝚁𝙴𝙶𝙰 𝚄𝙽 𝙿𝙰𝚀𝚄𝙴𝚃𝙴 𝚈 𝚄𝙽 𝙽𝙾𝙼𝙱𝚁𝙴\n𝚁𝙴𝚂𝙿𝙾𝙽𝙳 𝚃𝙾 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝚈𝙾𝚄 𝚆𝙰𝙽𝚃 𝙰𝙳𝙳 𝙰 𝙿𝙰𝙲𝙺𝙰𝙶𝙴 𝙰𝙽𝙳 𝙰 𝙽𝙰𝙼𝙴'
let stiker = false
try {
let [packname, ...author] = text.split('|')
author = (author || []).join('|')
let mime = m.quoted.mimetype || ''
if (!/webp/.test(mime)) throw '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼 𝘼𝙂𝙍𝙀𝙂𝘼 𝙐𝙉 𝙋𝘼𝙌𝙐𝙀𝙏𝙀 𝙔 𝙐𝙉 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝘼𝘿𝘿 𝘼 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝘼𝙉𝘿 𝘼 𝙉𝘼𝙈𝙀'
let img = await m.quoted.download()
if (!img) throw '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿𝙀 𝘼𝙇 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙌𝙐𝙀 𝘿𝙀𝙎𝙀𝘼 𝘼𝙂𝙍𝙀𝙂𝘼 𝙐𝙉 𝙋𝘼𝙌𝙐𝙀𝙏𝙀 𝙔 𝙐𝙉 𝙉𝙊𝙈𝘽𝙍𝙀\n𝙍𝙀𝙎𝙋𝙊𝙉𝘿 𝙏𝙊 𝙏𝙃𝙀 𝙎𝙏𝙄𝘾𝙆𝙀𝙍 𝙔𝙊𝙐 𝙒𝘼𝙉𝙏 𝘼𝘿𝘿 𝘼 𝙋𝘼𝘾𝙆𝘼𝙂𝙀 𝘼𝙉𝘿 𝘼 𝙉𝘼𝙈𝙀'
stiker = await addExif(img, packname || '', author || '')
} catch (e) {
console.error(e)
if (Buffer.isBuffer(e)) stiker = e
} finally {
if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '',m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: wm, body: `👾 𝗦𝘂𝗽𝗲𝗿 𝙆𝙖𝙣𝙖𝙠𝙞𝘽𝙤𝙩-𝙈𝘿 - 𝗪𝗵𝗮𝘁𝘀𝗔𝗽𝗽 `, mediaType: 2, sourceUrl: nn, thumbnail: imagen1}}}, { quoted: m })
else throw '╰⊱❗️⊱ *𝙇𝙊 𝙐𝙎𝙊́ 𝙈𝘼𝙇 | 𝙐𝙎𝙀𝘿 𝙄𝙏 𝙒𝙍𝙊𝙉𝙂* ⊱❗️⊱╮\n\n𝙀𝙍𝙍𝙊𝙍 𝘼𝙇𝙂𝙊 𝙎𝘼𝙇𝙄𝙊́ 𝙈𝘼𝙇, 𝙑𝙐𝙀𝙇𝙑𝘼 𝘼𝙇 𝙄𝙉𝙏𝙀𝙉𝙏𝘼 𝘿𝙀 𝙉𝙐𝙀𝙑𝙊\n𝙀𝙍𝙍𝙊𝙍 𝙎𝙊𝙈𝙀𝙏𝙃𝙄𝙉𝙂 𝙒𝙀𝙉𝙏 𝙒𝙍𝙊𝙉𝙂 𝙏𝙊 𝙏𝙍𝙔 𝘼𝙂𝘼𝙄𝙉'
}}
handler.help = ['wm <packname>|<author>']
handler.tags = ['sticker']
handler.command = /^robar|wm$/i
export default handler