const mobileMenuButton = document.getElementById(
  "mobile-menu-button"
) as HTMLButtonElement;

mobileMenuButton.addEventListener("click", (event) => {
  console.log("click", event);
  const navBars = document.getElementById("mobile-nav-bars") as HTMLDivElement;

  // Sanity check if needed
  if (!(navBars instanceof HTMLDivElement)) return;

  const isExpanded = navBars.getAttribute("expand") === "true";

  navBars.setAttribute("expand", isExpanded ? "false" : "true");
  if (isExpanded) {
    navBars.classList.remove("block");
    navBars.classList.add("hidden");
  } else {
    navBars.classList.remove("hidden");
    navBars.classList.add("block");
  }
});
