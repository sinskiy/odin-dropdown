import "./reset.css";
import "./style.css";

const dropdownTriggers = document.querySelectorAll(".dropdown-trigger");

for (const trigger of dropdownTriggers) {
  trigger.addEventListener("click", () => trigger.classList.toggle("open"));
}
