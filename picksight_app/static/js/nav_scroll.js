// Toggle the .bg-white class when the user scroll 50px 

if (window.scrollY) {
  window.scroll(0, 0);  // reset the scroll position to the top left of the document.
}

// Toggle the .bg-white class when the user scroll 100px 
window.onscroll = () => { scrollNavBar() };

scrollNavBar = () => {

  const navBar = document.getElementById('navbar');
  const logo = document.getElementById('logo');
  if (document.documentElement.scrollTop > 50) {
    navBar.classList.add('bg-white', 'shadow-md');
    logo.classList.add('w-24');
  } else {
    logo.classList.remove('w-24');
    navBar.classList.remove('bg-white', 'shadow-md');
  }

}