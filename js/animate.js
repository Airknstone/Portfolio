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

gsap.to('.animate-in', {
  y: 0,
  delay: 0.7,
  stagger: 0.3, // 0.1 seconds between when each ".box" element starts animating
});
document.addEventListener('DOMContentLoaded', () => {
  // Functions to open and close a modal
  function openModal($el) {
    $el.classList.add('is-active');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
  }

  function closeAllModals() {
    (document.querySelectorAll('.modal') || []).forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Add a click event on buttons to open a specific modal
  (document.querySelectorAll('.js-modal-trigger') || []).forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);
    console.log($target);

    $trigger.addEventListener('click', () => {
      openModal($target);
    });
  });

  // Add a click event on various child elements to close the parent modal
  (
    document.querySelectorAll(
      '.modal-background, .modal-close, .modal-card-head .delete, .modal-card-foot .button'
    ) || []
  ).forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Add a keyboard event to close all modals
  document.addEventListener('keydown', (event) => {
    const e = event || window.event;

    if (e.keyCode === 27) {
      // Escape key
      closeAllModals();
    }
  });
});
