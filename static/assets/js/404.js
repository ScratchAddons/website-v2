let smart404Status = html => {
	if (document.querySelector("#smart-404 p")) document.querySelector("#smart-404 p").innerHTML = html
	else $(() => {
		document.querySelector("#smart-404 p").innerHTML = html
	})
}

const regex = {
	langFromPath: /^\/([a-z0-9]{2,3}(?:-[a-z0-9]{2,10})*)(?=\/)/
}

const getLanguageDisplayName = languageCode => {
	try {
		let intlObjEn = new Intl.DisplayNames(["en"], {type: 'language'})
		return intlObjEn.of(languageCode)
	} catch (e) {
		if (e instanceof RangeError) return languageCode
		else throw e
	}
}

const redirectLanguages = {
	"pt": "pt-br",
	"zh": "zh-tw"
}

;(async () => {

	let pathName = document.location.pathname

	if (pathName === "/404" || pathName === "/404.html") {
		smart404Status("No suggestions since you are looking for the 404 page.")
		return
		
	}

	try {

		const sitemap = await (await fetch(window.pagePaths.sitemap)).text()
		const pages = {}
		pages.en = [...sitemap.matchAll(/<loc>(.+?)<\/loc>/g)].map(item => item[1].replaceAll(window.pagePaths.baseUrl, "/"))
		;[...sitemap.matchAll(/hreflang=\"(?!en).+?\"\s+href=\"(.+?)\"/g)].forEach(item => {
			let path = item[1].replaceAll(window.pagePaths.baseUrl, "/")
			// console.log(regex.langFromPath.exec(path), path)
			const langCode = regex.langFromPath.exec(path)[1]
			if (!pages[langCode]) pages[langCode] = []
 			pages[langCode].push(path)
		})

		const interLanguageRedirect = langCode => {
			let toCheck = pathName
			toCheck = toCheck.replace(regex.langFromPath, "")
			if (!toCheck.endsWith("/")) toCheck += "/"
			if (!pages[langCode]) return [false, false]
			// console.log(toCheck)
			let index = pages[langCode].map(path => path.replace(regex.langFromPath, "")).indexOf(toCheck)
			if (index + 1) {
				return [pages[langCode][index], getLanguageDisplayName(langCode)]
			}
			return [false, false]
		}

		if (regex.langFromPath.test(pathName)) {
			const langCode = regex.langFromPath.exec(pathName)[1]
			let redirect = false, languageDisplayName = false
			if (redirectLanguages[langCode]) {
				[ redirect, languageDisplayName ] = interLanguageRedirect(redirectLanguages[langCode])
			} else if (langCode.split("-").length !== 1) {
				[ redirect, languageDisplayName ] = interLanguageRedirect(langCode.split("-")[0])
			}
			if (!redirect) [ redirect, languageDisplayName ] = interLanguageRedirect("en")
			if (redirect) {
				smart404Status(`${languageDisplayName} page found. Redirecting to <a href="${redirect}">${redirect}</a>...`)
				const redirectUrlObj = new URL(document.location)
				redirectUrlObj.pathname = redirect
				document.location.replace(redirectUrlObj)
				return	
			}
		}
		
		let { bestMatch } = stringSimilarity.findBestMatch(pathName, Object.values(pages).flat())
		smart404Status(`Did you mean <a href="${bestMatch.target}">${bestMatch.target}</a>?`)

	} catch (e) {
		
		console.error(e)
		smart404Status(`Something went wrong. Please create an issue about this. ${e}`)
		
	}
	
})()