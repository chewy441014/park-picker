import React from "react"
import "./style.css"

function Footer() {
  return (
    <div class=" footerContainer">
      <footer class="row mb-2 row-cols-2">
        <div class="col">
          <a href="/" class="d-flex align-items-center mb-3 link-dark text-decoration-none">
            <svg class="bi me-2" width="40" height="32"></svg>
          </a>
          <p class="text-muted">Copy right © 2022</p>
        </div>

        <div class="col">
          <h5>Contributors</h5>
          <ul class="nav flex-column adjustfooterw">
            <li class="nav-item mb-2"><a href="https://github.com/dcodner24" class="nav-link p-0 text-muted">David Codner</a></li>
            <li class="nav-item mb-2"><a href="https://github.com/chewy441014" class="nav-link p-0 text-muted">Preston Hill</a></li>
            <li class="nav-item mb-2"><a href="https://github.com/mg8955" class="nav-link p-0 text-muted">Michael Gostomski</a></li>
            <li class="nav-item mb-2"><a href="https://github.com/penelope-leung" class="nav-link p-0 text-muted">Penny Leung</a></li>
            <li class="nav-item mb-2"><a href="https://github.com/ChiemekaAnunkor" class="nav-link p-0 text-muted">Chiemeka Anunkor</a></li>
          </ul>
        </div>
      </footer>
    </div>)
}

export default Footer;
