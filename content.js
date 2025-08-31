function injectScript(filePath) {
    const script = document.createElement("script");
    const runtime = chrome?.runtime || browser?.runtime;
    script.src = runtime.getURL(filePath);
    script.onload = function() {
        this.remove(); // cleanup
    };
    (document.head || document.documentElement).appendChild(script);
}

injectScript("palitt.js");