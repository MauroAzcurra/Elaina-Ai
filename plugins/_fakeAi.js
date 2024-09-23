import fetch from 'node-fetch';
let handler = async (m, { conn, usedPrefix: _p }) => {
  try {
    let pp = await conn.profilePictureUrl(m.sender, 'image')

    const anu = {
      "key": {
        "fromMe": false,
        "participant": "0@s.whatsapp.net",
        "remoteJid": "0@s.whatsapp.net"
      },
      "message": {
        "groupInviteMessage": {
          "groupJid": "6285240750713-1610340626@g.us",
          "inviteCode": "mememteeeekkeke",
          "groupName": "P",
          "caption": "Hello, I'm Elaina Ai",
          "jpegThumbnail": await (await fetch(pp)).buffer()
        }
      }
    }
    
    conn.sendMessage(m.chat, { text: 'Hola soy Elaina Ai, ¿Cómo puedo ayudarte?' }, { quoted: anu })
  } catch (error) {
    conn.sendMessage(m.chat, 'Hola soy Elaina Ai, ¿Cómo puedo ayudarte?', 'conversation', { quoted: m })
  }
}

handler.customPrefix = /^(Bot)$/i
handler.command = new RegExp
export default handler