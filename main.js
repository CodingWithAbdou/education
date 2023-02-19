let ulLinks = document.querySelector("nav .container #navigation ul"),
  iconOpenAndClose = document.querySelector("#menu__navigation"),
  showMore = document.querySelectorAll(
    "#blog__container #blog__boxes article .btn"
  );
// open and close navaigation bar in medai < 992px

iconOpenAndClose.addEventListener("click", (e) => {
  e.stopPropagation();
  iconOpenAndClose.classList.toggle("active");
  ulLinks.classList.toggle("active");
});

// in page blog show pargraph and hide

showMore.forEach((a) => {
  a.addEventListener("click", (event) => {
    event.preventDefault();

    // get the paragraph when utilser Click + add and remove class more
    document
      .querySelector(`#blog__container #${event.target.dataset.p}`)
      .classList.toggle("more");
    document

      // Conrol in text inside buton when utilser click on a (Read More)
      .querySelector(`#blog__container #${event.target.dataset.p}`)
      .classList.contains("more")
      ? (event.target.innerHTML = "Read More")
      : (event.target.innerHTML = "Show Less");
  });
});
