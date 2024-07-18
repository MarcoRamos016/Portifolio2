function menuShow() {
  let menuMobile = document.querySelector(".mobile-menu");
  if (menuMobile.classList.contains("open")) {
    menuMobile.classList.remove("open");
    document.querySelector(".icon").src =
      "https://img.icons8.com/ios-filled/50/menu--v6.png";
  } else {
    menuMobile.classList.add("open");
    document.querySelector(".icon").src =
      "https://img.icons8.com/?size=100&id=1NVn5K29mOSz&format=png&color=000000";
  }
}
