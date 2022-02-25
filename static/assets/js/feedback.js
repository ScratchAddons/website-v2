fetch("https://scratchaddons-feedback.glitch.me/", {mode:'no-cors'})
const version = new URL(location.href).searchParams.get("ext_version") || new URL(location.href).searchParams.get("version")
let enabledAddons = null
if (location.hash.length && /[0-9A-Fa-f]/g.test(location.hash.substring(2))) {
    enabledAddons = location.hash.substring(2)
} else {
    document.querySelector("#feedback-send-enabled").style.display = 'none'
}

const setStatus = (statusText, status) => {
    const element = document.querySelector('#feedback-status')
    element.textContent = statusText
    element.hidden = false
    element.classList.remove([...element.classList].filter(className => /alert-/.exec(className))[0])
    element.classList.add(`alert-${status}`)
}

document.querySelector("#feedback-form").onsubmit = async event => {

    event.preventDefault()
    setStatus(window.i18nStrings.statusSending, "primary")

    document.querySelector('#feedback-username').readOnly = true
    document.querySelector("#feedback-content").readOnly = true
    document.querySelector("#feedback-submit").disabled = true

    // document.querySelector("#sending").style.display = "block";

    const body = {
        version, 
        userAgent: navigator.userAgent, 
        language: navigator.language, 
        content: document.querySelector('#feedback-content').value, 
        username: document.querySelector('#feedback-username').value ,
        enabledAddons: document.querySelector("#feedback-send-enabled > input").checked ? enabledAddons : null
    }

    try {
        const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {method:"POST", body: JSON.stringify(body)})
        if (!res.ok) throw "";
        setTimeout(() => document.querySelector("#feedback-submit").disabled = false, 10000)
        setStatus(window.i18nStrings.statusSuccess, "success")
    } catch(err) {
        setStatus(window.i18nStrings.statusFailed, "danger")
        document.querySelector("#feedback-submit").disabled = false
    }

    document.querySelector('#feedback-username').readOnly = false
    document.querySelector("#feedback-content").readOnly = false
};

window.addEventListener("load", () => document.querySelector("textarea").focus());
