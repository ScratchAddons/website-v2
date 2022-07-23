// Shoutouts to @GrahamSH-LLK (on GitHub)

const mainEntity = []

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

const structuredData = {
	"@context": "https://schema.org",
	"@type": "FAQPage",
	mainEntity
}

const script = document.createElement('script');
script.setAttribute('type', 'application/ld+json');
script.textContent = JSON.stringify(structuredData);
document.head.appendChild(script);
