import React from "react"
import "./footer.css"

function Footer() {
  return (
    <footer class="d-flex flex-column align-items-center bg-dark">
      <div class="d-flex flex-column align-items-center">
        
        <ul class="nav d-flex flex-row mt-2">
          <p class="text-muted mx-1">Contributors: </p>
          <li class="nav-item mb-2 mx-1"><a href="https://github.com/dcodner24" class="nav-link p-0 text-muted">David Codner,</a></li>
          <li class="nav-item mb-2 mx-1"><a href="https://github.com/chewy441014" class="nav-link p-0 text-muted">Preston Hill,</a></li>
          <li class="nav-item mb-2 mx-1"><a href="https://github.com/mg8955" class="nav-link p-0 text-muted">Michael Gostomski,</a></li>
          <li class="nav-item mb-2 mx-1"><a href="https://github.com/penelope-leung" class="nav-link p-0 text-muted">Penny Leung,</a></li>
          <li class="nav-item mb-2 mx-1"><a href="https://github.com/ChiemekaAnunkor" class="nav-link p-0 text-muted">Chiemeka Anunkor</a></li>
        </ul>
      </div>

      <div class="d-flex flex-column align-items-center">
        <p class="text-muted mb-0 mt-1">Made With 💖 & React</p>
        <p class="text-muted mt-0">Copyright © 2022</p>
      </div>


    </footer>
  )
};

export default Footer;
