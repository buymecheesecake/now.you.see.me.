function randomlyBlinkWords() {
  const elements = document.querySelectorAll("p, span, div, a, h1, h2, h3, h4, h5, h6, li");

  elements.forEach(el => {
    const words = el.innerText.split(" ");
    el.innerHTML = ""; // Clear text

    words.forEach(word => {
      const span = document.createElement("span");
      span.innerText = word + " ";

      const shouldStay = Math.random() < 0.1; // ~10% chance to stay visible

      if (!shouldStay) {
        const duration = 1000 + Math.random() * 3000; // 1–4 seconds
        setTimeout(() => {
          span.style.visibility = "hidden";
        }, duration);
      }

      el.appendChild(span);
    });
  });
}

window.onload = () => {
  setTimeout(randomlyBlinkWords, 500); // Delay slightly to ensure content is loaded
};
