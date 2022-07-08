(() => {
  const menuBtnRef = document.querySelector("[data-menu-button]");
  const mobileMenuRef = document.querySelector("[data-menu]");
  const bodyClassToggle = document.querySelector("body");

  menuBtnRef.addEventListener("click", () => {
    const expanded =
    menuBtnRef.getAttribute("aria-expanded") === "true";
    menuBtnRef.setAttribute("aria-expanded", !expanded);

    mobileMenuRef.classList.toggle("is-open");

    bodyClassToggle.classList.toggle("menu-burger-is-open");
    
  });
})();

(() => {
  
  const refs = {
    closeMenuBrgBtn: document.querySelector("[data-menu-close-button]"),
    menuBrg: document.querySelector("[data-menu]"),
    bodyClassToggle: document.querySelector("body"),
  };

  refs.closeMenuBrgBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.menuBrg.classList.toggle("is-open"),
    refs.bodyClassToggle.classList.toggle("menu-burger-is-open");
    
  }
  
})();

(() => {
    const openBtn = document.querySelector("[data-menu-button]");
    const closeBtnMenuBurg = document.querySelector("[data-menu-close-button]");

    closeBtnMenuBurg.addEventListener("click", () => {
    const expanded =
    openBtn.getAttribute("aria-expanded");
    openBtn.setAttribute("aria-expanded", !expanded);
});
})();
