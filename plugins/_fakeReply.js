import fetch from 'node-fetch'

export async function before(m, { conn }) {
let img = await (await fetch(`https://i.pinimg.com/originals/79/69/bd/7969bd5faa4d1fa5193d0e30bb4e974c.jpg`)).buffer()

global.rcanal = {
 contextInfo: {
     	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363319490414132@newsletter",
      serverMessageId: 100,
      newsletterName: namechannel,
   }, 
   externalAdReply: {
    showAdAttribution: true, 
    title: botname, 
    body: textbot, 
    mediaUrl: null, 
    description: null, 
    previewType: "PHOTO", 
    thumbnailUrl: "https://i.pinimg.com/originals/79/69/bd/7969bd5faa4d1fa5193d0e30bb4e974c.jpg", 
    sourceUrl: canal, 
    mediaType: 1, 
    renderLargerThumbnail: false }, 
    }, 
    }


/* global.rcanal = {
    contextInfo: {
    	isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363319490414132@newsletter",
      serverMessageId: 100,
      newsletterName: namechannel,
    },
    },
  }*/

 global.adReply = {
	    contextInfo: { 
             forwardingScore: 9999, 
                 isForwarded: false, 
                    externalAdReply: {
				    showAdAttribution: true,
					title: botname,
					body: textbot,
					mediaUrl: null,
					description: null,
					previewType: "PHOTO",
					thumbnailUrl: "https://i.ibb.co/8mdHFVK/file.jpg",
                    thumbnail: img,
		           sourceUrl: canal,
		           mediaType: 1,
                   renderLargerThumbnail: true
				}
			}
		}
}