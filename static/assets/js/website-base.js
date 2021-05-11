/* =============================================================
                        INITIAL FUNCTIONS                      
============================================================= */

// https://stackoverflow.com/a/61511955
const waitForElement = (selector) => {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector))
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                resolve(document.querySelector(selector))
                observer.disconnect()
            }
        })

        observer.observe(document.body, {
            childList: true,
            subtree: true
        })
    })
}

// https://stackoverflow.com/a/66378318
const stringToBoolean = (string) => string === 'false' ? false : !!string

/* =============================================================
                         INSTALL BUTTON
============================================================= */

$(() => {

    let browser; // "chrome", "firefox", null
    const bowserResult = bowser.getParser(navigator.userAgent).parsedResult;
    switch (bowserResult.engine.name) {
        case "Blink":
            browser = "chrome"
            break
        case "Gecko":
            browser = "firefox"
            break
        default:
            browser = "unsupported"
            break
    }

    const storeLinks = {
        "chrome": "https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco",
        "firefox": "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",
        "unsupported": "/#install"
    }

    const url = storeLinks[browser]

	if (document.querySelector("#install-intro")) {
		switch (browser) {
			case "chrome":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:googlechrome"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Chrome"
				break
			case "firefox":
				document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify" data-icon="simple-icons:firefoxbrowser"></span>'
				document.querySelector("#install-browser").innerHTML = "Install for Firefox"
				break
			default:
				document.querySelector("#install-browser-icon").innerHTML = ""
				document.querySelector("#install-browser").innerHTML = "Install"
				break;
        }
        document.querySelector("#install-intro").classList.toggle("disabled")
	}

	for (const element of document.querySelectorAll(".install-btn")) {
		element.href = url
		element.classList.add(`install-${browser}`)
		if (location.pathname !== "/" && browser !== "unsupported") {
            element.target = "_blank"
            element.rel = "noopener"
        }
	}

})

/* =============================================================
                           DARK THEME
============================================================= */

let darkTheme = false
let extensionStyledTheme = false
let isUserSelected = false
let toggle

const updateExtensionStyledTheme = (active, updateLocalStorage = false) => {
    if (active === extensionStyledTheme) return
    document.body.classList[active ? "add" : "remove"]("extension-styled")
    extensionStyledTheme = active
    if (updateLocalStorage) localStorage.setItem("extensionStyledTheme", active)
}

const updateDarkTheme = (active, updateLocalStorage = false) => {
    if (active === darkTheme) return
    document.body.classList.toggle("no-animation")
    setTimeout(() => document.body.classList.toggle("no-animation"), 200)
    document.body.classList[active ? "add" : "remove"]("dark")
    darkTheme = active
    if (updateLocalStorage) localStorage.setItem("darkTheme", active)
}
    
const updateDarkToggle = (active) => {
    if (toggle === undefined) return
    if (active) {
        toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:sun" data-inline="false"></span>'
    } else {
        toggle.innerHTML = '<span class="iconify" data-icon="fa-solid:moon" data-inline="false"></span>'
    }
}

if (localStorage.getItem("extensionStyledTheme") !== null) {
    updateDarkTheme(stringToBoolean(localStorage.getItem("extensionStyledTheme")))
    isUserSelected = true
}

if (localStorage.getItem("darkTheme") !== null) {
    updateDarkTheme(stringToBoolean(localStorage.getItem("darkTheme")))
    isUserSelected = true
}

document.body.dataset.themeLoaded = true

if (!isUserSelected) colorChangeListener = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (isUserSelected) return
    updateDarkTheme(e.matches, false)
    updateDarkToggle(darkTheme)
})

waitForElement("#dark-toggle").then(() => {

    toggle = document.querySelector("#dark-toggle")
    updateDarkToggle(darkTheme)
    
    toggle.addEventListener("click", event => {
        isUserSelected = true
        if (event && event.ctrlKey) {
            localStorage.removeItem("darkTheme")
            localStorage.removeItem("extensionStyledTheme")
            document.location.reload()
            return
        }
        updateDarkTheme(!darkTheme, true)
        if (event && event.shiftKey) updateExtensionStyledTheme(!extensionStyledTheme, true)
    })
        
})

/* =============================================================
                            TOOLTIPS
============================================================= */

$(() => {
    $(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()
})

let lastTooltipsAmount = 0

const tooltipsObserver = new MutationObserver(mutations => {
    currentTooltipsAmount = document.querySelectorAll('[data-toggle="tooltip"]').length
    if (lastTooltipsAmount !== currentTooltipsAmount) {
        lastTooltipsAmount = currentTooltipsAmount
        $(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()
    }
    // TODO: I suck at mutations. Wanted try to detect added tooltip-ed elements, but it didn't work because I need to traverse the element tree.
    // console.log(mutations)
    // mutations.forEach(mutation => {
    //     console.log(mutation)
    //     console.log(mutation.addedNodes)
    //     if (mutation.type === "childList" && mutation.addedNodes.length) {
    //         console.log(mutation.addedNodes)
    //         mutation.addedNodes.forEach(node => {
    //             console.log(node)
    //             if (node.matches('[data-toggle="tooltip"]')) $(node).tooltip()
    //         })
    //     }
    // })
})

tooltipsObserver.observe(document.body, {
    childList: true,
    subtree: true
})

/* =============================================================
                      MOVE JSON-LD TO HEAD
            (generally not needed, but just in case)
============================================================= */

$(() => {
    document.querySelectorAll("main script[type='application/ld+json']").forEach(element => {
        document.head.appendChild(element.cloneNode(true))
        element.remove()
    })
})

/* =============================================================
                       CONSOLE EASTER EGG
============================================================= */

$(() => {
	console.log(
`Repository: https://github.com/ScratchAddons/website
Report issues: https://github.com/ScratchAddons/website/issues or https://scratchaddons.com/feedback

%cA little secret: You can toggle the similar style to the extension if you click the dark theme switch button while holding SHIFT.`,
	"font-style: italic; font-size: 0.75rem")
})