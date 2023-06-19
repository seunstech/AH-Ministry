//DOM Element.
const navLinks = document.querySelector('.nav-links')
const menu = document.querySelector('.menu');



// eventListener for slide bar menu
menu.addEventListener('click', () => {
    navLinks.classList.toggle('active-nav')

    if (navLinks.classList.contains('active-nav')) {
      menu.innerHTML = '<iconify-icon icon="prime:times"></iconify-icon>';
    } else {
      menu.innerHTML = '<iconify-icon icon="clarity:menu-line"></iconify-icon>'
    }
})

const typed = new Typed('.multiple-text', {
  strings: [ 'WELCOME TO ANOINTED HOLYGHOST MINISTRY', 'GOD BLESS YOU'],
typeSpeed: 50,
backSpeed: 100,
backDelay: 1000,
loop: true
});



























// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-50px";
//   }
//   prevScrollpos = currentScrollPos;
// }

//  const typed = new Typed('.multiple-text' , {
//     strings: ['WELCOME TO CHURCH', 'GOD BLESS YOU'],
//     typeSpeed: 100,
//     backSpeed: 100,
//     backDelay: 1000,
//     loop: true
//    });

//   bx-menu.addEventListener('click', function() {
//     bx-menu.classList.toggle('is-active');
//     bx-menu.classList.toggle('active');
// });

  
//   let listVideo = document.querySelectorAll('.video-list .vid');
//   let mainVideo = document.querySelector('.main-video video');
//   let title = document.querySelector('.main-video .title');

//   listVideo.forEach(video =>{
//     video.onclick = () =>{
// listVideo.forEach(vid => vid.classList.remove('active'));
// video.classList.add('active');
// if(video.classList.contains('active')){
//   let src = video.children[0].getAttribute('src');
//   mainVideo.src = src;
//   let text = video.children[1].innerHTML;
//   title.innerHTML = text;
// };

//     };
//   });
