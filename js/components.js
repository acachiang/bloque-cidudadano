class AppNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header style="position: sticky; top: 0; background: rgba(255, 255, 255, 0.95); backdrop-filter: blur(5px); z-index: 1000; border-bottom: 1px solid var(--color-secondary); padding: 0 1rem;">
        <div class="container navbar-container" style="padding: 1.25rem 0;">
          <a href="#" class="nav-brand">BLOQUE CIUDADANO</a>
          <button class="menu-toggle" id="mobile-menu-btn">☰</button>
          <nav class="nav-links" id="nav-links">
            <a href="#informacion">Acerca</a>
            <a href="#eventos">Eventos</a>
            <a href="#registro">Registro</a>
            <a href="#contacto">Contacto</a>
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
