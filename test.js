setInterval(() => {
    const homeButton = document.querySelector('a[href="/home"]');
    if (homeButton) {
        homeButton.textContent = "";
        homeButton.style.textAlign = "center"; // horizontal center

        // Create an <img> element
        const img = document.createElement("img");
        img.src = "https://cdn.discordapp.com/attachments/1293981914889191559/1411802748290338816/palitt_home.png?ex=68b5fb45&is=68b4a9c5&hm=41033360bbfe2fb69993e046b80cf1a992a56a1c1af0fdba11b67f2ddfa53edf&"; // your image URL
        img.alt = "Home";
        img.style.width = "50%";
        img.style.height = "50%";
        img.style.display = "inline-block"; // ensures text-align affects it

        // Add the image to the button
        homeButton.appendChild(img);
    }
}, 1000);

const link = document.createElement("link");
link.href = "https://fonts.googleapis.com/css2?family=Roboto&display=swap";
link.rel = "stylesheet";
document.head.appendChild(link);
document.body.style.fontFamily = "'Roboto', sans-serif";

// TODO: Fix
// Apply gradient to .r-kemksi elements
document.querySelectorAll('.r-kemksi').forEach(el => {
    el.style.background = backgroundStyle; // gradient
    el.style.backgroundRepeat = "no-repeat";
    el.style.backgroundSize = "cover"; // fill the element
    // Don't set backgroundAttachment for these
});