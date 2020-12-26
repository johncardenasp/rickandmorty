const toggleTheme = () => {
  const toggleTheme = document.querySelector("#toggle-theme");
  const preferColor = window.matchMedia("(prefers-color-scheme: dark)");

  toggleTheme.addEventListener("click", () => {
    let text = toggleTheme;

    if (text.innerHTML === "Dark Theme 🌑") {
      text.innerHTML = "Light Theme 🌞";
    } else {
      text.innerHTML = "Dark Theme 🌑";
    }

    if (preferColor.matches) {
      document.body.classList.toggle("light-theme");
    } else {
      document.body.classList.toggle("dark-theme");
    }
  });
};

export let changeText;
export default toggleTheme;
