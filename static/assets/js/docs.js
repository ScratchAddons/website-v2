/* =============================================================
                         TOC SCROLLSPY
============================================================= */

scrollSpy('#TableOfContents', {
	sectionClass: 'h2, h3, h4, h5, h6',
	menuActiveTarget: '#TableOfContents a',
	offset: -50,
})

/* =============================================================
                             SEARCH
============================================================= */

const searchResultEl = document.querySelector('#docs-search-results')
const searchInputEl = document.querySelector('#docs-search-input')
let searchResults
let hoveringIndex = -1

;(async () => {
	const pagefind = await import("/_pagefind/pagefind.js");

	searchInputEl.addEventListener('input', async event => {
		search(pagefind, searchInputEl.value)
		hoveringIndex = -1
	})
	searchInputEl.addEventListener('keydown', event => {
		console.log(event.keyCode)
		if (event.keyCode === 38) {  // up
			if (hoveringIndex === 0) return
			searchResultEl.children[hoveringIndex]?.classList.remove('active')
			hoveringIndex -= 1
			searchResultEl.children[hoveringIndex]?.classList.add('active')
		} else if (event.keyCode === 40) { // down
			if (hoveringIndex === searchResults.length - 1) return
			searchResultEl.children[hoveringIndex]?.classList.remove('active')
			hoveringIndex += 1
			searchResultEl.children[hoveringIndex]?.classList.add('active')
		} else if (event.keyCode === 13) {
			if (hoveringIndex === -1) hoveringIndex = 0
			searchResultEl.children[hoveringIndex]?.click()
		} else {
			return
		}
		event.preventDefault()
	})
	search(pagefind, searchInputEl.value)

})()

const search = async (pagefind, query) => {

	if (query === '') {
		searchResultEl.classList.add('d-none')
		return
	}
	
	const search = await pagefind.search(query);
	searchResults = await Promise.all(search.results.slice(0, 5).map(r => r.data()));

	searchResultEl.innerHTML = ''

	if (searchResults.length === 0) {
		const noneEl = document.createElement('p')
		noneEl.textContent = window.i18nStrings.searchNoResults
		searchResultEl.appendChild(noneEl)
	}

	for (const searchResult of searchResults) {

		const itemEl = document.createElement('a')
		itemEl.href = searchResult.raw_url
		itemEl.classList.add('docs-search-item')
		// itemEl.classList.add('text-body')
		itemEl.classList.add('text-decoration-none')

		const titleEl = document.createElement('p')
		titleEl.classList.add('docs-search-item-title')
		titleEl.textContent = searchResult.meta.title
		// titleEl.classList.add('font-weight-bold')

		const excerptEl = document.createElement('p')
		excerptEl.classList.add('docs-search-item-excerpt')
		excerptEl.innerHTML = searchResult.excerpt
		excerptEl.classList.add('small')
		excerptEl.classList.add('mb-0')

		itemEl.href += '#:~:text=' + excerptEl.querySelector('mark').textContent

		itemEl.appendChild(titleEl)
		itemEl.appendChild(excerptEl)
		searchResultEl.appendChild(itemEl)
		// console.log(results[i])
	}

	searchResultEl.classList.remove('d-none')

}