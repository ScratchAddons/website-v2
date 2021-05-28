import YTPlayer from 'https://cdn.skypack.dev/pin/yt-player@v3.5.0-XrrFLAqWZVLSo66cMa8t/mode=imports,min/optimized/yt-player.js'

let player, playerLoaded

$('.yt-thumb').mousedown(() => {
	if (!player) player = new YTPlayer('.yt-iframe', {
        width: "1280",
		height: "720",
		related: 0,
		host: "https://www.youtube-nocookie.com"
    })

	if (!playerLoaded) {
		player.load("nQ4N9zlzj0M", true)
		playerLoaded = true
	}
})

$('#modal-presentation').on('shown.bs.modal', () => {
	player.play()
})

$('#modal-presentation').on('hide.bs.modal', () => {
    player.stop()
})
