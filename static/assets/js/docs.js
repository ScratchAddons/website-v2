// Add scroll spy for table of contents (the thing that bolds the current section)
scrollSpy('#TableOfContents', {
	sectionClass: 'h2, h3, h4, h5, h6',
	menuActiveTarget: '#TableOfContents a',
	offset: -50,
})

const searchResultEl = document.querySelector('#docs-search-results')
const searchInputEl = document.querySelector('#docs-search-input')

;(async () => {
	const pagefind = await import("/_pagefind/pagefind.js");

	searchInputEl.addEventListener('input', async event => {
		search(pagefind, searchInputEl.value)
	})
	search(pagefind, searchInputEl.value)

})()

const search = async (pagefind, query) => {

	if (query === '') {
		searchResultEl.classList.add('d-none')
		return
	}
	
	const search = await pagefind.search(query);
	const results = await Promise.all(search.results.slice(0, 5).map(r => r.data()));

	searchResultEl.innerHTML = ''

	if (results.length === 0) {
		const noneEl = document.createElement('p')
		noneEl.textContent = window.i18nStrings.searchNoResults
		searchResultEl.appendChild(noneEl)
	}

	for (const i in results) {
		const itemEl = document.createElement('a')
		itemEl.href = results[i].raw_url
		itemEl.classList.add('docs-search-item')
		// itemEl.classList.add('text-body')
		itemEl.classList.add('text-decoration-none')

		const titleEl = document.createElement('p')
		titleEl.textContent = results[i].meta.title
		titleEl.classList.add('font-weight-bold')
		itemEl.appendChild(titleEl)

		const excerptEl = document.createElement('p')
		excerptEl.innerHTML = results[i].excerpt
		excerptEl.classList.add('small')
		excerptEl.classList.add('mb-0')
		itemEl.appendChild(excerptEl)

		searchResultEl.appendChild(itemEl)
		// console.log(results[i])
	}

	searchResultEl.classList.remove('d-none')

}