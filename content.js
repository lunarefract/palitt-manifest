function injectScript(filePath, id) {
    if (document.getElementById(id)) return;

    const script = document.createElement("script");
    script.id = id;

    const runtime = chrome?.runtime || browser?.runtime;
    script.src = runtime.getURL(filePath);

    script.onload = () => script.remove();

    console.debug("injecting");
    (document.head || document.documentElement).appendChild(script);
    console.debug("injected");
}

injectScript("palitt.js", "palitt-injected");