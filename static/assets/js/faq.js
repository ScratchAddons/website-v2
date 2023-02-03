// Shoutouts to GrahamSH-LLK (on GitHub)
// Generates the JSON-LD structured data for the FAQ page.

/**
 * Main entity for the structured data.
 */
const mainEntity = []

// Read the article and push items to the main entity.
document.querySelectorAll("article > *").forEach((value, index) => {
	if (value.tagName === "H3") {
		mainEntity.push({
			"@type": "Question",
			"name": `${value.textContent.trim()}`,
			"acceptedAnswer": {
				"@type": "Answer",
				"text": ""
			}
		})
	} else {
		if (mainEntity.length > 0) mainEntity[mainEntity.length - 1].acceptedAnswer.text += value.outerHTML
	}
})

/**
 * The structured data.
 */
const structuredData = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity
}

// Add the structured data on the document head.
const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);
