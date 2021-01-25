document.querySelector("#items").addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    e.target.scrollBy(300, 0);
  } else {
    e.target.scrollBy(-300, 0);
  }
});
