// sidebar 

const menuBtn = document.querySelector('.items-option .menu');
const sideBar = document.querySelector('.sidebar-background');
const cancelBtn = document.querySelector('.sidebar-background .cross');


menuBtn.addEventListener("click", () => {
  sideBar.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

sideBar.addEventListener("click", (e) => {
  if (!document.querySelector(".menu-option").contains(e.target)) {
    sideBar.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});

cancelBtn.addEventListener("click", (e) => {
  if (!document.querySelector(".menu-option").contains(e.target)) {
    sideBar.classList.remove("active");
    document.body.classList.remove("no-scroll");
  }
});


// account dropdown for mobile

// const accountBtn = document.querySelector(".authentication");
// const accountWrapper = document.querySelector(".account-dropdown");
// let click = false;

// accountBtn.addEventListener("click", function (e) {
//   e.stopPropagation();
//   if (click == false) {
//     accountWrapper.style.display = "flex";
//     click = true;
//   } else {
//     accountWrapper.style.display = "none";
//     click = false;
//   }
// });

// Close when clicking outside
// document.addEventListener("click", function () {
//   accountWrapper.style.display = "none";
// });



// nav sidebar
const navMenu = document.querySelector('.nav-menu');
const navSidebar = document.querySelector('.items-option');
const overlay = document.querySelector('.overlay');

navMenu.addEventListener("click", () => {
  navSidebar.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
  overlay.style.visibility = "visible";
});


overlay.addEventListener("click", (e) => {
  if (!document.querySelector(".items-option").contains(e.target)) {
    navSidebar.classList.remove("active");
    document.body.classList.remove("no-scroll");
    overlay.style.visibility = "hidden";
  }
});
