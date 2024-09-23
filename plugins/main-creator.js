let handler = async (m, { conn, usedPrefix, isOwner }) => {
let txt_owner = "> _*`Hola, Este es el numero de mi creadxr, cualquier falla o si quieres agregar el bot a tu grupo, puedes hablarle`*_\n\n `+54 9 381 645-7465`"
await conn.sendFile(m.chat, "https://f.uguu.se/KvZhfyZK.jpg", 'thumbnail.jpg', txt_owner, m, null, rcanal)
}
handler.help = ['owner']
handler.tags = ['main']
handler.command = ['owner', 'creator', 'creador', 'dueño'] 

export default handler