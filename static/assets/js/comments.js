const giscusEl = document.createElement('script')
const languageToUse = document.documentElement.lang
// const languageToUse = 'en'
const languages = ["de", "gsw", "en", "es", "fr", "id", "it", "ja", "ko", "pl", "ro", "ru", "vi", "zh-CN", "zh-TW"]
console.log(document.querySelector('body.dark'))
const giscusOptions = {
	repo: 'Hans5958/GitHub-API-Testing',
	repoId: 'MDEwOlJlcG9zaXRvcnkyMDg3ODMzMDQ=',
	category: 'Announcements',
	categoryId: 'DIC_kwDODHHHyM4CN6sV',
	mapping: 'pathname',
	reactionsEnabled: 1,
	emitMetadata: 0,
	inputPosition: 'top',
	theme: document.querySelector('body.dark') ? 'dark' : 'light',
	lang: languages.includes(languageToUse) ? languageToUse : 'en'
}

const updateTheme = (theme = document.querySelector('body.dark') ? 'dark' : 'light') => {
	console.log(theme)
	const iframe = document.querySelector('iframe.giscus-frame');
	if (!iframe) return;
	iframe.contentWindow.postMessage({ 
		giscus: {
			setConfig: {
				theme
			}
		}
	}, 'https://giscus.app');
}

giscusEl.src = 'https://giscus.app/client.js'
giscusEl.crossOrigin = 'anonymous'
giscusEl.async = 'true'

const loadGiscus = event => {
	giscusOptions.theme = event.detail.scheme
	for (let key in giscusOptions) {
		giscusEl.dataset[key] = giscusOptions[key]
	}	
	document.body.appendChild(giscusEl)
	document.removeEventListener('change-theme', event => loadGiscus(event))
}

document.addEventListener('change-theme', event => loadGiscus(event))

document.addEventListener('change-theme', event => updateTheme(event.detail.scheme))