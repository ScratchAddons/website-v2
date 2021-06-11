let smart404Status = html => {
	if (document.querySelector("#smart-404 p")) document.querySelector("#smart-404 p").innerHTML = html
	else $(() => {
		document.querySelector("#smart-404 p").innerHTML = html
	})
}

;(async () => {
	
	const sitemap = await (await fetch(window.pagePaths.sitemap)).text()
	const pages = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map(item => item[1].replaceAll(window.pagePaths.baseUrl, "/"))
	const pagesi18n = [...sitemap.matchAll(/hreflang=\"(?!en).+?\" href=\"(.+?)\"/g)].map(item => item[1].replaceAll(window.pagePaths.baseUrl, "/"))

	let pathName = document.location.pathname

	if (pathName === "/404" || pathName === "/404.html") {
		smart404Status("No suggestions since you are looking for the 404 page.")
		return
	}

	if (/^\/[a-z]{2}(-[a-z]{2})?(?!\w)/.test(pathName)) {
		let toCheck = pathName
		toCheck = toCheck.replace(/^\/[a-z-]{2,4}/, "")
		if (!toCheck.endsWith("/")) toCheck += "/"
		if (pages.indexOf(toCheck) + 1) {
			smart404Status(`English page found. Redirecting to <a href="${pages[pages.indexOf(toCheck)]}">${pages[pages.indexOf(toCheck)]}</a>...`)
			document.location.replace(pages[pages.indexOf(toCheck)])
			return
		}
	}
	
	let { bestMatch } = stringSimilarity.findBestMatch(pathName, [...pages, ...pagesi18n]).bestMatch
	smart404Status(document.querySelector("#smart-404 p").innerHTML = `Did you mean <a href="${bestMatch.target}">${bestMatch.target}</a>?`)
	
})()