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

const projectVideoes = document.querySelectorAll("[id=project-video]");
for (const projectVideo of projectVideoes) {
  if (!(projectVideo instanceof HTMLVideoElement)) continue;
  const video = projectVideo as HTMLVideoElement;
  video.addEventListener("mouseenter", () => {
    video.play();
  });
  video.addEventListener("mouseleave", () => {
    video.pause();
    video.currentTime = 0;
  });
}

const projectSeeMoreLinks = document.querySelectorAll(
  ".project-subsection .description .see-more"
);
for (const projectSeeMoreLink of projectSeeMoreLinks) {
  if (!(projectSeeMoreLink instanceof HTMLAnchorElement)) continue;
  const seeMoreLink = projectSeeMoreLink as HTMLAnchorElement;
  seeMoreLink.addEventListener("click", (event) => {
    event.preventDefault();
    const currentTarget = event.currentTarget as HTMLAnchorElement;
    if (!(currentTarget instanceof HTMLAnchorElement)) return;

    const nearbyDescription = Array.from(
      currentTarget.parentNode?.children || []
    ).find((child) => {
      return child.classList.contains("description-text");
    });

    if (!(nearbyDescription instanceof HTMLParagraphElement)) return;

    nearbyDescription.classList.remove("clamp");
    currentTarget.classList.add("hidden");
  });
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animate-slide-right");
      observer.unobserve(entry.target); // optional: stop observing after first animation
    }
  });
});

document.querySelectorAll(".slide-right").forEach((el) => observer.observe(el));
