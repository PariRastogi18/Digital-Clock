function updateClock() {
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, "0");
  let min = now.getMinutes().toString().padStart(2, "0");
  let sec = now.getSeconds().toString().padStart(2, "0");

  document.getElementById(
    "digitalClock"
  ).textContent = `${hours} : ${min} : ${sec}`;
}
setInterval(updateClock, 1000);
updateClock();
