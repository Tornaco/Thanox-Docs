const currentAddress = window.location.pathname;

const Address = [
  "/", //Home
  "/docs/General/general/", //General
  "/docs/General/Security/",
  "/docs/General/Javascript/",
  "/docs/General/Styles/",
  "/docs/General/css/",
  "/docs/Korolev/korolev/", //Korolev
  "/docs/Korolev/atomic/",
  "/docs/Korolev/data/",
  "/docs/Korolev/file-tree/",
  "/docs/Edu/edu/", //Edu
  "/docs/Thales/thales/", //Thales
  "/docs/Thales/configuration/",
  "/docs/Thales/ui-components/",
  "/docs/Thales/navigation-structure/",
  "/docs/Thales/layout-typo/",
  "/docs/Thales/modifiers-color/",
];
console.log(currentAddress);

var index = Address.indexOf(currentAddress);
console.log(index);



window.addEventListener("keyup", function (event) {
  event.preventDefault;
  switch (true) {
    case event.key === "k":
      if (index === Address.length - 1) {
        void 0;
      } else {
        index++;
      }
      window.location.replace(Address[index]);
      console.log(index);

      break;
    case event.key === "j":
      if (index <= 0) {
        index = 0;
      }
      if (index > 0) {
        index--;
      }
      window.location.replace(Address[index]);
      console.log(index);

      break;
    case event.key === "1":
      window.location.replace(Address[0]);
      break;
    case event.key === "2":
      window.location.replace(Address[1]);
      break;
    case event.key === "3":
      window.location.replace(Address[6]);
      break;
    case event.key === "4":
      window.location.replace(Address[10]);
      break;
    case event.key === "5":
      window.location.replace(Address[11]);
      break;

    case event.key === "/":
      const search = document.querySelector(".search-input");
      search.focus();
      break;

    default:
      void 0;
  }
});
