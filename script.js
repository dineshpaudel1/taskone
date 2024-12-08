const container = document.querySelector(".card-container");
let cards = Array.from(container.children);

function rearrangeCards() {
  cards.forEach((card, index) => {
    if (index === 0) {
      card.style.transform = "translateY(-150px) scale(0.8)";
      card.style.opacity = "0.8";
      card.style.zIndex = "1";
    } else if (index === 1) {
      card.style.transform = "translateY(0) scale(1)";
      card.style.opacity = "1";
      card.style.zIndex = "10";
    } else if (index === 2) {
      card.style.transform = "translateY(150px) scale(0.8)";
      card.style.opacity = "0.8";
      card.style.zIndex = "1";
    }
  });
}

container.addEventListener("mousedown", (event) => {
  let isDragging = true;
  let startY = event.clientY;

  function onMouseMove(e) {
    if (!isDragging) return;

    const offsetY = e.clientY - startY;

    if (offsetY < -50) {
      cards.push(cards.shift());
      rearrangeCards();
      isDragging = false;
    } else if (offsetY > 50) {
      cards.unshift(cards.pop());
      rearrangeCards();
      isDragging = false;
    }
  }

  function onMouseUp() {
    isDragging = false;
    document.removeEventListener("mousemove", onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

rearrangeCards();
