const bigBall = document.querySelector(".cursor-big");
const smallBall = document.querySelector(".cursor-small");

// Listeners
window.addEventListener("mousemove", onMouseMove);

// Move the cursor
function onMouseMove(e) {

  const posX = e.clientX;
  const posY = e.clientY;

  smallBall.style.left = `${posX}px`;
  smallBall.style.top = `${posY}px`;

  bigBall.animate(
    {
      left: `${posX}px`,
      top: `${posY}px`,
    },
    { duration: 350, fill: "forwards" },
  );
}