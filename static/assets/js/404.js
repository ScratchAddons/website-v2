import stringSimilarity from 'https://cdn.skypack.dev/pin/string-similarity@v4.0.4-qujqwzoYiszNdgSvQMRr/mode=imports,min/optimized/string-similarity.js';

plausible("404",{ props: { path: document.location.pathname } })

;(async () => {
	
	const sitemap = await (await fetch(window.pagePaths.sitemap).text())
	const pages = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map(item => item[1].replaceAll(window.pagePaths.baseUrl, "/"))
	const pagesi18n = [...sitemap.matchAll(/hreflang=\"(?!en).+?\" href=\"(.+?)\"/g)].map(item => item[1].replaceAll(window.pagePaths.baseUrl, "/"))

	let pathName = document.location.pathname

	if (pathName === "/404" || pathName === "/404.html") {
		document.querySelector("#smart-404 p").innerHTML = "No suggestions since you are looking for the 404 page."
		return
	}

	if (/^\/[a-z-]{2,4}/.test(pathName)) {
		let toCheck = pathName
		toCheck = toCheck.replace(/^\/[a-z-]{2,4}/, "")
		if (!toCheck.endsWith("/")) toCheck += "/"
		if (pages.indexOf(toCheck) + 1) {
			document.querySelector("#smart-404 p").innerHTML = `English page found. Redirecting to <a href="${pages[pages.indexOf(toCheck)]}">${pages[pages.indexOf(toCheck)]}</a>...`
			document.location.replace(pages[pages.indexOf(toCheck)])
		}
	}
	
	let { bestMatch } = stringSimilarity.findBestMatch(pathName, [...pages, ...pagesi18n]).bestMatch
	document.querySelector("#smart-404 p").innerHTML = `Did you mean <a href="${bestMatch}">${bestMatch}</a>?`
	
})()