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

const backgroundStyle = "linear-gradient(to bottom, rgb(5, 0, 10), rgb(10, 0, 0))";

// Body gradient
document.body.style.background = backgroundStyle;
document.body.style.backgroundAttachment = "fixed";