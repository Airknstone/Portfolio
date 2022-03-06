/* 
Title: animate.js
Author: Allan Trejo
Date: 03-5-2022
Description: animations with GSAP
*/
gsap.to('.intro-heading', { duration: 1.5, opacity: 1, y: 50 });
gsap.from('.bucket-list li', {
  opacity: 0,
  delay: 0.5,
  stagger: 0.1,
});
gsap.from('.bucket', { duration: 1, delay: 0.5, opacity: 0 });
gsap.to('.card', {
  opacity: 1,
  stagger: 0.3, // 0.1 seconds between when each ".box" element starts animating
});
