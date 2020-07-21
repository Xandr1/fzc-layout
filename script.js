(function burger() {
  let burgerMenuClosed = document.querySelector(".menu__burger"),
    burgerMenuOpened = document.querySelector(".menu__close"),
    burgerMenuLogo = document.querySelector(".menu__naming"),
    burgerMenuList = document.querySelector(".menu__list");

  if (burgerMenuClosed) {
    burgerMenuClosed.addEventListener("click", function (e) {
      if (!burgerMenuClosed.className.match("/[w-]*skip/g")) {
        burgerMenuClosed.classList.add("skip");
        burgerMenuOpened.classList.add("open");
        burgerMenuLogo.classList.add("open");
        burgerMenuList.classList.add("open");
      }
    });
  }

  if (burgerMenuOpened) {
    burgerMenuOpened.addEventListener("click", function (e) {
      if (!burgerMenuOpened.className.match("/[w-]*open/g")) {
        burgerMenuClosed.classList.remove("skip");
        burgerMenuOpened.classList.remove("open");
        burgerMenuLogo.classList.remove("open");
        burgerMenuList.classList.remove("open");
      }
    });
  }

  let menuElement = document.querySelector(".menu");

  document.addEventListener("click", function (event) {
    let isClickInside = menuElement.contains(event.target);
    if (!isClickInside && !burgerMenuOpened.className.match("/[w-]*open/g")) {
      burgerMenuClosed.classList.remove("skip");
      burgerMenuOpened.classList.remove("open");
      burgerMenuLogo.classList.remove("open");
      burgerMenuList.classList.remove("open");
    }
  });
})();
