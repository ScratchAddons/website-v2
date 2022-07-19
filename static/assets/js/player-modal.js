import YTPlayer from 'https://cdn.skypack.dev/pin/yt-player@v3.5.0-XrrFLAqWZVLSo66cMa8t/mode=imports,min/optimized/yt-player.js'

window.plyrmdl = window.plyrmdl || {}

$('.plyrmdl-thumb.plyrmdl-yt').mousedown(event => {

	const youtubeId = event.target.closest("[data-youtube-id]").dataset.youtubeId
	// console.log("click: " + youtubeId)
	window.plyrmdl[youtubeId] = window.plyrmdl[youtubeId] || {}

	if (!window.plyrmdl[youtubeId].player) window.plyrmdl[youtubeId].player = new YTPlayer(`.plyrmdl-modal[data-youtube-id="${youtubeId}"] .yt-iframe`, {
		width: "1280",
		height: "720",
		related: 0,
		host: "https://www.youtube-nocookie.com"
	})

	if (!window.plyrmdl[youtubeId].playerLoaded) {
		window.plyrmdl[youtubeId].player.load(youtubeId, true)
		window.plyrmdl[youtubeId].playerLoaded = true
	}
})

document.querySelectorAll(':not(body) .plyrmdl-modal').forEach(el => {
	document.body.appendChild(el.cloneNode(true))
	el.remove()
})

$('.plyrmdl-modal.plyrmdl-yt').on('shown.bs.modal', event => {
	const youtubeId = event.target.closest("[data-youtube-id]").dataset.youtubeId
	// console.log("show: " + youtubeId)
	window.plyrmdl[youtubeId].player.play()
})

$('.plyrmdl-modal.plyrmdl-yt').on('hide.bs.modal', event => {
	const youtubeId = event.target.closest("[data-youtube-id]").dataset.youtubeId
	// console.log("hide: " + youtubeId)
	window.plyrmdl[youtubeId].player.stop()
})