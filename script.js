
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-key");

    if (key) {
      display.value += key;
    } else if (btn.id === "clear") {
      display.value = "";
    } else if (btn.id === "back") {
      display.value = display.value.slice(0, -1);
    } else if (btn.id === "equals") {
      try {
        display.value = eval(display.value);
      } catch {
        display.value = "Error";
      }
    }
  });
});
