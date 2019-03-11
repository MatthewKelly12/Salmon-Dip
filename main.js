window.onscroll = function() {
	navStick()
};

let navbar = document.getElementById("navbar");
let sticky = navbar.offsetTop;

function navStick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}