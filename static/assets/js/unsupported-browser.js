window.parent.postMessage({msgType: "getVersionInfo"}, "*");

// window.self.postMessage({versionInfo: "0.0.1"}, "*")

window.addEventListener("message", (e) => {
    if (e.data.versionInfo) {
        document.getElementById("export-settings").style.display = "block"
        window.parent.postMessage({msgType: "pageTitleInfo", msgContent: document.title}, "*");
    }
});

document.getElementById("export-btn").onclick = () => {
    window.parent.postMessage({msgType: "exportSettingsAsFile"}, "*");
}
document.getElementById("export-view-btn").onclick = () => {
    window.parent.postMessage({msgType: "openSettingsAsTab"}, "*");
}
