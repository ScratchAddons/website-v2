const i18n = window.i18nStrings
let lastFeedbackRequestTime = localStorage.getItem("lastFeedbackRequestTime") 
let wakeUpTimeout = setTimeout(() => {}, 0)

const form = document.querySelector("#feedback-form")
const usernameField = form.querySelector('#feedback-username')
const contentField = form.querySelector("#feedback-content")
const submitButton = form.querySelector("#feedback-submit")
const addonsListCheckbox = form.querySelector("#feedback-addons-list")

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
    const statusEl = document.querySelector('#feedback-status')
    statusEl.textContent = statusText
    statusEl.hidden = false
    statusEl.classList.remove([...statusEl.classList].filter(className => /alert-/.exec(className))[0])
    statusEl.classList.add(`alert-${status}`)
}

form.addEventListener("submit", async event => {
    event.preventDefault()
    setStatus(i18n.statusSending, "primary")

    usernameField.readOnly = true
    contentField.readOnly = true
    submitButton.disabled = true

    // document.querySelector("#sending").style.display = "block";

    const body = {
        version, 
        userAgent: navigator.userAgent, 
        language: navigator.language, 
        content: contentField.value, 
        username: usernameField.value ,
        enabledAddons: addonsListCheckbox.checked ? enabledAddons : null
    }

    try {
        lastFeedbackRequestTime = Date.now()
        localStorage.setItem("lastFeedbackRequestTime", lastFeedbackRequestTime)    
        const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {
            method: "POST", 
            body: JSON.stringify(body)
        })
        if (!res.ok) throw "";
        setTimeout(() => submitButton.disabled = false, 10000)
        setStatus(i18n.statusSuccess, "success")
    } catch(err) {
        setStatus(i18n.statusFailed, "danger")
        submitButton.disabled = false
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

window.addEventListener("load", () => document.querySelector("textarea").focus());

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
                if (response.status !== 200 && response.status !== 0) {
                    setOffline()
                    resolve(false)
                } else resolve(true)
            })
            .catch(() => {
                setOffline()
                resolve(false)
            })
    })
}