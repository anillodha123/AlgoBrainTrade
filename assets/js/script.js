'use strict';

/**
 * add event on element
 */

const addEventOnElem = function (elem, type, callback) {
  if (elem.length > 1) {
    for (let i = 0; i < elem.length; i++) {
      elem[i].addEventListener(type, callback);
    }
  } else {
    elem.addEventListener(type, callback);
  }
}



/**
 * toggle navbar
 */

const navbar = document.querySelector("[data-navbar]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const navToggler = document.querySelector("[data-nav-toggler]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  navToggler.classList.toggle("active");
}

addEventOnElem(navToggler, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  navToggler.classList.remove("active");
}

addEventOnElem(navbarLinks, "click", closeNavbar);

/**
 * header active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});


// email  notification 


function Send() {
  console.log("function call");
  var name=document.getElementById("name").value;
  var email=document.getElementById("email").value;
  var subject=document.getElementById("subject").value;
  var phone_no=document.getElementById("phone").value;
  var message=document.getElementById("message").value;
 
  var body= "name:"+name+"<br/> email:"+email+"<br/> subject:"+subject+"<br/> phone_no:"+phone_no+"<br/> message:"+message;
   console.log(body);
   Email.send({
   SecureToken:"347a10b2-2d47-40d6-8956-bf5a7dc05526",
   To : 'smalgobrain2.o@gmail.com',
   From : "smalgobrain2.o@gmail.com",
   Subject : subject,
   Body : body
   }).then(
      message => 
       {
       if(message=='OK'){
         swal("successfull", "your data Successfully Recived", "success");
       }
       else{
         swal("Something went wrong", "your data is not  Recived","error");
       }
      }
  );
  }