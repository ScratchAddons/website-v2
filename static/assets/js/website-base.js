/* =============================================================
                        INITIAL FUNCTIONS                      
============================================================= */


/**
 * Waits for an element to be on the document.
 * Based on https://stackoverflow.com/a/61511955.
 * @param {string} selector Selector of the element to wait.
 * @returns A Promise object.
 */
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

/**
 * Converts a string to a boolean.
 * Based on https://stackoverflow.com/a/66378318.
 * @param {string} string The string.
 * @returns The boolean.
 */
const stringToBoolean = (string) => string === 'false' ? false : !!string

/* =============================================================
                         INSTALL BUTTON
============================================================= */

$(() => {

    /**
     * Updates the install buttons based on the browser.
     * @param {string} name The name of the browser.
     * @param {string} engine The engine of the browser.
     */
    window.installButtonGo = (name, engine) => {

        // console.log(name)

        delete window.installButtonGo

        const storeLinks = {
            "chrome": "https://chrome.google.com/webstore/detail/fbeffbjdlemaoicjdapfpikkikjoneco",
            "firefox": "https://addons.mozilla.org/firefox/addon/scratch-messaging-extension/",
            "edge": "https://microsoftedge.microsoft.com/addons/detail/iliepgjnemckemgnledoipfiilhajdjj",
            "unsupported": "/#install"
        }

        // Figure out the browser
        switch (engine) {
            case "Blink":
                if (name === "Microsoft Edge") browser = "edge"
                else browser = "chrome"
                break
            case "Gecko":
                browser = "firefox"
                break
            default:
                browser = "unsupported"
                break
        }
        
        // Update the install button on the intro section of the index page. 
        if (document.querySelector("#install-intro")) {
            switch (browser) {
                case "chrome":
                    document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify-inline" data-icon="simple-icons:googlechrome"></span>'
                    document.querySelector("#install-browser").innerText = window.i18nStrings.installChrome
                    break
                case "firefox":
                    document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify-inline" data-icon="simple-icons:firefoxbrowser"></span>'
                    document.querySelector("#install-browser").innerText = window.i18nStrings.installFirefox
                    break
                case "edge":
                    document.querySelector("#install-browser-icon").innerHTML = '<span class="iconify-inline" data-icon="simple-icons:microsoftedge"></span>'
                    document.querySelector("#install-browser").innerText = window.i18nStrings.installEdge
                    break
                default:
                    document.querySelector("#install-browser-icon").innerHTML = ""
                    document.querySelector("#install-browser").innerText = window.i18nStrings.installUnsupported
                    break;
            }
            document.querySelector("#install-intro").classList.toggle("disabled")
        }
    
        // Update the install button on the navbar.
        const url = storeLinks[browser]

        for (const element of document.querySelectorAll(".install-btn")) {
            element.href = url
            element.classList.add(`install-${browser}`)
            if (location.pathname !== "/" && browser !== "unsupported") {
                element.target = "_blank"
                element.rel = "noopener"
            }
        }

    }

    // Use Bowser to get the used browser, and save it to the local storage to avoid calling Bowser again.
    if (localStorage.getItem("browserName") !== null && localStorage.getItem("browserEngine") !== null) installButtonGo(localStorage.getItem("browserName"), localStorage.getItem("browserEngine"))
    else {
        console.info("No browser data saved. Getting bowser to get it...")

        const detectEngineElement = document.createElement("script")
    
        detectEngineElement.type = "module"
        detectEngineElement.innerHTML = `
        import bowser from 'https://cdn.jsdelivr.net/npm/bowser/+esm'
    
        localStorage.setItem("browserName", bowser.getParser(navigator.userAgent).parsedResult.browser.name)
        localStorage.setItem("browserEngine", bowser.getParser(navigator.userAgent).parsedResult.engine.name)
    
        window.installButtonGo(localStorage.getItem("browserName"), localStorage.getItem("browserEngine"))
        `
        document.head.appendChild(detectEngineElement)
    }

})

/* =============================================================
                           DARK THEME
============================================================= */

let darkTheme = false
let extensionStyledTheme = false
let isUserSelected = false
let toggle

/**
 * Updates the state of the extension-styled theme.
 * @param {boolean} active The state that want to be set.
 * @param {boolean} updateLocalStorage If the value on the local storage needs to be updated.
 */
const updateExtensionStyledTheme = (active, updateLocalStorage = false) => {
    if (active === extensionStyledTheme) return
    document.body.classList[active ? "add" : "remove"]("extension-styled")
    extensionStyledTheme = active
    if (updateLocalStorage) localStorage.setItem("extensionStyledTheme", active)
}

/**
 * Updates the state of the dark theme.
 * @param {boolean} active The state that want to be set.
 * @param {boolean} updateLocalStorage If the value on the local storage needs to be updated.
 */
const updateDarkTheme = (active, updateLocalStorage = false) => {
    if (active === darkTheme) return
    document.body.classList.toggle("no-animation")
    setTimeout(() => document.body.classList.toggle("no-animation"), 200)
    document.body.classList[active ? "add" : "remove"]("dark")
    darkTheme = active
    if (updateLocalStorage) localStorage.setItem("darkTheme", active)
}

/**
 * Updates the dark toggle button based on the state.
 * @param {boolean} active The state that want to be set.
 */
const updateDarkToggle = (active) => {
    if (toggle === undefined) return
    // if (active) {
    //     toggle.innerHTML = '<span class="iconify-inline" data-icon="fa-solid:sun"></span>'
    // } else {
    //     toggle.innerHTML = '<span class="iconify-inline" data-icon="fa-solid:moon"></span>'
    // }
}
/**
 * Generates a "change-theme" event.
 * @returns An event.
 */
const generateChangeThemeEvent = () => new CustomEvent('change-theme', {
    detail: {
        scheme: darkTheme ? 'dark' : 'light',
        type: extensionStyledTheme ? 'extension' : 'default'
    }
})

// Update the state based on the saved settings.
if (localStorage.getItem("extensionStyledTheme") !== null) {
    updateExtensionStyledTheme(stringToBoolean(localStorage.getItem("extensionStyledTheme")))
    isUserSelected = true
}
if (localStorage.getItem("darkTheme") !== null) {
    updateDarkTheme(stringToBoolean(localStorage.getItem("darkTheme")))
    isUserSelected = true
}

// Check for "prefers-color-scheme" and switch to the dark theme if necessary.
if (!isUserSelected) colorChangeListener = window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (isUserSelected) return
    updateDarkTheme(e.matches, false)
    updateDarkToggle(darkTheme)
})

// All done, tell that it is done.
document.dispatchEvent(generateChangeThemeEvent())
document.body.dataset.themeLoaded = true

waitForElement("#dark-toggle").then(() => {

    toggle = document.querySelector("#dark-toggle")
    updateDarkToggle(darkTheme)
    
    // Update the dark theme if edited. If SHIFT is also press, also update the extension-styled theme.
    toggle.addEventListener("click", event => {
        isUserSelected = true
        if (event && event.ctrlKey) {
            localStorage.removeItem("darkTheme")
            localStorage.removeItem("extensionStyledTheme")
            document.location.reload()
            return
        }
        updateDarkTheme(!darkTheme, true)
        updateDarkToggle(darkTheme)
        if (event && event.shiftKey) updateExtensionStyledTheme(!extensionStyledTheme, true)
        document.dispatchEvent(generateChangeThemeEvent())
    })
        
})

/* =============================================================
                            TOOLTIPS
============================================================= */

// Give tooltips for all elements that using it.
$(() => {
    $(document.querySelectorAll('[data-toggle="tooltip"]')).tooltip()
})

let lastTooltipsAmount = 0

// Observe elements that haven't got the tooltips, and give them.
const tooltipsObserver = new MutationObserver(mutations => {
    const currentTooltipsAmount = document.querySelectorAll('[data-toggle="tooltip"]').length
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
                   HIDE ELEMENTS FROM SPIDERS
============================================================= */

const removeFromSpiders = () => {
    document.querySelectorAll(".hide-from-spiders").forEach(element => {
        if (/google|baidu|bing|msn|yandex/i.test(navigator.userAgent)) element.remove()
        else element.classList.remove("hide-from-spiders")
    })    
}

removeFromSpiders()
$(removeFromSpiders)

/* =============================================================
                    LOCALIZED DATE AND TIME
============================================================= */

let languageId = document.documentElement.lang
const languageVariations = navigator.languages.filter(lang => lang.startsWith(languageId))
if (languageVariations.length) languageId = languageVariations[0]
const options = { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }

$(() => {
    document.querySelectorAll("time").forEach(element => {
        element.textContent = new Date(element.getAttribute('datetime')).toLocaleDateString(languageId, options)
    })
})

/* =============================================================
                       CONSOLE EASTER EGG
============================================================= */

$(() => {
	console.info(
`Repository: https://github.com/ScratchAddons/website-v2
Report issues: https://github.com/ScratchAddons/website-v2/issues or https://scratchaddons.com/feedback

%cA little secret: You can toggle the similar style to the extension if you click the dark theme switch button while holding SHIFT.`,
	"font-style: italic; font-size: 0.75rem")
})
