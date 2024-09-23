import axios from "axios"
const { generateWAMessageFromContent, prepareWAMessageMedia,  proto, generateWAMessageContent  } = (await import("@whiskeysockets/baileys")).default

let handler = async(m, { conn, usedPrefix, command, text }) => {
	
  if (!text) return m.reply(`• *Ejemplo:* ${usedPrefix + command} metamorfosis 8d`);
  
  async function createVideo(url) {
    const { videoMessage } = await generateWAMessageContent({
      video: {
        url
      }
    }, {
      upload: conn.waUploadToServer
    });
    return videoMessage
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  let push = [];
  let { data } = await axios.get(`https://widipe.com/tiktoksearch?text=${text}`);
  let res = data.result.data
  
  shuffleArray(res); // Array XD
  let ult = res.splice(0, 999); 
  let i = 1;
  
  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `*Titulo:* ${lucuy.title}\n*Autor:* ${lucuy.author.nickname}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: `👁️: ${formatViews(lucuy.play_count)}\n️❤️: ${formatViews(lucuy.digg_count)}\n️💬: ${formatViews(lucuy.comment_count)}\n➡️: ${formatViews(lucuy.share_count)}`
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: '', 
        hasMediaAttachment: true,
        videoMessage: await createVideo(lucuy.play)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [{
							"name": "cta_url",
							"buttonParamsJson": `{"display_text":"Channel WhatsApp","url":"https://whatsapp.com/channel/0029Vai2U3MAu3aRB0NYFT3h","merchant_url":"https://whatsapp.com/channel/0029Vai2U3MAu3aRB0NYFT3h"}`
						}]
      })
    });
  }
  
  const bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: `Resultados de *${text}*`
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: 'Tiktok Search By KenisawaDev',
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {quoted:m});
  
  await conn.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
}

handler.tags = ['search']
handler.help = ['tiktoksearch *<búsqueda>*']
handler.command = ['tiktoksearch', 'tiktoks']

export default handler

function formatViews(views) {
	let form = views.toString()
	let formatv
	if (form.length > 6) {
		formatv = (views / 1000000).toFixed(1) + 'M'
	} else if (form.length > 4) {
		formatv = (views / 1000).toFixed(2) + 'K'
	} else {
		formatv = form
	}
	
	return formatv
}