const i18n = window.i18nStrings
const form = document.querySelector("#feedback-form")

const version = new URL(location.href).searchParams.get("ext_version") || new URL(location.href).searchParams.get("version")

let enabledAddons = null
if (location.hash.length && /[0-9A-Fa-f]/g.test(location.hash.substring(2))) {
    enabledAddons = location.hash.substring(2)
} else {
    form.querySelector("#feedback-addons-list").checked = false
    form.querySelector("#feedback-addons-list").disabled = true
}

const setStatus = (statusText, status) => {
    const element = document.querySelector('#feedback-status')
    element.textContent = statusText
    element.hidden = false
    element.classList.remove([...element.classList].filter(className => /alert-/.exec(className))[0])
    element.classList.add(`alert-${status}`)
}

form.onsubmit = async event => {

    event.preventDefault()
    setStatus(i18n.statusSending, "primary")

    form.querySelector('#feedback-username').readOnly = true
    form.querySelector("#feedback-content").readOnly = true
    form.querySelector("#feedback-submit").disabled = true

    // document.querySelector("#sending").style.display = "block";

    const body = {
        version, 
        userAgent: navigator.userAgent, 
        language: navigator.language, 
        content: form.querySelector('#feedback-content').value, 
        username: form.querySelector('#feedback-username').value ,
        enabledAddons: form.querySelector("#feedback-addons-list").checked ? enabledAddons : null
    }

    try {
        const res = await fetch("https://scratchaddons-feedback.glitch.me/send", {
            method: "POST", 
            body: JSON.stringify(body)
        })
        if (!res.ok) throw "";
        setTimeout(() => form.querySelector("#feedback-submit").disabled = false, 10000)
        setStatus(i18n.statusSuccess, "success")
    } catch(err) {
        setStatus(i18n.statusFailed, "danger")
        form.querySelector("#feedback-submit").disabled = false
    }

    form.querySelector('#feedback-username').readOnly = false
    form.querySelector("#feedback-content").readOnly = false
};

window.addEventListener("load", () => document.querySelector("textarea").focus());

const setOffline = () => {
    const allInputs = [...form.querySelectorAll('button'), ...form.querySelectorAll('input'), ...form.querySelectorAll('textarea')]
    allInputs.forEach(element => {
        element.disabled = true
    });
    setStatus(i18n.statusOffline, "danger")
}

fetch("https://scratchaddons-feedback.glitch.me/", {
    mode: 'no-cors'
})
    .then(response => {
        if (response.status == 200) setOffline()
    })
    .catch(() => {
        setOffline()
    })
