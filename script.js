/* Change a style of navbar on scroll*/

//to select the nav using querySelector
const nav = document.querySelector("nav");
//add en event Listener bu using a anonymous function which will work when 
document.addEventListener("scroll", () => {
  let scroll_position = window.scrollY;
  //the we scroll the page below 25 it will change the color and add box shadow to navbar
  if (scroll_position > 25) {
    nav.style.backgroundColor = " #413f83";
    nav.style.boxShadow = '0 1rem 2rem rgba(0,0,0,0.2)';
  }
  //the we scroll the page above 25 it will remain transparent...
  else {
    nav.style.backgroundColor = "transparent";
  }
});








/*navbar open and close using javascript  */
//create a variable and grab the value from html and store in it
const navMenu = document.querySelector('.nav_menu')
const openBtn = document.querySelector('#open_menu')
const closeBtn = document.querySelector('#close_menu')
//logic for button to open using addEventListener method on openBtn  on click
openBtn.addEventListener('click', () => {
  //it will change some css properties to make the logic work here 
  navMenu.style.display = "flex"
  closeBtn.style.display = "inline-block"
  openBtn.style.display = "none"

})

//close navbar
//logic for button to close
//create a closeNavBar arrow function 
const closeNavBar = () => {
  //it will change some css properties to make the logic work here 
  navMenu.style.display = "none"
  closeBtn.style.display = "none"
  openBtn.style.display = "inline-block"
}
//using addEventListener method on closeBtn call the function closeNavBar on click
closeBtn.addEventListener('click', closeNavBar)


//to show and hide the answer and que using javascript.....
// create a variable to store value of faq
const faqs = document.querySelectorAll('.faq')
//loop through all to apply the class
faqs.forEach(faq => {
  faq.addEventListener('click', () => {
    faq.classList.toggle('open')

    //to change the icon from + to -
    //create a variable to store the value of icon
    const icon = faq.querySelector('.faq_icon i')
    //if the icon has class of this + then it will change to -if code will run 
    if (icon.className === 'fa-solid fa-plus') {
      icon.className = 'fa-solid fa-minus'
    }
    //otherwise this block of code if the condition does not matches'
    else {
      icon.className = 'fa-solid fa-plus'
    }

  })
})





/*Video in course page */
//create a btn and video variable to grab and store the value from html.

const button = document.querySelector(".switch-btn");
const video = document.querySelector(".container_video");
//apply a addEventListener method on button using call back function
button.addEventListener("click", function(){
  //if the btn has nit contain the css class slide it vill add css class slide which will pause the video
  if (!button.classList.contains("slide")) {
    button.classList.add("slide");
    video.pause();
  }
  //if the btn contain the css class slide it vill remove  css class slide which will play the video
  else {
    button.classList.remove("slide");
    video.play();
  }
});



/*form validation */

let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

let userFirstName = id("userFirstName"),
  userLastName = id("userLastName"),
  email = id("email"),
  password = id("password"),
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");


form.addEventListener('submit', (e) => {
  e.preventDefault();

  check(userFirstName, 0, "First name cannot be blank");
  check(userFirstName, 1, "Last name cannot be blank");
  check(email, 2, "Email cannot be blank");
  check(password, 3, "Password cannot be blank");


})
function check(id, serial, message) {

  if (id.value.trim() === '') {
    errorMsg[serial].innerHTML = message;
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

  } else {
    errorMsg[serial].innerHTML = " ";
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
}
