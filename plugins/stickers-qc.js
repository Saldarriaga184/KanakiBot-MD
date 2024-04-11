import { sticker } from '../lib/sticker.js'
import axios from 'axios'

let handler = async (m, {
    conn,
    args,
    usedPrefix,
    command
}) => {
let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "╰☘‼️⊱ *𝙻𝙾 𝚄𝚂𝙾 𝙼𝙰𝙻 | 𝚄𝚂𝙴𝙳 𝙸𝚃 𝚆𝚁𝙾𝙽𝙶* ⊱‼️⊱╮\n\n𝙰𝙶𝚁𝙴𝙶𝚄𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙿𝙰𝚁𝚀 𝙲𝚁𝙴𝙰𝚁 𝙴𝙻 𝚂𝚃𝙸𝙲𝙺𝙴𝚁\n\n𝙰𝙳𝙳 𝙰 𝚃𝙴𝚇𝚃 𝚃𝙾 𝙲𝚁𝙴𝙰𝚃𝙴 𝚃𝙷𝙴 𝚂𝚃𝙸𝙲𝙺𝙴𝚁 "
   if (!text) return m.reply('𝚈 𝙴𝙻 𝚃𝙴𝚇𝚃𝙾?')
   if (text.length > 30) return m.reply('𝙼𝙰𝚇𝙸𝙼𝙾 30 𝙿𝙰𝙻𝙰𝙱𝚁𝙰𝚂!')
    let pp = await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/a2ae6cbfa40f6eeea0cf1.jpg')

   const obj = {
      "type": "quote",
      "format": "png",
      "backgroundColor": "#000000",
      "width": 512,
      "height": 768,
      "scale": 2,
      "messages": [{
         "entities": [],
         "avatar": true,
         "from": {
            "id": 1,
            "name": m.name,
            "photo": {
               "url": pp
            }
         },
         "text": text,
         "replyMessage": {}
      }]
   }
   const json = await axios.post('https://bot.lyo.su/quote/generate', obj, {
      headers: {
         'Content-Type': 'application/json'
      }
   })
   const buffer = Buffer.from(json.data.result.image, 'base64')
   let stiker = await sticker(buffer, false, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'Quotly.webp', '', m)
}

handler.help = ['qc']
handler.tags = ['sticker']
handler.command = /^(qc)$/i

export default handler