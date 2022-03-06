/* 
Title: header.js
Author: Allan Trejo
Date: 03-5-2022
Description: Web component for Headers
*/
class HeaderComponent extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
  
    <nav id='navigation'>
        <ul>
        <li><a href='./index.html'><i class="fas fa-home"></i><br> Home</a></li>
        <li><a href='./about.html'><i class="far fa-address-card"></i><br> About</a></li>
        <li><a href='./resume.html'><i class="far fa-file"></i><br> Resume</a></li>
        <li><a href='./projects.html'><i class="far fa-folder-open"></i><br> Projects</a></li>
        <li><a href='./database.html'><i class="fas fa-database"></i><br> Database Diagrams</a></li>
        <li><a href='./api.html'><i class="fas fa-bezier-curve"></i><br> API's</a></li>
        </ul>  
    </nav>

      `;
  }
}

customElements.define('header-component', HeaderComponent);
