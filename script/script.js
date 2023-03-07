
// close hamburger navbar after clicking a link
$('.navbar-nav>li>a').on('click', function () { $('.navbar-collapse').collapse('hide'); });

// // fade navbar from transparent (needs tweaking to work with full screen mobile nav menu)

// var nav = document.querySelector('nav'); // Identify target

// window.addEventListener('scroll', function (event) { // To listen for event
//     event.preventDefault();

//     if (window.scrollY <= 150) { // Just an example
//         nav.style.backgroundColor = 'transparent'; // or default color
//     } else {
//         nav.style.backgroundColor = 'black';
//     }
// });
