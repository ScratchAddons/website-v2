const i18n = window.i18nStrings

const variations = {
    punishment: {
        strings: {
            ...i18n.preSendWarning.variations.punishment,
            description: i18n.preSendWarning.variations.punishment.description
                .replace(window.i18nTimestamp + 1, '<a href="https://en.scratch-wiki.info/wiki/Report">').replace(window.i18nTimestamp + 2, '</a>')
        },
        patterns: [
            /\bban(ing|ned)?\b/,
            /\bunban(ing|ned)?\b/,
            /\bkick(ing|ed)?\b/,
            /\bpunish(ing|ed|ment)?\b/,
            /\b(please|pl[sz])\s*block(ing|ed)?\b/,
            /\b(please|pl[sz])\s*mut(ed?|ing)\b/,
            /\b(please|pl[sz])\s*unmut(ed?|ing)\b/,
            /\bblock(ing|ed)?\s*(please|pl[sz])\b/,
            /\bmut(ed?|ing)\s*(please|pl[sz])\b/,
            /\bunmut(ed?|ing)\s*(please|pl[sz])\b/,
        ]
    },
    notST: {
        strings: {
            ...i18n.preSendWarning.variations.notST
        },
        patterns: [
            /\bscratch\s*team\b/i,
            /\bst\b/,
            /\bscratcher\b/,
            /\bforg[oe]t\s*password\b/,
            /\bdelete\s*account\b/,
        ]
    },
    folders: {
        strings: {
            ...i18n.preSendWarning.variations.folders
        },
        patterns: [
            /\bfolder\b/,
            /\bfolders\b/,
        ]
    },
}

let lastFeedbackRequestTime = localStorage.getItem("lastFeedbackRequestTime") 
let wakeUpTimeout = setTimeout(() => {}, 0)

const form = document.querySelector("#feedback-form")
const usernameField = form.querySelector('#feedback-username')
const contentField = form.querySelector("#feedback-content")
const submitButton = form.querySelector("#feedback-submit")
const addonsListCheckbox = form.querySelector("#feedback-addons-list")
const statusEl = document.querySelector('#feedback-status')
let hasWarnedContent = false
let closePswModalButton1 = document.querySelector('#feedback-psw-modal .close')
let closePswModalButton2 = document.querySelector('#feedback-psw-modal .modal-footer button')
const closePswButtonText = closePswModalButton2.textContent
const pswHeadingEl = document.querySelector('#feedback-psw-heading')
const pswDescriptionEl = document.querySelector('#feedback-psw-description')

const version = new URL(location.href).searchParams.get("ext_version") || new URL(location.href).searchParams.get("version")

let enabledAddons
if (location.hash.length && /[0-9A-Fa-f]/g.test(location.hash.substring(2))) {
    enabledAddons = location.hash.substring(2)
} else {
    addonsListCheckbox.checked = false
    addonsListCheckbox.disabled = true
    addonsListCheckbox.parentElement.title = window.i18nStrings.noAddonsList
    addonsListCheckbox.parentElement.dataset.toggle = "tooltip"
}

const setStatus = (statusText, status) => {
    statusEl.textContent = statusText
    statusEl.hidden = false
    statusEl.classList.remove([...statusEl.classList].filter(className => /alert-/.exec(className))[0])
    statusEl.classList.add(`alert-${status}`)
}

const setOffline = () => {
    const allInputs = [...form.querySelectorAll('button'), ...form.querySelectorAll('input'), ...form.querySelectorAll('textarea')]
    allInputs.forEach(element => {
        element.disabled = true
    });
    setStatus(i18n.statusOffline, "danger")
}

const startUpServer = () => {
    lastFeedbackRequestTime = Date.now()
    localStorage.setItem("lastFeedbackRequestTime", lastFeedbackRequestTime)
    return new Promise(resolve => {
        fetch("https://scratchaddons-feedback.glitch.me/", {
            mode: 'no-cors'
        })
            .then(response => {
                // 0 shouldn't be included here, but in my local testing it does that. I'm just adding it incase this happens in other places.
                if (!(response.status === 200 || response.status === 0)) {
                    setOffline()
                    return resolve(false)
                }
                return resolve(true)
            })
            .catch(e => {
                console.error(e)
                setOffline()
                return resolve(false)
            })
    })
}

// Credit to https://stackoverflow.com/a/29972322 for the timer logic
const holdSendButton = seconds => {
    submitButton.disabled = true
    closePswModalButton1.disabled = true
    closePswModalButton2.disabled = true
    let remaining = seconds, expected = Date.now()
    const step = () => {
        var dt = Date.now() - expected
        if (dt > 1000) {
            // something really bad happened. Maybe the browser (tab) was inactive?
            // possibly special handling to avoid futile "catch up" run
        }
        expected += 1000
        if (remaining) {
            setTimeout(step, Math.max(0, 1000 - dt))
            submitButton.textContent = i18n.submitButton + " (" + remaining + ")"
            closePswModalButton2.textContent = closePswButtonText + " (" + remaining + ")"
        } else {
            submitButton.disabled = false
            closePswModalButton1.disabled = false
            closePswModalButton2.disabled = false
            submitButton.textContent = i18n.submitButton
            closePswModalButton2.textContent = closePswButtonText
        }
        remaining--
    }
    step()
}

const setPreSendWarning = (heading, description) => {
    statusEl.hidden = true
    $('#feedback-psw-modal').modal('show')
    pswHeadingEl.textContent = heading
    pswDescriptionEl.innerHTML = description
    holdSendButton(5)
}

// for (const variation in variations) {
//     const variationObj = i18n.preSendWarning.variations[variation]
//     for (const key in variationObj) {
//         variationObj[key] = DOMPurify.sanitize(variationObj[key])
//     }
// }

const preSendCheck = content => {
    content = content.toLowerCase()
    let warningText = false
    for (var variationType in variations) {
        const variation = variations[variationType]
        if (variation.patterns.some(el => content.search(el) + 1)) {
            warningText = [variation.strings.heading, variation.strings.description]
            break
        }
    }
    if (warningText) {
        if (hasWarnedContent && hasWarnedContent === content) {
            hasWarnedContent = ""
            return true
        } else {
            hasWarnedContent = content
            setPreSendWarning(...warningText)
            return false    
        }
    } else {
        return true
    }
}
// preSendCheck('I hate this guy please ban him')

form.addEventListener("submit", async event => {
    event.preventDefault()
    setStatus(i18n.statusSending, "primary")

    usernameField.readOnly = true
    contentField.readOnly = true

    // document.querySelector("#sending").style.display = "block";

    const body = {
        version, 
        userAgent: navigator.userAgent, 
        language: navigator.language, 
        content: contentField.value, 
        username: usernameField.value ,
        enabledAddons: addonsListCheckbox.checked ? enabledAddons : null
    }

    if (preSendCheck(contentField.value)) {
        try {
            lastFeedbackRequestTime = Date.now()
            localStorage.setItem("lastFeedbackRequestTime", lastFeedbackRequestTime)
            const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {
                method: "POST", 
                body: JSON.stringify(body)
            })
            if (!res.ok) throw "";
            holdSendButton(10)
            setStatus(i18n.statusSuccess, "success")
        } catch(err) {
            setStatus(i18n.statusFailed, "danger")
        }
    }

    usernameField.readOnly = false
    contentField.readOnly = false
})

contentField.addEventListener("input", event => {
    if (event.target.value.length < 2) return
    clearTimeout(wakeUpTimeout)
    const diff = Date.now() - lastFeedbackRequestTime
    if (!lastFeedbackRequestTime || diff < 0 || diff > (60*4 + 45) * 1000) {
        wakeUpTimeout = setTimeout(startUpServer(), 2000)
    }
})

startUpServer()
submitButton.type = "submit"

window.addEventListener("load", () => document.querySelector("textarea").focus());
