/* 
Title: footer.js
Author: Allan Trejo
Date: 03-5-2022
Description: Web component for footer
*/
class FooterComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
    <footer>
    <div class='github'>
    <a href="https://github.com/Airknstone" target="_blank"><i class="fab fa-github"></i><br> GitHub </a>
    </div>


      <div class='bellevue'>
        &copy;2022 Allan Trejo<br><a href="https://www.bellevue.edu" target="_blank">Bellevue University</a>
       <br> <a href="https://github.com/buwebdev" target="_blank">Bellevue Course Repository</a> <br>
       <a href='https://www.youtube.com/c/bellevueuniversity' target="_blank"><i class="fab fa-youtube"></i> Bellevue Youtube</a>
      </p>
    </footer>
        `;
  }
}

customElements.define('footer-component', FooterComponent);
