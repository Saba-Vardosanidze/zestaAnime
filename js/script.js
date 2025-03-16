document.addEventListener("DOMContentLoaded", () => {
  const emblaNode1 = document.querySelector("#embla1");
  const emblaNode2 = document.querySelector("#embla2");

  const embla1 = EmblaCarousel(emblaNode1, {
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });

  setInterval(() => {
    embla1.scrollNext();
  }, 5000);

  const embla2 = EmblaCarousel(emblaNode2, {
    loop: false,
    align: "start",
    slidesToScroll: 1,
  });

  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");

  prevButton.addEventListener("click", () => {
    embla2.scrollPrev();
  });

  nextButton.addEventListener("click", () => {
    embla2.scrollNext();
  });
});
//
const xbutton = document.getElementById("xButton");
const search = document.getElementById("searchInput");
xbutton.addEventListener("click", function () {
  search.value = "";
});
//
const themeToggle = document.getElementById("themeToggle");
function updateSavedText(theme) {
  if (theme === "dark") {
    themeToggle.innerHTML = `<img src="assets/img/svg/moon.svg" alt="darkMode" />`;
  } else {
    themeToggle.innerHTML = `<img src="assets/img/svg/sun.svg" alt="lightMode" />`;
  }
}

function appleSavedTheme() {
  const currentTheme = localStorage.getItem("theme") || "light";

  document.body.classList.toggle("dark", currentTheme === "dark");

  updateSavedText(currentTheme);
}

themeToggle.addEventListener("click", function () {
  const isDarkmode = document.body.classList.toggle("dark");

  localStorage.setItem("theme", isDarkmode ? "dark" : "light");
  updateSavedText(isDarkmode ? "dark" : "light");
});
