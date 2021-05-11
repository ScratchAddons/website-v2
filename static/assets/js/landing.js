import YTPlayer from 'https://cdn.skypack.dev/yt-player'

let player, playerLoaded

$('#modal-presentation').on('hide.bs.modal', () => {
    player.stop()
})

$('#modal-presentation').on('shown.bs.modal', () => {
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

	player.play()
})
