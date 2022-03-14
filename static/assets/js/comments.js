const scriptEl = document.currentScript
const parentEl = scriptEl.parentElement
parentEl.querySelector('.link-to-search').href = 'https://github.com/ScratchAddons/website-v2/discussions?discussions_q=' + encodeURI(document.location.pathname)

const giscusEl = document.createElement('script')
const languageToUse = document.documentElement.lang
const languages = scriptEl.dataset.giscusLangs ? scriptEl.dataset.giscusLangs.substring(1).split(' ') : ["en"]
const giscusDataset = {
	repo: 'ScratchAddons/website-v2',
	repoId: 'MDEwOlJlcG9zaXRvcnkzNjU3NzE1MTQ=',
	category: 'Page comments',
	categoryId: 'DIC_kwDOFc06-s4COGAf',
	mapping: 'pathname',
	reactionsEnabled: 1,
	emitMetadata: 0,
	inputPosition: 'top',
	theme: document.querySelector('body.dark') ? 'dark' : 'light',
	lang: languages.includes(languageToUse) ? languageToUse : 'en'
}

const updateTheme = (theme = document.querySelector('body.dark') ? 'dark' : 'light') => {
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
	giscusDataset.theme = event.detail.scheme
	for (let key in giscusDataset) {
		giscusEl.dataset[key] = giscusDataset[key]
	}	
	document.body.appendChild(giscusEl)
	document.removeEventListener('change-theme', event => loadGiscus(event))
}

document.addEventListener('change-theme', event => loadGiscus(event))

document.addEventListener('change-theme', event => updateTheme(event.detail.scheme))