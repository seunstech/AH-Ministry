// let navbar = document.querySelectorAll('.navbar');
// const navLinks = document.querySelector('.header-');
// const menuLinks = document.querySelector('.navbar_link');

// menuIcon.classList.remove('bx-x');
// navbar.classList.remove('active');
// let section = document.querySelectorAll('secrion');
// let navLinks = document.querySelectorAll('header nav a');

// window.onscroll = () => {
//     section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop - 150;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

        // if(top >= offset && top < offset + height) {
        //     navLinks.forEach(links => {
        //         links.classList.remove('active');
        //         document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
        //     });
        // };
    // });

//     let header = document.querySelector('');

// //     header.classList.toggle('sticky' , window.scrollY > 100);

// // }
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;
}
// ScrollReveal({ 
//     reset: true,
//     distance: '80px',
//      duration: 2000,
//      delay:200
//    });
 
//    ScrollReveal().reveal('.church-container,.heading', { origin: 'top' });
//    ScrollReveal().reveal('.location-content,.location-content-img, .portfolio-box, .contact form', { origin: 'bottom' });
//    ScrollReveal().reveal('.messages-content, .contact-us-img', { origin: 'left' });
//    ScrollReveal().reveal('.location, .locatio-', { origin: 'right' });
//    ScrollReveal().reveal('.messages, .messages', { origin: 'bottom' });
   
 const typed = new Typed('.multiple-text' , {
    strings: ['WELCOME TO CHURCH', 'GOD BLESS YOU'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
   });


  //  function myFunction() {
  //   var dots = document.getElementById("dots");
  //   var moreText = document.getElementById("more");
  //   var btnText = document.getElementById("myBtn");

  //   if (dots.style.display === "none") {
  //     dots.style.display = "inline";
  //     btnText.innerHTML = "Read more";
  //     moreText.style.display = "none";
  //   }else{
  //     dots.style.display = "none";
  //     btnText.innerHTML = "Read less";
  //     moreText.style.display = "inline";
  //   }
  //  }

  // //  navbar scr
  // window.onscroll = function() {myFunction()};

  // var navbar = document.getElementById("navbar");

  // var sticky = navbar.offsetTop;

  // function myFunction() {
  //   if (window.pageYOffset >= sticky) {
  //     navbar.classList.add("sticky")
  //   }else{
  //     navbar.classList.remove("sticky");
  //   }
  // }
  // message vi
  // var video = document.getElementById("myVideo");

  // var btn = document.getElementById("myBtn1");

  // function myFunction() {
  //   if (video.paused) {
  //     video.play();
  //     btn.innerHTML = "pause";
  //   }else{
  //     video.pause();
  //     btn.innerHTML = "play";
  //   }
  // }

//   menu.addEventListener('click', function() {
//     menu.classList.toggle('is-active');
//     menuLinks.classList.toggle('active');
// });
  bx-menu.addEventListener('click', function() {
    bx-menu.classList.toggle('is-active');
    bx-menu.classList.toggle('active');
});

  
  let listVideo = document.querySelectorAll('.video-list .vid');
  let mainVideo = document.querySelector('.main-video video');
  let title = document.querySelector('.main-video .title');

  listVideo.forEach(video =>{
    video.onclick = () =>{
listVideo.forEach(vid => vid.classList.remove('active'));
video.classList.add('active');
if(video.classList.contains('active')){
  let src = video.children[0].getAttribute('src');
  mainVideo.src = src;
  let text = video.children[1].innerHTML;
  title.innerHTML = text;
};

    };
  });
// let videoList = document.querySelectorAll('.video-list-container .list');

// videoList.forEach(vid =>{
//   vid.onclick = () =>{
//     let src = vid.querySelector('.list-video').src;
//     document.querySelector('.list-title').innerHTML;
//     document.querySelector('.main-video-container .main-video').src = src;
//     document.querySelector('.main-video-container .main-video').play();
//     document.querySelector('.main-video-container .main-vid-title').innerHTML = title;
//   }
// })