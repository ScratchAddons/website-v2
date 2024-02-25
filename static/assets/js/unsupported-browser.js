// Scratch Addons v1.37.0 and greater may iframe this page.
// If the getVersionInfo message is replied to, we change the UI of the page accordingly.
window.parent.postMessage({msgType: "getVersionInfo"}, "*");

// To emulate the extension replying, run this in the console:
// window.self.postMessage({versionInfo: "0.0.1"}, "*")

window.addEventListener("message", (e) => {
    if (e.data.versionInfo) {
        document.getElementById("export-settings").style.display = "block"
        window.parent.postMessage({msgType: "pageTitleInfo", msgContent: document.title}, "*")
    }
});

document.getElementById("export-btn").onclick = () => {
    window.parent.postMessage({msgType: "exportSettingsAsFile"}, "*")
}
document.getElementById("export-view-btn").onclick = () => {
    window.parent.postMessage({msgType: "openSettingsAsTab"}, "*")
}
