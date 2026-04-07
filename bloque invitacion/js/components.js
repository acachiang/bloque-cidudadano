class AppNavbar extends HTMLElement {
  connectedCallback() {
    const isSubpage = this.hasAttribute('is-subpage');
    const indexLink = isSubpage ? '../index.html' : 'index.html';
    const pagesPrefix = isSubpage ? './' : 'pages/';
    
    this.innerHTML = `
      <header>
        <div class="container navbar-container" style="padding: 1.5rem 0;">
          <a href="${indexLink}" class="nav-brand">BLOQUE CIUDADANO</a>
          <button class="menu-toggle" id="mobile-menu-btn">☰</button>
          <nav class="nav-links" id="nav-links">
            <a href="${indexLink}">Inicio</a>
            <a href="${pagesPrefix}informacion.html">Sobre Nosotros</a>
            <a href="${pagesPrefix}eventos.html">Eventos</a>
            <a href="${pagesPrefix}contacto.html">Contacto</a>
          </nav>
        </div>
      </header>
    `;

    const menuBtn = this.querySelector('#mobile-menu-btn');
    const navLinks = this.querySelector('#nav-links');
    
    if(menuBtn) {
      menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        if(navLinks.classList.contains('active')) {
          menuBtn.textContent = '✕';
        } else {
          menuBtn.textContent = '☰';
        }
      });
    }
  }
}
customElements.define('app-navbar', AppNavbar);

// Footer Component
class AppFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="container">
          <h4 style="margin-bottom: 0.5rem; letter-spacing: -0.5px;">Bloque Ciudadano Mexicalense</h4>
          <p>Por un Mexicali más próspero para todos</p>
        </div>
      </footer>
    `;
  }
}
customElements.define('app-footer', AppFooter);
