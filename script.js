/* =========================
   MOBILE MENU TOGGLE
========================= */
function toggleMenu() {
  const menu = document.getElementById("menu");

  if (menu.style.display === "flex") {
    menu.style.display = "none";
  } else {
    menu.style.display = "flex";
  }
}

/* =========================
   POLICY NOTICE HANDLING
========================= */
document.addEventListener("DOMContentLoaded", function () {
  const policyBox = document.getElementById("policyNotice");

  // If already accepted, hide popup
  if (localStorage.getItem("policyAccepted") === "true") {
    if (policyBox) policyBox.style.display = "none";
  }
});

function acceptPolicy() {
  localStorage.setItem("policyAccepted", "true");
  const policyBox = document.getElementById("policyNotice");
  if (policyBox) policyBox.style.display = "none";
}

function closePolicy() {
  const policyBox = document.getElementById("policyNotice");
  if (policyBox) policyBox.style.display = "none";
}

/* =========================
   OPTIONAL: CLOSE MENU ON LINK CLICK (MOBILE)
========================= */
document.addEventListener("click", function (e) {
  const menu = document.getElementById("menu");
  const toggle = document.querySelector(".menu-toggle");

  if (!menu || !toggle) return;

  if (
    menu.style.display === "flex" &&
    !menu.contains(e.target) &&
    !toggle.contains(e.target)
  ) {
    menu.style.display = "none";
  }
});
